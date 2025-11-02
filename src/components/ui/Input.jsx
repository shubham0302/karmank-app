import React from 'react';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  label,
  className = '',
  required = false
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`input-field ${className}`}
      />
    </div>
  );
};

export default Input;
