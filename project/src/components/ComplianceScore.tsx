import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import ProgressBar from './ProgressBar';

const ComplianceScore: React.FC = () => {
  const data = [
    { name: 'Compliant', value: 75 },
    { name: 'Non-Compliant', value: 25 },
  ];

  const COLORS = ['#10b981', '#ef4444'];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Overall Compliance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index % COLORS.length]}
                    className="transition-all duration-300 hover:opacity-80"
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-4">
          <div>
            <ProgressBar
              value={75}
              max={100}
              color="bg-emerald-500"
              label="Overall Progress"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Critical Controls</span>
              <span>85%</span>
            </div>
            <ProgressBar value={85} max={100} color="bg-rose-500" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>System Hardening</span>
              <span>70%</span>
            </div>
            <ProgressBar value={70} max={100} color="bg-amber-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceScore;