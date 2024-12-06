import React, { useState } from "react";

interface ProvisioningData {
  id: number;
  name: string;
  quickScan: boolean;
  fullScan: boolean;
  overview: boolean;
}

const DownloadScriptsPage: React.FC = () => {
  const [provisioningData] = useState<ProvisioningData[]>([
    { id: 1, name: "Client A", quickScan: true, fullScan: false, overview: true },
    { id: 2, name: "Client B", quickScan: false, fullScan: true, overview: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Download Scripts
      </h2>

      {/* Top Buttons */}
      <div className="flex justify-end space-x-4 mb-4">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
          View Provisioning Tool
        </button>
        <button
          onClick={openModal}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
        >
          <span className="mr-2">Export</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-cyber-dark rounded-lg shadow-lg p-6">
        <div className="bg-gray-50 dark:bg-cyber-darker rounded-lg shadow-lg overflow-x-auto border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-blue-50 dark:bg-cyber-dark">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Quick Scan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Full Scan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 dark:text-blue-300 uppercase tracking-wider">
                  Overview
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-cyber-darker divide-y divide-gray-200 dark:divide-gray-700">
              {provisioningData.map((data) => (
                <tr key={data.id} className="hover:bg-gray-100 dark:hover:bg-cyber-dark">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {data.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {data.quickScan ? "Enabled" : "Disabled"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {data.fullScan ? "Enabled" : "Disabled"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">
                    {data.overview ? "Enabled" : "Disabled"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-[40rem]">
            {/* Header */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Download Client Provisioning Tool (CPT) Installer
            </h3>
            <hr className="border-gray-300 dark:border-gray-600 mb-4" />

            {/* Package Selection */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Choose one of the packages below:
            </p>
            <div className="flex justify-between mb-6">
              <button className="flex-1 mx-2 py-3 bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-100 text-center rounded-md hover:bg-gray-400 dark:hover:bg-gray-600">
                Windows
              </button>
              <button className="flex-1 mx-2 py-3 bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-100 text-center rounded-md hover:bg-gray-400 dark:hover:bg-gray-600">
                Linux
              </button>
              <button className="flex-1 mx-2 py-3 bg-gray-300 text-gray-900 dark:bg-gray-700 dark:text-gray-100 text-center rounded-md hover:bg-gray-400 dark:hover:bg-gray-600">
                Mac
              </button>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 mb-4" />

            <div className="mb-4">
              <p className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:text-blue-800 dark:hover:text-blue-200">
                EDR Server: Windows Client Installer
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                EDR Key:
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                NOTE: Run the above installer as administrator to install Seceon EDR. Installer will ask for the EDR Key provided above.
              </p>
              <hr className="border-gray-200 dark:border-gray-700 my-4" />
              <p className="text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:text-blue-800 dark:hover:text-blue-200">
                EDR Server Windows Powershell Client Installer
              </p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mt-4">
                Command:
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                NOTE: Use the above command from PowerShell as Administrator for client enrollment. Please run the command from the download directory of the PowerShell script.
              </p>
            </div>

            {/* Close Button */}
            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadScriptsPage;
