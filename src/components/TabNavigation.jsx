import React from 'react';

/**
 * TabNavigation - Horizontal scrollable tab navigation for the app
 * @param {Object} props
 * @param {string} props.activeTab - Currently active tab
 * @param {Function} props.onTabChange - Callback when tab is changed
 */
const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'name', label: 'Name Analysis' },
    { id: 'asset', label: 'Asset Vibration' },
    { id: 'education', label: 'Education' },
    { id: 'remedies', label: 'Remedies & Guidance' },
    { id: 'traits', label: 'Numerology Traits' },
    { id: 'forecast', label: 'Forecast' },
    { id: 'foundational', label: 'Foundational Analysis' },
    { id: 'advanced', label: 'Advanced Dasha' }
  ];

  /**
   * Handle tab click
   */
  const handleTabClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="w-full bg-gray-900/80 border-b border-gray-700 sticky top-0 z-10 backdrop-blur-sm">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max px-4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  px-6 py-4 font-medium text-sm whitespace-nowrap
                  border-b-2 transition-all duration-200
                  ${
                    isActive
                      ? 'border-yellow-400 text-yellow-400 bg-yellow-400/10'
                      : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
