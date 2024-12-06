import React from 'react';
/* import { LucideIcon } from 'lucide-react'; */

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* Main Content */}
      <main className="p-6">
        {/* Dashboard Header */}
        <header className="mb-6">
          <h2 className="text-xl font-bold">Welcome, Admin</h2>
          <p className="text-gray-600 dark:text-gray-400">Here are your system stats at a glance.</p>
        </header>

        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Users Card */}
          <div className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 
            backdrop-blur-xl transition-all duration-300 group
            border-cyan-500 hover:border-cyan-600 dark:border-transparent
            shadow-lg shadow-cyan-300/50 dark:shadow-cyber-primary/50
            hover:shadow-2xl hover:shadow-cyan-500/80 dark:hover:shadow-cyber-primary/80`}>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Users</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,204</h3>
              </div>
            </div>
          </div>

          {/* Active Sessions Card */}
          <div className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 
            backdrop-blur-xl transition-all duration-300 group
            border-cyan-500 hover:border-cyan-600 dark:border-transparent
            shadow-lg shadow-cyan-300/50 dark:shadow-cyber-primary/50
            hover:shadow-2xl hover:shadow-cyan-500/80 dark:hover:shadow-cyber-primary/80`}>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Active Sessions</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">512</h3>
              </div>
            </div>
          </div>

          {/* New Signups Card */}
          <div className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 
            backdrop-blur-xl transition-all duration-300 group
            border-cyan-500 hover:border-cyan-600 dark:border-transparent
            shadow-lg shadow-cyan-300/50 dark:shadow-cyber-primary/50
            hover:shadow-2xl hover:shadow-cyan-500/80 dark:hover:shadow-cyber-primary/800`}>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">New Signups</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">34</h3>
              </div>
            </div>
          </div>

          {/* System Uptime Card */}
          <div className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 
            backdrop-blur-xl transition-all duration-300 group
            border-cyan-500 hover:border-cyan-600 dark:border-transparent
            shadow-lg shadow-cyan-300/50 dark:shadow-cyber-primary/50
            hover:shadow-2xl hover:shadow-cyan-500/80 dark:hover:shadow-cyber-primary/80`}>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">System Uptime</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">99.99%</h3>
              </div>
            </div>
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
  );
};

export default AdminDashboard;
