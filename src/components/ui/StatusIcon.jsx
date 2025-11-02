import React from 'react';

const StatusIcon = ({ status }) => {
  const statusConfig = {
    'Green': { emoji: '🟢', title: 'Favorable' },
    'Yellow': { emoji: '🟡', title: 'Neutral' },
    'Red': { emoji: '🔴', title: 'Challenging' }
  };

  const config = statusConfig[status] || statusConfig['Yellow'];

  return (
    <span
      className="inline-flex items-center justify-center transition-transform hover:scale-110"
      title={config.title}
      role="img"
      aria-label={config.title}
    >
      {config.emoji}
    </span>
  );
};

export default StatusIcon;
