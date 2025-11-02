// Dasha (Time Period) Calculation System

import { reduceToSingleDigit } from './calculations';

/**
 * Weekday to number mapping (Sun=1, Mon=2, Tue=9, Wed=5, Thu=3, Fri=6, Sat=8)
 */
const WEEKDAY_NUMBER_MAP = [1, 2, 9, 5, 3, 6, 8]; // Sunday to Saturday

/**
 * Pratyantara (Monthly Dasha) duration map in days
 */
const PRATYANTARA_DURATION_MAP = {
  1: 8,
  2: 16,
  3: 24,
  4: 32,
  5: 41,
  6: 49,
  7: 57,
  8: 64,
  9: 74
};

/**
 * Calculate Maha Dasha (Major Life Periods)
 * Each dasha lasts for its number value in years
 * @param {Date} dob - Date of birth
 * @param {number} basicNumber - Basic number (starting dasha)
 * @returns {Array} - Timeline of maha dashas
 */
export const calculateMahaDasha = (dob, basicNumber) => {
  const timeline = [];
  let currentDate = new Date(dob);
  let currentNumber = basicNumber;

  // Generate 100 years of Maha Dasha
  for (let i = 0; i < 50; i++) { // ~50 cycles covers 100+ years
    const duration = currentNumber; // Dasha lasts for its number value in years

    const startDate = new Date(currentDate);
    const endDate = new Date(currentDate);
    endDate.setFullYear(endDate.getFullYear() + duration);
    endDate.setDate(endDate.getDate() - 1); // End one day before next starts

    timeline.push({
      dashaNumber: currentNumber,
      startDate,
      endDate,
      duration: `${duration} years`,
      ageStart: Math.floor((startDate - dob) / (365.25 * 24 * 60 * 60 * 1000))
    });

    // Move to next date and next number in cycle
    currentDate = new Date(endDate);
    currentDate.setDate(currentDate.getDate() + 1);
    currentNumber = currentNumber === 9 ? 1 : currentNumber + 1;
  }

  return timeline;
};

/**
 * Calculate Yearly Dasha (Annual Periods)
 * Formula: basicNum + birthMonth + (year % 100) + weekdayNumber
 * @param {Date} dob - Date of birth
 * @param {number} basicNumber - Basic number
 * @returns {Array} - Timeline of yearly dashas
 */
export const calculateYearlyDasha = (dob, basicNumber) => {
  const timeline = [];
  const birthDay = dob.getDate();
  const birthMonth = dob.getMonth() + 1;

  // Generate 100 years of yearly dashas
  for (let year = dob.getFullYear(); year <= dob.getFullYear() + 100; year++) {
    const birthdayThisYear = new Date(year, dob.getMonth(), birthDay);

    // Calculate weekday number for this birthday
    const weekday = birthdayThisYear.getDay();
    const weekdayNumber = WEEKDAY_NUMBER_MAP[weekday];

    // Formula: basicNum + birthMonth + (year % 100) + weekdayNumber
    const yearMod100 = year % 100;
    const sum = basicNumber + birthMonth + yearMod100 + weekdayNumber;
    const dashaNumber = reduceToSingleDigit(sum);

    const startDate = new Date(birthdayThisYear);
    const endDate = new Date(startDate);
    endDate.setFullYear(endDate.getFullYear() + 1);
    endDate.setDate(endDate.getDate() - 1);

    timeline.push({
      year,
      dashaNumber,
      startDate,
      endDate,
      weekday: weekday,
      weekdayNumber
    });
  }

  return timeline;
};

/**
 * Calculate Monthly Dasha (Pratyantara Periods)
 * Each yearly period is divided into 9 monthly dashas
 * Duration varies based on the dasha number
 * @param {Array} yearlyTimeline - Yearly dasha timeline
 * @returns {Array} - Timeline of monthly dashas
 */
export const calculateMonthlyDasha = (yearlyTimeline) => {
  const timeline = [];

  yearlyTimeline.forEach((yearlyPeriod) => {
    let currentDate = new Date(yearlyPeriod.startDate);
    let dashaNumber = yearlyPeriod.dashaNumber;

    // Generate 9 monthly dashas for this year
    for (let i = 0; i < 9; i++) {
      const duration = PRATYANTARA_DURATION_MAP[dashaNumber];

      const startDate = new Date(currentDate);
      const endDate = new Date(currentDate);
      endDate.setDate(endDate.getDate() + duration - 1);

      // Don't exceed the yearly period end date
      if (endDate > yearlyPeriod.endDate) {
        endDate.setTime(yearlyPeriod.endDate.getTime());
      }

      timeline.push({
        dashaNumber,
        startDate,
        endDate,
        duration: `${duration} days`,
        yearlyDasha: yearlyPeriod.dashaNumber,
        year: yearlyPeriod.year
      });

      // Move to next date and next dasha number
      currentDate = new Date(endDate);
      currentDate.setDate(currentDate.getDate() + 1);
      dashaNumber = dashaNumber === 9 ? 1 : dashaNumber + 1;

      // Break if we've exceeded the yearly period
      if (currentDate > yearlyPeriod.endDate) break;
    }
  });

  return timeline;
};

