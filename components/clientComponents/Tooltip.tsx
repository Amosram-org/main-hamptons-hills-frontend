// components/Tooltip.tsx
'use client'; // Required for Next.js 15 if using app router

import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Positioning classes based on the position prop
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 translate-y-2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 -translate-x-2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 translate-x-2 ml-2',
  };

  return (
    <div className="relative inline-block">
      {/* Wrapper for the children (icon) */}
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      {/* Tooltip */}
      {isVisible && (
        <div
          className={`absolute z-50 px-3 py-2 text-sm text-white bg-black/10 backdrop-blur-lg rounded-lg shadow-lg whitespace-nowrap ${positionClasses[position]}`}
          role="tooltip"
        >
          {text}
          {/* Tooltip arrow (optional) */}
          {/* <div
            className={`absolute w-2 h-2 bg-gray-800 transform rotate-45 ${position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' : ''}${position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' : ''}${position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' : ''}${position === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''}`}
          /> */}
        </div>
      )}
    </div>
  );
};

export default Tooltip;