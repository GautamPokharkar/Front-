import React from 'react';
import DashboardCard from './DashboardCard';
import AuditProgress from './AuditProgress';
import RecentFindings from './RecentFindings';
import SecurityTrends from './SecurityTrends';
import ComplianceScore from './ComplianceScore';
import { Download, Sidebar } from 'lucide-react';
import TopNavbar from './TopNavbar';

const UserDashboard = ({ auditData, onDownloadReport }: { auditData: any, onDownloadReport: () => void }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-cyber-darker transition-colors duration-200">
      <TopNavbar />
      <div className="flex">
        <Sidebar isCollapsed={false} setIsCollapsed={() => {}} />
        <div className="transition-all duration-300 flex-1 ml-64">
          <div className="container mx-auto px-8 py-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-cyber-primary">
                  User Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">User Security Overview</p>
              </div>
              <button
                onClick={onDownloadReport}
                className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-500 rounded-lg hover:bg-blue-500/30"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Report
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {auditData.cards.map((card: any, index: number) => (
                <DashboardCard key={index} {...card} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <SecurityTrends />
              <ComplianceScore />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <AuditProgress data={auditData.progress} />
              <RecentFindings findings={auditData.findings} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
