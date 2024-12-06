import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Moon, Sun, Lock, User } from 'lucide-react';
import clsx from 'clsx';

interface LoginPageProps {
  onLogin: (role: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'user'>('user');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validCredentials =
      (selectedRole === 'admin' && username === 'admin' && password === 'admin') ||
      (selectedRole === 'user' && username === 'user' && password === 'user');

    if (validCredentials) {
      onLogin(selectedRole);
      navigate('/'); // Navigate to the root ("/") where the appropriate dashboard is rendered
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-navy-800/50 text-white hover:bg-navy-700 transition-colors backdrop-blur-sm"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      <div className="w-full max-w-md p-8 bg-white/10 dark:bg-navy-900/50 rounded-lg shadow-xl backdrop-blur-md">
        <div className="flex justify-center mb-8">
          <Shield className="w-16 h-16 text-blue-400" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-2 text-white">
          CyberGuard
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Advanced Security Management
        </p>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 text-red-200 rounded backdrop-blur-sm">
            {error}
          </div>
        )}

        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setSelectedRole('user')}
            className={clsx(
              'flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all',
              selectedRole === 'user'
                ? 'border-blue-500 bg-blue-500/20 text-white'
                : 'border-gray-400/30 text-gray-400 hover:border-gray-400',
            )}
          >
            <User className="w-5 h-5" />
            User
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole('admin')}
            className={clsx(
              'flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all',
              selectedRole === 'admin'
                ? 'border-purple-500 bg-purple-500/20 text-white'
                : 'border-gray-400/30 text-gray-400 hover:border-gray-400',
            )}
          >
            <Lock className="w-5 h-5" />
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={selectedRole === 'admin' ? 'admin' : 'user'}
              className="mt-1 block w-full px-3 py-2 bg-white/10 border border-gray-300/30 text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={selectedRole === 'admin' ? 'admin' : 'user'}
              className="mt-1 block w-full px-3 py-2 bg-white/10 border border-gray-300/30 text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-4 text-center">
          <span className="text-gray-300">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
