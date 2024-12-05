import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SecurityTrends: React.FC = () => {
  const data = [
    { date: '2024-01', vulnerabilities: 45, patches: 38 },
    { date: '2024-02', vulnerabilities: 52, patches: 45 },
    { date: '2024-03', vulnerabilities: 48, patches: 51 },
    { date: '2024-04', vulnerabilities: 35, patches: 42 },
    { date: '2024-05', vulnerabilities: 30, patches: 39 },
    { date: '2024-06', vulnerabilities: 25, patches: 35 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Security Trends</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="date" 
              stroke="#6b7280"
              tick={{ fill: '#6b7280' }}
            />
            <YAxis 
              stroke="#6b7280"
              tick={{ fill: '#6b7280' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="vulnerabilities" 
              stroke="#ef4444" 
              strokeWidth={2}
              dot={{ fill: '#ef4444', strokeWidth: 2 }}
              name="Vulnerabilities" 
            />
            <Line 
              type="monotone" 
              dataKey="patches" 
              stroke="#10b981" 
              strokeWidth={2}
              dot={{ fill: '#10b981', strokeWidth: 2 }}
              name="Patches Applied" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SecurityTrends;