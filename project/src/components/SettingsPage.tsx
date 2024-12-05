import React from 'react';

const SettingsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-cyber-primary">
        Settings
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-4">
        Configure your preferences and account details here.
      </p>
      {/* Add your settings form or controls here */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Example Setting
        </label>
        <input
          type="text"
          placeholder="Enter value"
          className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default SettingsPage;
