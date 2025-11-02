import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  calculateBasicNumber,
  calculateDestinyNumber,
  buildBaseKundliGrid,
  detectYogas,
  analyzeRecurringNumbers
} from '../utils/calculations';
import { generateDashaReport } from '../utils/dashaCalculator';
import { checkSpecialRemedies } from '../utils/remediesChecker';
import yogaData from '../data/yogaData';

/**
 * Main Application Store using Zustand
 * Manages all numerology data and application state
 */
const useAppStore = create(
  persist(
    (set, get) => ({
      // User Data
      userData: {
        dob: null,
        name: '',
        gender: 'Male'
      },

      // Numerology Report
      report: null,

      // Dasha Report
      dashaReport: null,

      // UI State
      activeTab: 'welcome',
      modalData: {
        isOpen: false,
        number: null
      },
      isLoading: false,
      error: null,

      // Actions
      setUserData: (userData) => set({ userData }),

      setUserField: (field, value) =>
        set((state) => ({
          userData: {
            ...state.userData,
            [field]: value
          }
        })),

      /**
       * Generate complete numerology report
       */
      generateReport: () => {
        const { userData } = get();
        const { dob } = userData;

        if (!dob) {
          set({ error: 'Please provide date of birth' });
          return;
        }

        set({ isLoading: true, error: null });

        try {
          const dateObj = new Date(dob);

          // Calculate basic numbers
          const basicNumber = calculateBasicNumber(dateObj);
          const destinyNumber = calculateDestinyNumber(dateObj);

          // Build base Kundli grid
          const baseKundliGrid = buildBaseKundliGrid(dateObj, basicNumber, destinyNumber);

          // Detect yogas
          const yogas = detectYogas(yogaData, baseKundliGrid, basicNumber, destinyNumber);

          // Analyze recurring numbers
          const recurringNumbersAnalysis = analyzeRecurringNumbers(baseKundliGrid, destinyNumber);

          // Check for special insights
          const specialInsights = [];
          const day = dateObj.getDate();

          if (day === 22) {
            specialInsights.push({
              type: 'master_day',
              message: 'Born on 22nd - Master Builder energy present'
            });
          }

          if (day === 11) {
            specialInsights.push({
              type: 'master_day',
              message: 'Born on 11th - Master Intuitive energy present'
            });
          }

          // Generate complete report
          const report = {
            dob: dateObj,
            basicNumber,
            destinyNumber,
            baseKundliGrid,
            yogas,
            recurringNumbersAnalysis,
            specialInsights,
            generatedAt: new Date()
          };

          set({ report, isLoading: false });

          // Generate Dasha report (separate as it's intensive)
          get().generateDashaReport();
        } catch (error) {
          console.error('Error generating report:', error);
          set({ error: error.message, isLoading: false });
        }
      },

      /**
       * Generate Dasha report
       */
      generateDashaReport: () => {
        const { userData, report } = get();
        const { dob } = userData;

        if (!dob || !report) return;

        try {
          const dateObj = new Date(dob);
          const dashaReport = generateDashaReport(dateObj, report.basicNumber);

          // Check for special remedies based on current dashas
          const today = new Date();
          const currentYear = today.getFullYear();

          const annualDasha = dashaReport.yearlyDashaTimeline.find(
            (d) => d.year === currentYear
          );
          const mahaDasha = dashaReport.mahaDashaTimeline.find(
            (d) => today >= d.startDate && today <= d.endDate
          );

          const specialRemedies = checkSpecialRemedies(
            report.baseKundliGrid,
            report.destinyNumber,
            mahaDasha?.dashaNumber,
            annualDasha?.dashaNumber
          );

          // Add special remedies to report
          set((state) => ({
            report: {
              ...state.report,
              specialRemedies
            },
            dashaReport
          }));
        } catch (error) {
          console.error('Error generating Dasha report:', error);
        }
      },

      /**
       * Set active tab
       */
      setActiveTab: (tab) => set({ activeTab: tab }),

      /**
       * Open number meaning modal
       */
      openModal: (number) =>
        set({
          modalData: {
            isOpen: true,
            number
          }
        }),

      /**
       * Close modal
       */
      closeModal: () =>
        set({
          modalData: {
            isOpen: false,
            number: null
          }
        }),

      /**
       * Reset all data
       */
      reset: () =>
        set({
          userData: {
            dob: null,
            name: '',
            gender: 'Male'
          },
          report: null,
          dashaReport: null,
          activeTab: 'welcome',
          modalData: {
            isOpen: false,
            number: null
          },
          error: null
        })
    }),
    {
      name: 'karmank-storage',
      partialize: (state) => ({
        userData: state.userData,
        report: state.report,
        dashaReport: state.dashaReport,
        activeTab: state.activeTab
      }),
      // Handle state restoration with Date conversion
      onRehydrateStorage: () => (state) => {
        if (state?.report?.dob && typeof state.report.dob === 'string') {
          state.report.dob = new Date(state.report.dob);
        }
        if (state?.report?.generatedAt && typeof state.report.generatedAt === 'string') {
          state.report.generatedAt = new Date(state.report.generatedAt);
        }
        if (state?.userData?.dob && typeof state.userData.dob === 'string') {
          state.userData.dob = new Date(state.userData.dob);
        }

        // Convert Dasha timeline dates
        if (state?.dashaReport) {
          const convertDates = (timeline) => {
            if (!timeline) return;
            timeline.forEach(item => {
              if (item.startDate && typeof item.startDate === 'string') {
                item.startDate = new Date(item.startDate);
              }
              if (item.endDate && typeof item.endDate === 'string') {
                item.endDate = new Date(item.endDate);
              }
              if (item.date && typeof item.date === 'string') {
                item.date = new Date(item.date);
              }
            });
          };

          convertDates(state.dashaReport.mahaDashaTimeline);
          convertDates(state.dashaReport.yearlyDashaTimeline);
          convertDates(state.dashaReport.monthlyDashaTimeline);
          convertDates(state.dashaReport.dailyDashaTimeline);
        }
      }
    }
  )
);

export default useAppStore;
