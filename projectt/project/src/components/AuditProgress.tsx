import React from 'react';
import ProgressBar from './ProgressBar';

interface AuditProgressProps {
  data: {
    category: string;
    passed: number;
    failed: number;
    pending: number;
  }[];
}

const AuditProgress: React.FC<AuditProgressProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Audit Progress by Category</h2>
      <div className="space-y-6">
        {data.map((item, index) => {
          const total = item.passed + item.failed + item.pending;
          return (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.category}</h3>
              <div className="space-y-2">
                <ProgressBar
                  value={item.passed}
                  max={total}
                  color="bg-emerald-500"
                  label="Passed"
                />
                <ProgressBar
                  value={item.failed}
                  max={total}
                  color="bg-rose-500"
                  label="Failed"
                />
                <ProgressBar
                  value={item.pending}
                  max={total}
                  color="bg-amber-500"
                  label="Pending"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AuditProgress;