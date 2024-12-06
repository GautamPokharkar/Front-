import { useState } from 'react';

// Define the type for userData
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  status: boolean;
  mfaStatus: boolean;
}

const AddUserForm: React.FC = () => {
  // Type the userData state with the UserData interface
  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user',
    status: true,
    mfaStatus: false,
  });

  // Type the event parameter as React.FormEvent<HTMLFormElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle user creation logic here
    console.log('Creating user:', userData);
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Add User</h2>
      <div className="bg-white dark:bg-cyber-dark rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
            <input
              type="text"
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
            <select
              value={userData.role}
              onChange={(e) => setUserData({ ...userData, role: e.target.value as 'user' | 'admin' })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker dark:text-white border text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            >
              <option value="user" className="text-gray-900 dark:text-white">User</option>
              <option value="admin" className="text-gray-900 dark:text-white">Admin</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Status</label>
              <input
                type="checkbox"
                checked={userData.status}
                onChange={() => setUserData({ ...userData, status: !userData.status })}
                className="mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">MFA Status</label>
              <input
                type="checkbox"
                checked={userData.mfaStatus}
                onChange={() => setUserData({ ...userData, mfaStatus: !userData.mfaStatus })}
                className="mt-1"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              onClick={() => {
                setUserData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  role: 'user',
                  status: true,
                  mfaStatus: false,
                });
              }}
            >
              Cancel
            </button>
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

export default AddUserForm;
