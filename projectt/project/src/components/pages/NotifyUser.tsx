import { useState } from 'react';

// Define the type for the notification state
interface Notification {
  title: string;
  email: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  host: string;
  port: string; // Port field
  tls: boolean; // TLS checkbox
  ssl: boolean; // SSL checkbox
  emailPassword: string;
  fromName: string;
  fromEmail: string;
  replyTo: string;
}

const NotifyUser: React.FC = () => {
  const [notification, setNotification] = useState<Notification>({
    title: '',
    email: '',
    message: '',
    type: 'info',
    host: '',
    port: '', // Initialized port as empty string
    tls: false, // TLS checkbox state
    ssl: false, // SSL checkbox state
    emailPassword: '',
    fromName: '',
    fromEmail: '',
    replyTo: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Sending notification:', notification);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Notify User</h2>
      <div className="bg-white dark:bg-cyber-dark rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          {/* Left Section (Host and Port) */}
          <div className="w-1/2 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              These settings are used to send notifications by the system
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Host</label>
              <input
                type="text"
                value={notification.host}
                onChange={(e) => setNotification({ ...notification, host: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Port</label>
              <input
                type="text" // Changed to type text (removes the number input's arrows)
                value={notification.port}
                onChange={(e) => setNotification({ ...notification, port: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tls"
                  checked={notification.tls}
                  onChange={() => setNotification({ ...notification, tls: !notification.tls })}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="tls" className="ml-2 text-sm text-gray-700 dark:text-gray-300">TLS</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ssl"
                  checked={notification.ssl}
                  onChange={() => setNotification({ ...notification, ssl: !notification.ssl })}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="ssl" className="ml-2 text-sm text-gray-700 dark:text-gray-300">SSL</label>
              </div>
            </div>
          </div>

          {/* Right Section (Email Info) */}
          <div className="w-1/2 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Enter your email account info
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                value={notification.email}
                onChange={(e) => setNotification({ ...notification, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                value={notification.emailPassword}
                onChange={(e) => setNotification({ ...notification, emailPassword: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">From Name</label>
              <input
                type="text"
                value={notification.fromName}
                onChange={(e) => setNotification({ ...notification, fromName: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">From Email</label>
              <input
                type="email"
                value={notification.fromEmail}
                onChange={(e) => setNotification({ ...notification, fromEmail: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Reply To</label>
              <input
                type="email"
                value={notification.replyTo}
                onChange={(e) => setNotification({ ...notification, replyTo: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotifyUser;