/**
 * Calculate Daily Dasha
 * Formula: monthlyDasha + weekdayNumber, reduced to single digit
 * @param {Array} monthlyTimeline - Monthly dasha timeline
 * @returns {Array} - Timeline of daily dashas
 */
export const calculateDailyDasha = (monthlyTimeline) => {
  const timeline = [];

  monthlyTimeline.forEach((monthlyPeriod) => {
    let currentDate = new Date(monthlyPeriod.startDate);

    while (currentDate <= monthlyPeriod.endDate) {
      const weekday = currentDate.getDay();
      const weekdayNumber = WEEKDAY_NUMBER_MAP[weekday];

      // Formula: monthlyDasha + weekdayNumber
      const sum = monthlyPeriod.dashaNumber + weekdayNumber;
      const dashaNumber = reduceToSingleDigit(sum);

      timeline.push({
        date: new Date(currentDate),
        dashaNumber,
        weekday,
        weekdayNumber,
        monthlyDasha: monthlyPeriod.dashaNumber,
        yearlyDasha: monthlyPeriod.yearlyDasha
      });

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  return timeline;
};

/**
 * Get active dashas for a specific date
 * @param {Date} targetDate - Date to check
 * @param {Object} dashaReport - Complete dasha report
 * @returns {Object} - Active dashas {maha, yearly, monthly, daily}
 */
export const getActiveDashasForDate = (targetDate, dashaReport) => {
  const activeDashas = {
    maha: null,
    yearly: null,
    monthly: null,
    daily: null
  };

  // Find Maha Dasha
  const mahaDasha = dashaReport.mahaDashaTimeline.find(
    (d) => targetDate >= d.startDate && targetDate <= d.endDate
  );
  if (mahaDasha) activeDashas.maha = mahaDasha.dashaNumber;

  // Find Yearly Dasha
  const yearlyDasha = dashaReport.yearlyDashaTimeline.find(
    (d) => targetDate >= d.startDate && targetDate <= d.endDate
  );
  if (yearlyDasha) activeDashas.yearly = yearlyDasha.dashaNumber;

  // Find Monthly Dasha
  const monthlyDasha = dashaReport.monthlyDashaTimeline.find(
    (d) => targetDate >= d.startDate && targetDate <= d.endDate
  );
  if (monthlyDasha) activeDashas.monthly = monthlyDasha.dashaNumber;

  // Find Daily Dasha
  const dailyDasha = dashaReport.dailyDashaTimeline.find(
    (d) => d.date.toDateString() === targetDate.toDateString()
  );
  if (dailyDasha) activeDashas.daily = dailyDasha.dashaNumber;

  return activeDashas;
};

/**
 * Generate complete Dasha report for a person
 * @param {Date} dob - Date of birth
 * @param {number} basicNumber - Basic number
 * @returns {Object} - Complete dasha report with all timelines
 */
export const generateDashaReport = (dob, basicNumber) => {
  console.log('Generating Dasha Report...');

  // Calculate all timelines
  const mahaDashaTimeline = calculateMahaDasha(dob, basicNumber);
  const yearlyDashaTimeline = calculateYearlyDasha(dob, basicNumber);
  const monthlyDashaTimeline = calculateMonthlyDasha(yearlyDashaTimeline);
  const dailyDashaTimeline = calculateDailyDasha(monthlyDashaTimeline);

  console.log(`Generated ${mahaDashaTimeline.length} Maha Dashas`);
  console.log(`Generated ${yearlyDashaTimeline.length} Yearly Dashas`);
  console.log(`Generated ${monthlyDashaTimeline.length} Monthly Dashas`);
  console.log(`Generated ${dailyDashaTimeline.length} Daily Dashas`);

  return {
    mahaDashaTimeline,
    yearlyDashaTimeline,
    monthlyDashaTimeline,
    dailyDashaTimeline
  };
};

/**
 * Get current active dashas for today
 * @param {Object} dashaReport - Complete dasha report
 * @returns {Object} - Active dashas for today
 */
export const getCurrentDashas = (dashaReport) => {
  const today = new Date();
  return getActiveDashasForDate(today, dashaReport);
};
