import React from 'react';

const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`text-2xl font-serif text-yellow-400 mb-4 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
