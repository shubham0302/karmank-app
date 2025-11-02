import React from 'react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { Sparkles, TrendingUp, AlertCircle, Target } from 'lucide-react';

/**
 * FoundationalAnalysisTab - Shows all yogas, recurring numbers, and special insights
 */
const FoundationalAnalysisTab = ({ report }) => {
  if (!report) {
    return (
      <Card className="text-center">
        <p className="text-gray-400">No report data available</p>
      </Card>
    );
  }

  const { yogas, recurringNumbersAnalysis, specialInsights } = report;

  // Separate active and inactive yogas
  const activeYogas = yogas.filter(yoga => yoga.isActive);
  const inactiveYogas = yogas.filter(yoga => !yoga.isActive);

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <Card>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            Foundational Analysis
          </h1>
          <p className="text-gray-300">
            Deep insights into your numerological patterns and yogas
          </p>
        </div>
      </Card>

      {/* Active Yogas */}
      {activeYogas.length > 0 && (
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-400" size={28} />
              Active Yogas ({activeYogas.length})
            </div>
          </SectionTitle>
          <p className="text-gray-400 text-sm mb-4">
            These powerful combinations are currently active in your numerological chart
          </p>
          <div className="space-y-4">
            {activeYogas.map((yoga, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-5 rounded-lg border border-purple-700/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-purple-300">
                    {yoga.name}
                  </h3>
                  <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-xs font-semibold">
                    Active
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed mb-3">
                  {yoga.description}
                </p>
                {yoga.traits && yoga.traits.length > 0 && (
                  <div className="mt-4 bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-sm font-semibold text-purple-200 mb-2">Key Traits:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      {yoga.traits.map((trait, idx) => (
                        <li key={idx}>{trait}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Recurring Numbers Analysis */}
      {recurringNumbersAnalysis && recurringNumbersAnalysis.length > 0 && (
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-yellow-400" size={28} />
              Recurring Numbers Analysis
            </div>
          </SectionTitle>
          <p className="text-gray-400 text-sm mb-4">
            Numbers that appear multiple times in your date of birth carry special significance
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recurringNumbersAnalysis.map((analysis, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-4 rounded-lg border border-orange-700/50"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-orange-300">
                    {analysis.number}
                  </span>
                  <span className="px-3 py-1 bg-orange-600/30 text-orange-300 rounded-full text-sm font-semibold">
                    Appears {analysis.count}x
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {analysis.insight}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Special Insights */}
      {specialInsights && specialInsights.length > 0 && (
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Target className="text-yellow-400" size={28} />
              Special Insights
            </div>
          </SectionTitle>
          <div className="space-y-3">
            {specialInsights.map((insight, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 p-4 rounded-lg border border-yellow-700/50"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-200 leading-relaxed">
                    {insight.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Inactive Yogas (for reference) */}
      {inactiveYogas.length > 0 && (
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <AlertCircle className="text-gray-400" size={28} />
              Other Yogas (Not Active)
            </div>
          </SectionTitle>
          <p className="text-gray-400 text-sm mb-4">
            These yogas are not present in your chart but are listed for educational purposes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inactiveYogas.slice(0, 6).map((yoga, index) => (
              <div
                key={index}
                className="bg-gray-900/30 p-4 rounded-lg border border-gray-700 opacity-60"
              >
                <h4 className="text-lg font-semibold text-gray-400 mb-2">
                  {yoga.name}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {yoga.description}
                </p>
              </div>
            ))}
          </div>
          {inactiveYogas.length > 6 && (
            <p className="text-center text-gray-500 text-sm mt-4">
              + {inactiveYogas.length - 6} more yogas not shown
            </p>
          )}
        </Card>
      )}

      {/* Summary */}
      <Card>
        <SectionTitle>Summary</SectionTitle>
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-5 rounded-lg border border-blue-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-300 mb-1">
                {activeYogas.length}
              </div>
              <p className="text-gray-400 text-sm">Active Yogas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-300 mb-1">
                {recurringNumbersAnalysis?.length || 0}
              </div>
              <p className="text-gray-400 text-sm">Recurring Numbers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-1">
                {specialInsights?.length || 0}
              </div>
              <p className="text-gray-400 text-sm">Special Insights</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FoundationalAnalysisTab;
