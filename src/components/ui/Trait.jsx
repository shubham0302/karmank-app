import React from 'react';

const Trait = ({ icon: Icon, label, value, color = 'text-yellow-400' }) => {
  return (
    <div className="flex items-center gap-3 bg-gray-800/50 border border-gray-700 rounded-lg p-4 transition-transform hover:scale-105">
      <div className={`${color} flex-shrink-0`}>
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-white font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default Trait;
