import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  color: string;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, color, label }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percentage}%` }}
        >
          <div className="w-full h-full animate-pulse opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;