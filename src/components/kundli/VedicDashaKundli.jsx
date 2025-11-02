import React from 'react';
import useAppStore from '../../store/useAppStore';
import forecastData from '../../data/forecastData';

/**
 * VedicDashaKundli - Displays Kundli grid with active Dasha influences
 * @param {Object} props
 * @param {Object} props.grid - Grid object with counts for numbers 1-9
 * @param {Object} props.activeDashas - Active dashas {daily, monthly, yearly, maha, basic, destiny}
 */
const VedicDashaKundli = ({ grid, activeDashas }) => {
  const openModal = useAppStore((state) => state.openModal);

  // Kundli layout: [3, 1, 9, 6, 7, 5, 2, 8, 4]
  const kundliLayout = [3, 1, 9, 6, 7, 5, 2, 8, 4];

  const { colorMap } = forecastData;

  /**
   * Get all active dashas for a specific number
   */
  const getActiveDashasForNumber = (number) => {
    if (!activeDashas) return [];

    const active = [];

    if (activeDashas.daily === number) active.push('daily');
    if (activeDashas.monthly === number) active.push('monthly');
    if (activeDashas.yearly === number) active.push('yearly');
    if (activeDashas.maha === number) active.push('maha');
    if (activeDashas.basic === number) active.push('basic');
    if (activeDashas.destiny === number) active.push('destiny');

    return active;
  };

  /**
   * Get gradient background for cells with multiple influences
   */
  const getCellBackground = (number) => {
    const dashas = getActiveDashasForNumber(number);

    if (dashas.length === 0) {
      // No active dasha - show as empty
      return 'bg-gray-800/50 border-gray-600';
    }

    if (dashas.length === 1) {
      // Single dasha - solid color
      const dasha = dashas[0];
      const colorHex = colorMap[dasha];
      return `border-2`;
    }

    // Multiple dashas - use gradient
    return 'border-2 border-white';
  };

  /**
   * Get inline gradient style for multiple dashas
   */
  const getCellGradientStyle = (number) => {
    const dashas = getActiveDashasForNumber(number);

    if (dashas.length === 0) {
      return {};
    }

    if (dashas.length === 1) {
      const colorHex = colorMap[dashas[0]];
      return {
        backgroundColor: colorHex,
        borderColor: colorHex
      };
    }

    // Create gradient for multiple dashas
    const colors = dashas.map((d) => colorMap[d]);
    const gradientStops = colors.join(', ');

    return {
      background: `linear-gradient(135deg, ${gradientStops})`,
      borderColor: colors[0]
    };
  };

  /**
   * Get display text for a cell
   */
  const getCellText = (number) => {
    if (!grid || grid[number] === 0) {
      return number.toString();
    }

    return number.toString().repeat(grid[number]);
  };

  /**
   * Handle cell click
   */
  const handleCellClick = (number) => {
    openModal(number);
  };

  /**
   * Get dasha label
   */
  const getDashaLabel = (dashaType) => {
    const labels = {
      daily: 'Daily',
      monthly: 'Monthly',
      yearly: 'Yearly',
      maha: 'Maha',
      basic: 'Basic',
      destiny: 'Destiny'
    };
    return labels[dashaType] || dashaType;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="grid grid-cols-3 gap-2 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
        {kundliLayout.map((number, index) => {
          const count = grid ? grid[number] : 0;
          const displayText = getCellText(number);
          const backgroundClass = getCellBackground(number);
          const gradientStyle = getCellGradientStyle(number);
          const dashas = getActiveDashasForNumber(number);
          const isActive = dashas.length > 0;

          return (
            <div
              key={index}
              onClick={() => handleCellClick(number)}
              className={`
                aspect-square flex items-center justify-center
                ${backgroundClass}
                rounded-lg
                text-white font-bold
                cursor-pointer transition-all duration-200
                hover:scale-105 hover:shadow-lg
                ${count > 0 ? 'text-2xl' : 'text-lg'}
                ${!isActive ? 'opacity-60' : ''}
              `}
              style={gradientStyle}
              title={
                isActive
                  ? `Number ${number} - Active: ${dashas.map(getDashaLabel).join(', ')}`
                  : `Number ${number}`
              }
            >
              {displayText}
            </div>
          );
        })}
      </div>

      {/* Legend - Show active dashas */}
      {activeDashas && (
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold text-gray-300 text-center">
            Active Dashas
          </h3>
          <div className="flex flex-wrap gap-2 justify-center text-xs">
            {Object.entries(activeDashas).map(([dashaType, number]) => {
              if (!number) return null;

              return (
                <div
                  key={dashaType}
                  className="flex items-center gap-2 px-2 py-1 rounded border"
                  style={{
                    backgroundColor: `${colorMap[dashaType]}40`,
                    borderColor: colorMap[dashaType]
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorMap[dashaType] }}
                  ></div>
                  <span className="text-gray-200">
                    {getDashaLabel(dashaType)}: {number}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VedicDashaKundli;
