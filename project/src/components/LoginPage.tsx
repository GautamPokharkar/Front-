import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Shield } from 'lucide-react';

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'user' && password === 'user') {
      onLogin();
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700 transition-colors backdrop-blur-sm"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="w-full max-w-md p-8 bg-white/10 dark:bg-gray-900/50 rounded-lg shadow-xl backdrop-blur-md">
        <div className="flex justify-center mb-8">
          <Shield className="w-16 h-16 text-blue-400" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-2 text-white">Login</h2>
        <p className="text-center text-gray-300 mb-6">Cybersecurity Compliance Portal</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white/10 border border-gray-300/30 text-white rounded-md shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white/10 border border-gray-300/30 text-white rounded-md shadow-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-gray-300">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
