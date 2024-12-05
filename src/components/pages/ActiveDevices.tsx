import React from 'react';

// Define the type for a device object
interface Device {
  id: number;
  device: string;
  lastActive: string;
  location: string;
}

const ActiveDevices: React.FC = () => {
  // Mock devices data with proper type annotation
  const mockDevices: Device[] = [
    { id: 1, device: 'Chrome / Windows', lastActive: '2024-03-15 14:30', location: 'New York, US' },
    { id: 2, device: 'Safari / MacOS', lastActive: '2024-03-15 14:25', location: 'London, UK' },
  ];

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Active Devices</h2>
      <div className="bg-white dark:bg-cyber-dark rounded-lg shadow-lg p-6">
        {mockDevices.map((device) => (
          <div key={device.id} className="bg-gray-100 dark:bg-cyber-darker rounded-lg shadow p-4 mb-4 border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{device.device}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Last active: {device.lastActive}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">Location: {device.location}</p>
              </div>
              <button
                className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium"
                onClick={() => console.log('Revoke access:', device.id)}
              >
                Revoke Access
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveDevices;
