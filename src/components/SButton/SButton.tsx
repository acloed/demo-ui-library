import React from 'react';

interface SButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const SButton: React.FC<SButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white rounded-lg shadow-md focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default SButton;
