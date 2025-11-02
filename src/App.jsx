import React from 'react';
import useAppStore from './store/useAppStore';
import UserInputForm from './components/UserInputForm';
import TabNavigation from './components/TabNavigation';
import NumberMeaningModal from './components/NumberMeaningModal';
import WelcomeTab from './components/tabs/WelcomeTab';
import NumerologyTraitsTab from './components/tabs/NumerologyTraitsTab';
import ForecastTab from './components/tabs/ForecastTab';
import FoundationalAnalysisTab from './components/tabs/FoundationalAnalysisTab';
import AdvancedDashaTab from './components/tabs/AdvancedDashaTab';
import SimpleTab from './components/tabs/SimpleTab';
import { RotateCcw, FileText, Home, GraduationCap, Sparkles } from 'lucide-react';

/**
 * Main Application Component
 */
function App() {
  const { report, dashaReport, activeTab, setActiveTab, reset } = useAppStore();

  /**
   * Handle reset - clear all data and start over
   */
  const handleReset = () => {
    if (confirm('Are you sure you want to reset? All data will be cleared.')) {
      reset();
    }
  };

  /**
   * Render active tab content
   */
  const renderTabContent = () => {
    switch (activeTab) {
      case 'welcome':
        return <WelcomeTab report={report} />;

      case 'traits':
        return <NumerologyTraitsTab report={report} />;

      case 'forecast':
        return <ForecastTab report={report} dashaReport={dashaReport} />;

      case 'foundational':
        return <FoundationalAnalysisTab report={report} />;

      case 'name':
        return (
          <SimpleTab
            title="Name Analysis"
            description="Discover the numerological significance of your name"
            icon={FileText}
            content="Name analysis feature will provide detailed insights into your name's vibration, letter values, and how they complement your birth numbers. Coming soon!"
          />
        );

      case 'asset':
        return (
          <SimpleTab
            title="Asset Vibration"
            description="Understand the numerological energy of your assets"
            icon={Home}
            content="Asset vibration analysis will help you choose auspicious numbers for properties, vehicles, and other valuable assets. Coming soon!"
          />
        );

      case 'education':
        return (
          <SimpleTab
            title="Education"
            description="Guidance for academic and learning pursuits"
            icon={GraduationCap}
            content="Educational guidance will provide insights into favorable study periods, suitable fields of study, and learning approaches based on your numerology. Coming soon!"
          />
        );

      case 'remedies':
        return (
          <SimpleTab
            title="Remedies & Guidance"
            description="Personalized remedies to harmonize your life"
            icon={Sparkles}
            content="Remedies section will offer personalized suggestions including mantras, gemstones, colors, and lifestyle adjustments to enhance positive energies. Coming soon!"
          />
        );

      case 'advanced':
        return <AdvancedDashaTab report={report} dashaReport={dashaReport} />;

      default:
        return <WelcomeTab report={report} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
                KarmAnk
              </h1>
              <p className="text-gray-400 text-sm">Vedic Numerology</p>
            </div>
            {report && (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                title="Reset and start over"
              >
                <RotateCcw size={18} />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!report ? (
          /* Show input form if no report exists */
          <div className="max-w-2xl mx-auto">
            <UserInputForm />
          </div>
        ) : (
          /* Show tabs and report content */
          <div className="space-y-6">
            {/* Tab Navigation */}
            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />

            {/* Tab Content */}
            <div className="animate-fadeIn">
              {renderTabContent()}
            </div>
          </div>
        )}
      </main>

      {/* Number Meaning Modal */}
      <NumberMeaningModal />

      {/* Footer */}
      <footer className="bg-gray-900/90 border-t border-gray-700 mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            KarmAnk - Vedic Numerology Application
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Based on ancient Vedic numerology principles
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
