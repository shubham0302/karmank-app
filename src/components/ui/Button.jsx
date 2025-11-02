import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = ''
}) => {
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
