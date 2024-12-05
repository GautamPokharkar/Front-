import { useState } from 'react';

// Define the type for the notification state
interface Notification {
  title: string;
  email: string; // Added email field
  message: string;
  type: 'info' | 'warning' | 'error';
}

const NotifyUser: React.FC = () => {
  // Type the state as Notification to ensure the structure
  const [notification, setNotification] = useState<Notification>({
    title: '',
    email: '',
    message: '',
    type: 'info',
  });

  // Type the event parameter as React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle notification sending logic
    console.log('Sending notification:', notification);
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Notify User</h2>
      <div className="bg-white dark:bg-cyber-dark rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
            <input
              type="text"
              value={notification.title}
              onChange={(e) => setNotification({ ...notification, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label> {/* New email input */}
            <input
              type="email"
              value={notification.email}
              onChange={(e) => setNotification({ ...notification, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              value={notification.message}
              onChange={(e) => setNotification({ ...notification, message: e.target.value })}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Type</label>
            <select
              value={notification.type}
              onChange={(e) => setNotification({ ...notification, type: e.target.value as 'info' | 'warning' | 'error' })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker border text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            >
              <option value="info" className="text-gray-900 dark:text-white">Info</option>
              <option value="warning" className="text-gray-900 dark:text-yellow-300">Warning</option>
              <option value="error" className="text-gray-900 dark:text-red-300">Error</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default NotifyUser;
