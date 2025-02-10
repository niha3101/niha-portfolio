import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseStyles = 'bg-white rounded-xl shadow-md p-6';
  const hoverStyles = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;