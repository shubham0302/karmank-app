import React, { useState, useMemo } from 'react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import VedicDashaKundli from '../kundli/VedicDashaKundli';
import { Calendar, Clock, Info } from 'lucide-react';
import { getActiveDashasForDate } from '../../utils/dashaCalculator';
import { buildDynamicKundliGrid } from '../../utils/calculations';
import numberData from '../../data/numberData';

/**
 * AdvancedDashaTab - Interactive Dasha analysis with dynamic Kundli
 * Shows active dashas for any selected date
 */
const AdvancedDashaTab = ({ report, dashaReport }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Get active dashas for selected date
  const activeDashas = useMemo(() => {
    if (!dashaReport) return null;
    return getActiveDashasForDate(selectedDate, dashaReport);
  }, [selectedDate, dashaReport]);

  // Build dynamic Kundli grid with active dashas
  const dynamicGrid = useMemo(() => {
    if (!report || !activeDashas) return report?.baseKundliGrid;

    return buildDynamicKundliGrid(report.baseKundliGrid, {
      daily: activeDashas.daily,
      monthly: activeDashas.monthly,
      yearly: activeDashas.yearly,
      maha: activeDashas.maha
    });
  }, [report, activeDashas]);

  // Format date for input
  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  // Quick date presets
  const setQuickDate = (years) => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + years);
    setSelectedDate(date);
  };

  // Get number description
  const getNumberDescription = (num) => {
    return numberData.numberDetails[num];
  };

  if (!report || !dashaReport) {
    return (
      <Card>
        <SectionTitle>Advanced Dasha Analysis</SectionTitle>
        <p className="text-gray-400">Please generate a numerology report first.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Date Selector */}
      <Card>
        <SectionTitle>Select Date for Dasha Analysis</SectionTitle>

        <div className="space-y-4">
          {/* Date Input */}
          <div className="flex items-center gap-3">
            <Calendar className="text-yellow-400" size={20} />
            <input
              type="date"
              value={formatDateForInput(selectedDate)}
              onChange={handleDateChange}
              className="input-field max-w-xs"
            />
          </div>

          {/* Quick Date Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDate(new Date())}
              className="btn-secondary text-xs"
            >
              Today
            </button>
            <button
              onClick={() => setQuickDate(-5)}
              className="btn-secondary text-xs"
            >
              5 Years Ago
            </button>
            <button
              onClick={() => setQuickDate(-1)}
              className="btn-secondary text-xs"
            >
              Last Year
            </button>
            <button
              onClick={() => setQuickDate(1)}
              className="btn-secondary text-xs"
            >
              Next Year
            </button>
            <button
              onClick={() => setQuickDate(5)}
              className="btn-secondary text-xs"
            >
              5 Years Ahead
            </button>
            <button
              onClick={() => setQuickDate(10)}
              className="btn-secondary text-xs"
            >
              10 Years Ahead
            </button>
          </div>
        </div>

        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div className="flex items-start gap-2">
            <Info className="text-blue-400 mt-0.5" size={18} />
            <p className="text-sm text-gray-300">
              Select any date to see the active Dasha periods and how they influence your Kundli grid.
              The Kundli below will update dynamically to show the combined effects.
            </p>
          </div>
        </div>
      </Card>

      {/* Dynamic Kundli Visualization */}
      <Card>
        <SectionTitle>Dynamic Kundli for {selectedDate.toLocaleDateString()}</SectionTitle>

        {activeDashas && (
          <div className="mb-6">
            <VedicDashaKundli
              grid={dynamicGrid}
              activeDashas={{
                daily: activeDashas.daily,
                monthly: activeDashas.monthly,
                yearly: activeDashas.yearly,
                maha: activeDashas.maha,
                basic: report.basicNumber,
                destiny: report.destinyNumber
              }}
            />
          </div>
        )}
      </Card>

      {/* Active Dashas Details */}
      {activeDashas && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Maha Dasha */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-purple-400" size={20} />
              <h3 className="text-lg font-semibold text-purple-400">Maha Dasha</h3>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">
                {activeDashas.maha}
              </div>
              <p className="text-sm text-gray-400">Major Life Period</p>
              {getNumberDescription(activeDashas.maha) && (
                <div className="mt-3 p-3 bg-purple-500/10 rounded-lg">
                  <p className="text-sm font-semibold text-purple-300">
                    {getNumberDescription(activeDashas.maha).name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {getNumberDescription(activeDashas.maha).description}
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Yearly Dasha */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-indigo-400" size={20} />
              <h3 className="text-lg font-semibold text-indigo-400">Yearly Dasha</h3>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">
                {activeDashas.yearly}
              </div>
              <p className="text-sm text-gray-400">Annual Period</p>
              {getNumberDescription(activeDashas.yearly) && (
                <div className="mt-3 p-3 bg-indigo-500/10 rounded-lg">
                  <p className="text-sm font-semibold text-indigo-300">
                    {getNumberDescription(activeDashas.yearly).name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {getNumberDescription(activeDashas.yearly).description}
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Monthly Dasha */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-emerald-400" size={20} />
              <h3 className="text-lg font-semibold text-emerald-400">Monthly Dasha</h3>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">
                {activeDashas.monthly}
              </div>
              <p className="text-sm text-gray-400">Pratyantara Period (41-74 days)</p>
              {getNumberDescription(activeDashas.monthly) && (
                <div className="mt-3 p-3 bg-emerald-500/10 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-300">
                    {getNumberDescription(activeDashas.monthly).name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {getNumberDescription(activeDashas.monthly).description}
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Daily Dasha */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-fuchsia-400" size={20} />
              <h3 className="text-lg font-semibold text-fuchsia-400">Daily Dasha</h3>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-yellow-400">
                {activeDashas.daily}
              </div>
              <p className="text-sm text-gray-400">Daily Influence</p>
              {getNumberDescription(activeDashas.daily) && (
                <div className="mt-3 p-3 bg-fuchsia-500/10 rounded-lg">
                  <p className="text-sm font-semibold text-fuchsia-300">
                    {getNumberDescription(activeDashas.daily).name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {getNumberDescription(activeDashas.daily).description}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Combined Influence Summary */}
      <Card>
        <SectionTitle>Combined Dasha Influence</SectionTitle>
        <div className="space-y-3">
          <p className="text-gray-300">
            On <span className="text-yellow-400 font-semibold">{selectedDate.toLocaleDateString()}</span>,
            your energies are influenced by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <span className="text-purple-400">Maha Dasha {activeDashas?.maha}</span> - Long-term life direction
            </li>
            <li>
              <span className="text-indigo-400">Yearly Dasha {activeDashas?.yearly}</span> - Annual themes and opportunities
            </li>
            <li>
              <span className="text-emerald-400">Monthly Dasha {activeDashas?.monthly}</span> - Current focus areas
            </li>
            <li>
              <span className="text-fuchsia-400">Daily Dasha {activeDashas?.daily}</span> - Immediate influences
            </li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-sm text-gray-300">
              💡 <span className="font-semibold">Tip:</span> The dynamic Kundli above shows how these
              Dasha periods combine with your birth chart. Numbers that appear more frequently gain
              stronger influence during this time.
            </p>
          </div>
        </div>
      </Card>

      {/* Understanding Dashas */}
      <Card>
        <SectionTitle>Understanding Dasha Periods</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <h4 className="text-purple-400 font-semibold mb-2">Maha Dasha</h4>
            <p className="text-sm text-gray-400">
              Major life period lasting several years. Each number rules for its value in years (e.g., 5 rules for 5 years).
            </p>
          </div>
          <div className="p-3 bg-indigo-500/10 rounded-lg">
            <h4 className="text-indigo-400 font-semibold mb-2">Yearly Dasha</h4>
            <p className="text-sm text-gray-400">
              Annual period from birthday to birthday. Sets the tone for the entire year ahead.
            </p>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-lg">
            <h4 className="text-emerald-400 font-semibold mb-2">Monthly Dasha (Pratyantara)</h4>
            <p className="text-sm text-gray-400">
              Shorter periods of 41-74 days. Brings specific themes and opportunities within the year.
            </p>
          </div>
          <div className="p-3 bg-fuchsia-500/10 rounded-lg">
            <h4 className="text-fuchsia-400 font-semibold mb-2">Daily Dasha</h4>
            <p className="text-sm text-gray-400">
              Daily influence that changes each day. Helps with timing specific activities and decisions.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdvancedDashaTab;
