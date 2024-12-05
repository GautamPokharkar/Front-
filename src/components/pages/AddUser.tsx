import { useState } from 'react';

// Define the type for userData
interface UserData {
  name: string;
  email: string;
  role: 'user' | 'admin';
}

const AddUserForm: React.FC = () => {
  // Type the userData state with the UserData interface
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    role: 'user',
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
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker border focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
            <select
              value={userData.role}
              onChange={(e) => setUserData({ ...userData, role: e.target.value as 'user' | 'admin' })}
              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 dark:bg-cyber-darker border text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            >
              <option value="user" className="text-gray-900 dark:text-white">User</option>
              <option value="admin" className="text-gray-900 dark:text-white">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
