import { useState } from 'react';

// Define the type for each user in the mockUsers array
interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  role: 'user' | 'admin'; // New role property
  lastLogin: string; // New last login property (date and time as a string)
  mfaStatus: boolean; // New MFA status property
}

const UserControl: React.FC = () => {
  // Type the mockUsers array using the User interface
  const [mockUsers, setMockUsers] = useState<User[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      role: 'admin',
      lastLogin: '2024-12-05 10:30:00',
      mfaStatus: true, // MFA enabled for John
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'inactive',
      role: 'user',
      lastLogin: '2024-12-04 15:45:00',
      mfaStatus: false, // MFA disabled for Jane
    },
  ]);

  // State for the search query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Function to handle search input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filtered users based on the search query
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery)
  );

  // Function to toggle user status
  const toggleUserStatus = (userId: number): void => {
    setMockUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    );
    console.log('Toggling user status:', userId);
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">User Control</h2>

      {/* Search input above the card */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1 w-48 bg-white dark:bg-cyber-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
        />
      </div>

      <div className="bg-white dark:bg-cyber-dark rounded-lg shadow-lg p-6">
        <div className="bg-gray-50 dark:bg-cyber-darker rounded-lg shadow-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-blue-50 dark:bg-cyber-dark">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  MFA Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Last Login
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-cyber-darker divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-cyber-dark">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100'
                          : 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.mfaStatus
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                      }`}
                    >
                      {user.mfaStatus ? 'Enabled' : 'Disabled'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleUserStatus(user.id)}
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserControl;
