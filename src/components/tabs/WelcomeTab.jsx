import React from 'react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import Trait from '../ui/Trait';
import StaticVedicKundli from '../kundli/StaticVedicKundli';
import numberData from '../../data/numberData';
import combinationInsights from '../../data/combinationInsights';
import { Sun, Moon, Sparkles, Trophy } from 'lucide-react';

/**
 * WelcomeTab - Main landing tab showing basic numerology overview
 */
const WelcomeTab = ({ report }) => {
  if (!report) {
    return (
      <Card className="text-center">
        <p className="text-gray-400">No report data available</p>
      </Card>
    );
  }

  const { basicNumber, destinyNumber, baseKundliGrid, yogas } = report;

  // Get number details
  const basicDetails = numberData.numberDetails[basicNumber];
  const destinyDetails = numberData.destinyNumberDetails[destinyNumber];
  const basicMeaning = numberData.numberMeanings[basicNumber];
  const destinyMeaning = numberData.numberMeanings[destinyNumber];

  // Get combination insight
  const combinationKey = `${basicNumber}-${destinyNumber}`;
  const combinationInsight = combinationInsights[combinationKey];

  // Get active yogas
  const activeYogas = yogas.filter(yoga => yoga.isActive);

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <Card>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            Welcome to Your Numerology Report
          </h1>
          <p className="text-gray-300">
            Discover the cosmic blueprint of your life through Vedic Numerology
          </p>
        </div>
      </Card>

      {/* Core Numbers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Number */}
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Sun className="text-yellow-400" size={28} />
              Basic Number: {basicNumber}
            </div>
          </SectionTitle>
          <div className="space-y-3">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                {basicDetails?.name || `Number ${basicNumber}`}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {basicDetails?.description || basicMeaning}
              </p>
              {basicDetails?.coreVibration && (
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-xs font-medium">
                    {basicDetails.coreVibration}
                  </span>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Destiny Number */}
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Moon className="text-yellow-400" size={28} />
              Destiny Number: {destinyNumber}
            </div>
          </SectionTitle>
          <div className="space-y-3">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                {destinyDetails?.description?.split(',')[0] || `Number ${destinyNumber}`}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {destinyDetails?.description || destinyMeaning}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Vedic Kundli */}
      <Card>
        <SectionTitle>
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-400" size={28} />
            Your Vedic Kundli
          </div>
        </SectionTitle>
        <p className="text-gray-400 text-sm mb-4">
          Click on any number to learn its meaning and significance in your life
        </p>
        <StaticVedicKundli
          grid={baseKundliGrid}
          basicNumber={basicNumber}
          destinyNumber={destinyNumber}
        />
      </Card>

      {/* Active Yogas */}
      {activeYogas.length > 0 && (
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-400" size={28} />
              Active Yogas
            </div>
          </SectionTitle>
          <p className="text-gray-400 text-sm mb-4">
            Special planetary combinations found in your chart
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeYogas.slice(0, 4).map((yoga, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-700/50"
              >
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  {yoga.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {yoga.description}
                </p>
              </div>
            ))}
          </div>
          {activeYogas.length > 4 && (
            <p className="text-center text-gray-400 text-sm mt-4">
              + {activeYogas.length - 4} more yogas (see Foundational Analysis tab)
            </p>
          )}
        </Card>
      )}

      {/* Combination Insight */}
      {combinationInsight && (
        <Card>
          <SectionTitle>Your Unique Combination</SectionTitle>
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-5 rounded-lg border border-yellow-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="px-4 py-2 bg-yellow-600/30 rounded-lg">
                <span className="text-2xl font-bold text-yellow-300">
                  {basicNumber} + {destinyNumber}
                </span>
              </div>
            </div>
            <p className="text-gray-200 leading-relaxed">
              {combinationInsight}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default WelcomeTab;
