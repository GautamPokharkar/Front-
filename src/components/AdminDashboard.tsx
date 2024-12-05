import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* Top Navbar */}
      <nav className="bg-blue-500 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg">Logout</button>
      </nav>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-md min-h-full">
          <ul className="space-y-4 p-4">
            <li>
              <a href="#dashboard" className="block px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#users" className="block px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700">
                User Management
              </a>
            </li>
            <li>
              <a href="#settings" className="block px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700">
                Settings
              </a>
            </li>
            <li>
              <a href="#logs" className="block px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700">
                Activity Logs
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Dashboard Header */}
          <header className="mb-6">
            <h2 className="text-xl font-bold">Welcome, Admin</h2>
            <p className="text-gray-600 dark:text-gray-400">Here are your system stats at a glance.</p>
          </header>

          {/* Statistics Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-4xl font-bold mt-2">1,204</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Active Sessions</h3>
              <p className="text-4xl font-bold mt-2">512</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">New Signups</h3>
              <p className="text-4xl font-bold mt-2">34</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">System Uptime</h3>
              <p className="text-4xl font-bold mt-2">99.99%</p>
            </div>
          </section>

          {/* User Management Section */}
          <section id="users" className="mt-8">
            <h3 className="text-xl font-semibold mb-4">User Management</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <p>
                View, edit, or remove users from the system. Navigate to the User Management page for detailed actions.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Go to User Management
              </button>
            </div>
          </section>

          {/* Settings Section */}
          <section id="settings" className="mt-8">
            <h3 className="text-xl font-semibold mb-4">System Settings</h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <p>
                Configure system settings, manage permissions, and update configurations to ensure optimal performance.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Go to Settings
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
