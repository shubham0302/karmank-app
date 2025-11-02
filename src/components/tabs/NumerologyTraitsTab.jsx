import React from 'react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import numberData from '../../data/numberData';
import professionData from '../../data/professionData';
import {
  Briefcase,
  Heart,
  Activity,
  Calendar,
  Palette,
  Gem,
  DollarSign,
  Users,
  AlertCircle,
  TrendingUp
} from 'lucide-react';

/**
 * NumerologyTraitsTab - Comprehensive traits and characteristics
 */
const NumerologyTraitsTab = ({ report }) => {
  if (!report) {
    return (
      <Card className="text-center">
        <p className="text-gray-400">No report data available</p>
      </Card>
    );
  }

  const { destinyNumber } = report;
  const traits = numberData.destinyTraits[destinyNumber];
  const professionInfo = professionData[destinyNumber];

  if (!traits) {
    return (
      <Card className="text-center">
        <p className="text-gray-400">Traits data not available for this destiny number</p>
      </Card>
    );
  }

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <Card>
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
            Numerology Traits
          </h1>
          <p className="text-gray-300">
            Destiny Number {destinyNumber} - Complete Personality Analysis
          </p>
        </div>
      </Card>

      {/* Core Traits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Planetary Info */}
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Activity className="text-yellow-400" size={24} />
              Planetary Ruler
            </div>
          </SectionTitle>
          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-700/50">
            <p className="text-2xl font-bold text-purple-300 mb-2">{traits.Planet}</p>
            <p className="text-gray-300 text-sm">
              Your destiny is ruled by {traits.Planet}, influencing your life path and characteristics.
            </p>
          </div>
        </Card>

        {/* Finance */}
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <DollarSign className="text-yellow-400" size={24} />
              Financial Outlook
            </div>
          </SectionTitle>
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-4 rounded-lg border border-green-700/50">
            <p className="text-gray-200 leading-relaxed">{traits.Finance}</p>
          </div>
        </Card>
      </div>

      {/* Health Defects */}
      <Card>
        <SectionTitle>
          <div className="flex items-center gap-2">
            <Heart className="text-yellow-400" size={24} />
            Health Considerations
          </div>
        </SectionTitle>
        <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/50">
          <p className="text-gray-200 leading-relaxed">{traits['Health Defects']}</p>
          <p className="text-gray-400 text-sm mt-3">
            Note: These are tendencies based on numerology. Always consult medical professionals for health concerns.
          </p>
        </div>
      </Card>

      {/* Lucky Elements */}
      <Card>
        <SectionTitle>Lucky Elements</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Lucky Days */}
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="text-blue-400" size={20} />
              <h3 className="text-lg font-semibold text-blue-300">Lucky Days</h3>
            </div>
            <p className="text-gray-200">{traits['Lucky Days']}</p>
          </div>

          {/* Lucky Colors */}
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="text-pink-400" size={20} />
              <h3 className="text-lg font-semibold text-pink-300">Lucky Colors</h3>
            </div>
            <p className="text-gray-200">{traits['Lucky Colours']}</p>
          </div>

          {/* Lucky Jewels */}
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Gem className="text-purple-400" size={20} />
              <h3 className="text-lg font-semibold text-purple-300">Lucky Jewels</h3>
            </div>
            <p className="text-gray-200">{traits['Lucky Jewels']}</p>
          </div>

          {/* Friendly Numbers */}
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <div className="flex items-center gap-2 mb-2">
              <Users className="text-green-400" size={20} />
              <h3 className="text-lg font-semibold text-green-300">Friendly Numbers</h3>
            </div>
            <p className="text-gray-200">{traits['Friendly Number']}</p>
          </div>
        </div>
      </Card>

      {/* Important Years */}
      <Card>
        <SectionTitle>
          <div className="flex items-center gap-2">
            <TrendingUp className="text-yellow-400" size={24} />
            Important Years
          </div>
        </SectionTitle>
        <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-700/50">
          <p className="text-gray-200 mb-2">
            <span className="font-semibold text-yellow-300">Key Life Milestones:</span> {traits['Important Years']}
          </p>
          <p className="text-gray-400 text-sm">
            These years are particularly significant for major life events, decisions, and transformations.
          </p>
        </div>
      </Card>

      {/* Profession Guidance */}
      {professionInfo && (
        <Card>
          <SectionTitle>
            <div className="flex items-center gap-2">
              <Briefcase className="text-yellow-400" size={24} />
              Profession Guidance
            </div>
          </SectionTitle>
          <div className="space-y-4">
            {/* Suggested */}
            <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
              <h3 className="text-lg font-semibold text-green-300 mb-2">Recommended Careers</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {professionInfo.suggested.map((prof, idx) => (
                  <li key={idx}>{prof}</li>
                ))}
              </ul>
            </div>

            {/* Ideal Corporate */}
            {professionInfo.idealCorporate && (
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/50">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Ideal Corporate Roles</h3>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {professionInfo.idealCorporate.map((role, idx) => (
                    <li key={idx}>{role}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Avoid */}
            <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/50">
              <h3 className="text-lg font-semibold text-red-300 mb-2">Careers to Avoid</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                {professionInfo.avoid.map((prof, idx) => (
                  <li key={idx}>{prof}</li>
                ))}
              </ul>
            </div>

            {/* Support Needed */}
            {professionInfo.supportNeeded && (
              <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-700/50">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-orange-300 mb-2">Support Needed</h3>
                    <p className="text-gray-200">{professionInfo.supportNeeded}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Personality Traits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Good Qualities */}
        <Card>
          <SectionTitle>Good Qualities</SectionTitle>
          <div className="bg-green-900/20 p-4 rounded-lg border border-green-700/50">
            <p className="text-gray-200 leading-relaxed">{traits['Good Quality']}</p>
          </div>
        </Card>

        {/* Drawbacks */}
        <Card>
          <SectionTitle>Areas for Improvement</SectionTitle>
          <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-700/50">
            <p className="text-gray-200 leading-relaxed">{traits.Drawback}</p>
          </div>
        </Card>
      </div>

      {/* Relationship Traits */}
      <Card>
        <SectionTitle>Relationship Dynamics</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* As Wife */}
          {traits['As Wife'] && (
            <div className="bg-pink-900/20 p-4 rounded-lg border border-pink-700/50">
              <h3 className="text-lg font-semibold text-pink-300 mb-2">As a Partner (Female)</h3>
              <p className="text-gray-200 leading-relaxed">{traits['As Wife']}</p>
            </div>
          )}

          {/* As Husband */}
          {traits['As Husband'] && (
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-700/50">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">As a Partner (Male)</h3>
              <p className="text-gray-200 leading-relaxed">{traits['As Husband']}</p>
            </div>
          )}
        </div>
      </Card>

      {/* Spiritual Insights */}
      {traits['Spiritual Insights'] && (
        <Card>
          <SectionTitle>Spiritual Insights</SectionTitle>
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-5 rounded-lg border border-purple-700/50">
            <p className="text-gray-100 text-lg leading-relaxed italic">
              "{traits['Spiritual Insights']}"
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default NumerologyTraitsTab;
