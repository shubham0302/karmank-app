import React, { useState } from 'react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { Calendar, TrendingUp, Home, Heart, Baby, Plane } from 'lucide-react';
import TravelForecastTab from '../forecast/TravelForecastTab';
import PropertyForecastTab from '../forecast/PropertyForecastTab';
import MarriageForecastTab from '../forecast/MarriageForecastTab';
import ChildBirthForecastTab from '../forecast/ChildBirthForecastTab';
import useAppStore from '../../store/useAppStore';

/**
 * ForecastTab - Comprehensive forecast with sub-tabs for different life areas
 */
const ForecastTab = ({ report, dashaReport }) => {
  const [activeSubTab, setActiveSubTab] = useState('profession');
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { userData } = useAppStore();

  if (!report || !dashaReport) {
    return (
      <Card className="text-center">
        <p className="text-gray-400">Forecast data is being generated...</p>
      </Card>
    );
  }

  const subTabs = [
    { id: 'profession', label: 'Profession', icon: TrendingUp },
    { id: 'travel', label: 'Travel', icon: Plane },
    { id: 'property', label: 'Property', icon: Home },
    { id: 'marriage', label: 'Marriage', icon: Heart },
    { id: 'childbirth', label: 'Child Birth', icon: Baby }
  ];

  // Generate year options (5 years back and 10 years forward)
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let i = currentYear - 5; i <= currentYear + 10; i++) {
    yearOptions.push(i);
  }

  // Get target date for selected year (January 1st of that year)
  const targetDate = new Date(selectedYear, 0, 1);

  // Render active sub-tab content
  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case 'travel':
        return <TravelForecastTab report={report} dashaReport={dashaReport} targetDate={targetDate} />;

      case 'property':
        return <PropertyForecastTab report={report} dashaReport={dashaReport} targetDate={targetDate} />;

      case 'marriage':
        return <MarriageForecastTab report={report} dashaReport={dashaReport} targetDate={targetDate} />;

      case 'childbirth':
        return <ChildBirthForecastTab report={report} dashaReport={dashaReport} targetDate={targetDate} gender={userData.gender} />;

      case 'profession':
      default:
        return <ProfessionForecastContent report={report} dashaReport={dashaReport} targetDate={targetDate} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Year Selector */}
      <Card>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <SectionTitle>Life Forecast</SectionTitle>
            <p className="text-gray-400 text-sm">Select a year to view forecasts across different areas</p>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-yellow-400" size={20} />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="input-field w-32"
            >
              {yearOptions.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Sub-tabs Navigation */}
      <div className="bg-gray-800/50 rounded-lg p-2">
        <div className="flex flex-wrap gap-2">
          {subTabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200
                  ${activeSubTab === tab.id
                    ? 'bg-yellow-500 text-gray-900 font-semibold'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }
                `}
              >
                <Icon size={18} />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Sub-tab Content */}
      <div className="animate-fadeIn">
        {renderSubTabContent()}
      </div>
    </div>
  );
};

/**
 * Profession Forecast Content (Original implementation)
 */
const ProfessionForecastContent = ({ report, dashaReport, targetDate }) => {
  // Get dasha for selected date
  const yearDasha = dashaReport.yearlyDashaTimeline.find(d =>
    targetDate >= d.startDate && targetDate <= d.endDate
  );
  const mahaDasha = dashaReport.mahaDashaTimeline.find(d =>
    targetDate >= d.startDate && targetDate <= d.endDate
  );

  if (!yearDasha || !mahaDasha) {
    return (
      <Card>
        <p className="text-gray-400">Forecast not available for this date.</p>
      </Card>
    );
  }

  const dashaNumber = yearDasha.dashaNumber;
  const mahaDashaNumber = mahaDasha.dashaNumber;
  const digitCounts = report.baseKundliGrid;
  const destinyNumber = report.destinyNumber;

  // Calculate forecast based on dasha number
  let status = 'Yellow';
  let title = `Professional Forecast for ${targetDate.getFullYear()}`;
  let description = '';
  let recommendations = [];

  // Dasha analysis logic
  switch (dashaNumber) {
    case 1:
      const isPositive1 = (digitCounts[1] <= 1 || destinyNumber === 1);
      if (isPositive1) {
        status = 'Green';
        description = 'Excellent year for leadership roles, promotions, and new business ventures. You will receive recognition and opportunities to take charge.';
        recommendations = [
          'Take on leadership positions',
          'Start new projects or businesses',
          'Network with influential people',
          'Assert your ideas confidently'
        ];
      } else {
        status = 'Red';
        description = 'This period brings ego clashes and authority conflicts. Avoid being overly aggressive or impulsive in professional decisions.';
        recommendations = [
          'Practice patience and diplomacy',
          'Avoid major career changes',
          'Work on team collaboration',
          'Seek mentorship rather than competing'
        ];
      }
      break;

    case 2:
      status = 'Red';
      description = 'A challenging year with emotional instability and mood fluctuations. Career decisions may be clouded by emotions.';
      recommendations = [
        'Postpone major career decisions',
        'Focus on emotional wellness',
        'Avoid impulsive job changes',
        'Seek counseling if needed'
      ];
      break;

    case 3:
      if (digitCounts[3] <= 1) {
        status = 'Green';
        description = 'Highly favorable for professional expansion, respect, and financial growth. Excellent for consultation-based careers and teaching.';
        recommendations = [
          'Pursue teaching or coaching roles',
          'Expand your business network',
          'Share your expertise publicly',
          'Invest in education and certifications'
        ];
      } else if (digitCounts[3] === 2) {
        status = 'Yellow';
        description = 'Career growth continues but may face family-work balance challenges.';
        recommendations = [
          'Set clear boundaries between work and home',
          'Communicate openly with family',
          'Prioritize important tasks'
        ];
      } else {
        status = 'Red';
        description = 'Scattered focus and broken promises may affect reputation. Avoid overcommitting.';
        recommendations = [
          'Focus on completing existing commitments',
          'Avoid taking on new responsibilities',
          'Practice time management'
        ];
      }
      break;

    case 4:
      if (destinyNumber === 4) {
        status = 'Yellow';
        description = 'A year of hard work with opportunities for long-term stability. Document everything carefully.';
        recommendations = [
          'Review all contracts thoroughly',
          'Keep detailed records',
          'Build sustainable systems'
        ];
      } else {
        status = 'Red';
        description = 'High risk of professional losses and deception. Exercise extreme caution in financial dealings.';
        recommendations = [
          'Avoid risky investments',
          'Get everything in writing',
          'Verify offers thoroughly',
          'Consult legal experts before signing'
        ];
      }
      break;

    case 5:
      if (digitCounts[5] === 0 || digitCounts[5] === 1 || destinyNumber === 5) {
        status = 'Green';
        description = 'Breakthrough opportunities, unexpected offers, and favorable job switches. Great for business expansion in digital fields.';
        recommendations = [
          'Be open to new opportunities',
          'Network actively',
          'Consider job offers carefully',
          'Invest in digital marketing skills'
        ];
      } else {
        status = 'Red';
        description = 'Mental fatigue and poor decision-making due to scattered goals. Focus is needed.';
        recommendations = [
          'Avoid multitasking excessively',
          'Prioritize key projects',
          'Rest and recover regularly',
          'Seek clarity before decisions'
        ];
      }
      break;

    case 6:
      if (digitCounts[6] === 0 || destinyNumber === 6) {
        status = 'Green';
        description = 'Excellent for financial growth, brand building, and luxury careers. High-value collaborations likely.';
        recommendations = [
          'Invest in personal branding',
          'Network with high-value clients',
          'Focus on quality over quantity',
          'Build long-term relationships'
        ];
      } else {
        status = 'Red';
        description = 'Risk of financial overindulgence and vanity affecting professional judgment.';
        recommendations = [
          'Avoid unnecessary expenses',
          'Focus on substance over appearance',
          'Set realistic financial goals'
        ];
      }
      break;

    case 7:
      if (digitCounts[7] >= 3 && destinyNumber !== 7) {
        status = 'Red';
        description = 'May face job loss, confusion, or detachment from career. A test of patience.';
        recommendations = [
          'Avoid major career changes',
          'Seek spiritual guidance',
          'Focus on skill development',
          'Network for future opportunities'
        ];
      } else {
        status = 'Green';
        description = 'Job attainment through divine timing. Excellent for healing, technology, research, or teaching roles.';
        recommendations = [
          'Trust the process',
          'Apply for desired positions',
          'Network strategically',
          'Pursue research opportunities'
        ];
      }
      break;

    case 8:
      let effective8Count = digitCounts[8] || 0;
      if (mahaDashaNumber === 8) effective8Count++;
      if (dashaNumber === 8) effective8Count++;

      if (effective8Count > 0 && effective8Count % 2 === 0) {
        status = 'Green';
        description = 'Bonuses, promotions, job security, and financial gains. Ideal for government, banking, law, and real estate.';
        recommendations = [
          'Seek promotions or raises',
          'Invest in real estate',
          'Take calculated financial risks',
          'Build authority in your field'
        ];
      } else {
        status = 'Red';
        description = 'Financial instability, career delays, and blocked promotions. Patience is essential.';
        recommendations = [
          'Avoid major investments',
          'Focus on skill building',
          'Maintain financial discipline',
          'Wait for better timing'
        ];
      }
      break;

    case 9:
      if (destinyNumber === 9) {
        status = 'Green';
        description = 'Power, elevated social standing, and financial growth through leadership. Excellent for military, politics, or management.';
        recommendations = [
          'Take on leadership roles',
          'Pursue positions of authority',
          'Build your public image',
          'Invest in property'
        ];
      } else if (digitCounts[9] === 1) {
        status = 'Yellow';
        description = 'Neutral period with no strong financial boost.';
        recommendations = [
          'Maintain steady progress',
          'Focus on current responsibilities',
          'Avoid aggressive expansion'
        ];
      } else {
        status = 'Red';
        description = 'External troubles, issues with superiors, and office politics. Protect your reputation.';
        recommendations = [
          'Avoid conflicts with authority',
          'Maintain professional boundaries',
          'Document your work',
          'Stay away from office politics'
        ];
      }
      break;

    default:
      description = 'No specific professional forecast for this period.';
  }

  return (
    <div className="space-y-6">
      <Card>
        <SectionTitle>Professional Forecast</SectionTitle>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className={`text-4xl ${
              status === 'Green' ? '🟢' :
              status === 'Yellow' ? '🟡' : '🔴'
            }`} />
            <div>
              <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
              <p className="text-sm text-gray-400">
                Yearly Dasha: {dashaNumber} | Maha Dasha: {mahaDashaNumber}
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-900/50 rounded-lg">
            <p className="text-gray-300">{description}</p>
          </div>

          {recommendations.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-lg text-yellow-300 mb-3">Recommendations</h4>
              <ul className="space-y-2">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ForecastTab;
