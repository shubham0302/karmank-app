import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
