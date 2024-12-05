import React, { useState, useEffect } from 'react';
import { Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const TopNavbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications] = useState([
    { id: 1, text: 'New security update available' },
    { id: 2, text: 'Critical vulnerability detected' },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const notificationElement = document.getElementById('notification-popup');
      if (notificationElement && !notificationElement.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications]);

  return (
    <nav className={`${theme === 'light' ? 'bg-gray-800' : 'bg-gray-800'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className={`text-xl font-bold ${theme === 'light' ? 'text-white' : 'text-gray-800'} dark:text-cyber-primary`}>
              CIS Audit
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Bell className="w-5 h-5 text-white" />
              </button>

              {showNotifications && (
                <div
                  id="notification-popup"
                  className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
                >
                  {notifications.map(notification => (
                    <div
                      key={notification.id}
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    >
                      <p className="text-sm text-gray-700 dark:text-gray-300">{notification.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
