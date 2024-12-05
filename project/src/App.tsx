import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Download, Server, Lock } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import TopNavbar from './components/TopNavbar';
import Sidebar from './components/Sidebar';
import DashboardCard from './components/DashboardCard';
import AuditProgress from './components/AuditProgress';
import RecentFindings from './components/RecentFindings';
import SecurityTrends from './components/SecurityTrends';
import ComplianceScore from './components/ComplianceScore';
import LoginPage from './components/LoginPage'; // Import the LoginPage
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import SettingsPage from './components/SettingsPage'; // Import the SettingsPage

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Track sidebar state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Simulated audit data
  const [auditData] = useState({
    cards: [
      { title: 'Total Checks', value: 234, icon: Shield, trend: 5 },
      { title: 'Critical Findings', value: 12, icon: AlertTriangle, trend: -2 },
      { title: 'Passed Checks', value: 189, icon: CheckCircle, trend: 8 },
      { title: 'Compliance Score', value: '81%', icon: Lock, trend: 3 },
    ],
    progress: [
      { category: 'Account Policies', passed: 45, failed: 5, pending: 2 },
      { category: 'System Services', passed: 38, failed: 8, pending: 4 },
      { category: 'Network Security', passed: 52, failed: 3, pending: 1 },
      { category: 'File Systems', passed: 41, failed: 7, pending: 3 },
    ],
    findings: [
      {
        id: '1',
        timestamp: new Date(),
        severity: 'high',
        description: 'Password complexity requirements not enforced',
        status: 'open',
      },
      {
        id: '2',
        timestamp: new Date(Date.now() - 3600000),
        severity: 'medium',
        description: 'Remote desktop services exposed',
        status: 'open',
      },
      {
        id: '3',
        timestamp: new Date(Date.now() - 7200000),
        severity: 'low',
        description: 'Guest account disabled',
        status: 'resolved',
      },
    ],
  });

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle report download
  const handleDownloadReport = () => {
    console.log('Downloading report...');
  };

  return (
    <ThemeProvider>
      {isLoggedIn ? (
        <Router>
          <div className="min-h-screen bg-gray-100 dark:bg-cyber-darker transition-colors duration-200">
            <TopNavbar />
            <div className="flex">
              {/* Sidebar with fixed positioning */}
              <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
              {/* Main content area */}
              <div
                className={`transition-all duration-300 flex-1 ${
                  isSidebarCollapsed ? 'ml-16' : 'ml-64'
                }`}
                style={{ overflowY: 'auto', height: 'calc(100vh - 64px)' }} // Make the content scrollable
              >
                <div className="container mx-auto px-8 py-8">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <div className="flex justify-between items-center mb-8">
                            <div>
                              <h1 className="text-3xl font-bold text-gray-800 dark:text-cyber-primary">
                                Security Audit Dashboard
                              </h1>
                              <p className="text-gray-600 dark:text-gray-400 mt-2">
                                CIS Benchmark Compliance Status
                              </p>
                            </div>
                            <button
                              onClick={handleDownloadReport}
                              className="flex items-center px-4 py-2 bg-blue-500/20 text-blue-500 rounded-lg hover:bg-blue-500/30 hover:text-black dark:bg-cyber-primary/20 dark:text-cyber-primary dark:hover:bg-cyber-primary/30 dark:hover:text-white transition-colors border border-blue-500/50 dark:border-cyber-primary/50 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-cyber-primary/80"
                            >
                              <Download className="w-5 h-5 mr-2" />
                              Download Report
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {auditData.cards.map((card, index) => (
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
                        </>
                      }
                    />
                    <Route path="/settings" element={<SettingsPage />} /> {/* Add settings page route */}
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </Router>
      ) : (
        <LoginPage onLogin={handleLogin} /> // Show login page if not logged in
      )}
    </ThemeProvider>
  );
}

export default App;
