import React from 'react';
import Modal from './ui/Modal';
import useAppStore from '../store/useAppStore';
import numberData from '../data/numberData';
import { Sparkles } from 'lucide-react';

/**
 * NumberMeaningModal - Modal to display number meanings when clicking Kundli cells
 */
const NumberMeaningModal = () => {
  const { modalData, closeModal } = useAppStore();
  const { isOpen, number } = modalData;

  if (!isOpen || !number) return null;

  const meaning = numberData.numberMeanings[number];
  const details = numberData.numberDetails[number];
  const destinyDetails = numberData.destinyNumberDetails[number];

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      title={`Number ${number}`}
    >
      <div className="space-y-4">
        {/* Planet Name */}
        {details?.name && (
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-700/50">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-purple-300" size={20} />
              <h3 className="text-lg font-semibold text-purple-300">
                Planetary Ruler
              </h3>
            </div>
            <p className="text-2xl font-bold text-purple-200">
              {details.name}
            </p>
            {details.coreVibration && (
              <span className="inline-block mt-2 px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs font-medium">
                {details.coreVibration}
              </span>
            )}
          </div>
        )}

        {/* General Meaning */}
        {meaning && (
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              General Meaning
            </h3>
            <p className="text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              {meaning}
            </p>
          </div>
        )}

        {/* As Basic Number */}
        {details?.description && (
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-2">
              As Basic Number
            </h3>
            <p className="text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              {details.description}
            </p>
          </div>
        )}

        {/* As Destiny Number */}
        {destinyDetails?.description && (
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">
              As Destiny Number
            </h3>
            <p className="text-gray-300 leading-relaxed bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              {destinyDetails.description}
            </p>
          </div>
        )}

        {/* Additional Info for Master Numbers */}
        {(number === 11 || number === 22 || number === 33) && (
          <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 p-4 rounded-lg border border-yellow-700/50">
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">
              Master Number
            </h3>
            <p className="text-gray-200 text-sm">
              This is a Master Number with heightened spiritual significance and power.
              It operates at a higher vibration than regular numbers.
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default NumberMeaningModal;
