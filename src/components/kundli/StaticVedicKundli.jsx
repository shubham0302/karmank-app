import React from 'react';
import useAppStore from '../../store/useAppStore';

/**
 * StaticVedicKundli - Displays the static 3x3 Kundli grid
 * @param {Object} props
 * @param {Object} props.grid - Grid object with counts for numbers 1-9
 * @param {number} props.basicNumber - Basic number for color coding
 * @param {number} props.destinyNumber - Destiny number for color coding
 */
const StaticVedicKundli = ({ grid, basicNumber, destinyNumber }) => {
  const openModal = useAppStore((state) => state.openModal);

  // Kundli layout: [3, 1, 9, 6, 7, 5, 2, 8, 4]
  const kundliLayout = [3, 1, 9, 6, 7, 5, 2, 8, 4];

  /**
   * Get color for a cell based on which number it represents
   */
  const getCellColor = (number) => {
    if (number === basicNumber) {
      return 'bg-cyan-600/80 border-cyan-400';
    }
    if (number === destinyNumber) {
      return 'bg-yellow-600/80 border-yellow-400';
    }
    // DOB numbers (from grid) will be purple
    if (grid && grid[number] > 0) {
      return 'bg-purple-600/80 border-purple-400';
    }
    // Empty cells
    return 'bg-gray-800/50 border-gray-600';
  };

  /**
   * Get display text for a cell
   */
  const getCellText = (number) => {
    if (!grid || grid[number] === 0) {
      // Empty cell - just show the number
      return number.toString();
    }

    // Repeat the number based on count (e.g., "333" for count 3)
    return number.toString().repeat(grid[number]);
  };

  /**
   * Handle cell click
   */
  const handleCellClick = (number) => {
    openModal(number);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="grid grid-cols-3 gap-2 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
        {kundliLayout.map((number, index) => {
          const count = grid ? grid[number] : 0;
          const colorClass = getCellColor(number);
          const displayText = getCellText(number);

          return (
            <div
              key={index}
              onClick={() => handleCellClick(number)}
              className={`
                aspect-square flex items-center justify-center
                ${colorClass}
                border-2 rounded-lg
                text-white font-bold text-xl
                cursor-pointer transition-all duration-200
                hover:scale-105 hover:shadow-lg
                ${count > 0 ? 'text-2xl' : 'text-lg opacity-60'}
              `}
              title={`Number ${number}${count > 0 ? ` (appears ${count} times)` : ''}`}
            >
              {displayText}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-3 justify-center text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-cyan-600 border border-cyan-400 rounded"></div>
          <span className="text-gray-300">Basic Number</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-600 border border-yellow-400 rounded"></div>
          <span className="text-gray-300">Destiny Number</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-600 border border-purple-400 rounded"></div>
          <span className="text-gray-300">DOB Numbers</span>
        </div>
      </div>
    </div>
  );
};

export default StaticVedicKundli;
