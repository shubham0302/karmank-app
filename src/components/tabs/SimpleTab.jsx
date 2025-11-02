import React from 'react';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';

/**
 * SimpleTab - Generic tab component for displaying various content
 * This is a flexible component that can be used for Name Analysis, Asset, Education, Remedies, etc.
 */
const SimpleTab = ({ title, description, icon: Icon, children, content }) => {
  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <Card>
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            {Icon && <Icon className="text-yellow-400" size={36} />}
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
              {title}
            </h1>
          </div>
          {description && (
            <p className="text-gray-300">
              {description}
            </p>
          )}
        </div>
      </Card>

      {/* Content */}
      {children || (
        <Card>
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/50 text-center">
            <p className="text-gray-300 text-lg">
              {content || 'This feature is coming soon. Stay tuned for detailed insights!'}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SimpleTab;
