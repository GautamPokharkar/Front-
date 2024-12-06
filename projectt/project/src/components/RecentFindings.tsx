import React from 'react';
import { format } from 'date-fns';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface Finding {
  id: string;
  timestamp: Date;
  severity: 'high' | 'medium' | 'low';
  description: string;
  status: 'open' | 'resolved';
}

interface RecentFindingsProps {
  findings: Finding[];
}

const RecentFindings: React.FC<RecentFindingsProps> = ({ findings }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Recent Findings</h2>
      <div className="space-y-4">
        {findings.map((finding) => (
          <div key={finding.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            {finding.status === 'open' ? (
              <AlertTriangle className={`${getSeverityColor(finding.severity)} w-6 h-6`} />
            ) : (
              <CheckCircle className="text-green-500 w-6 h-6" />
            )}
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className={`font-medium ${getSeverityColor(finding.severity)}`}>
                  {finding.severity.toUpperCase()} Severity
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {format(finding.timestamp, 'MMM d, yyyy HH:mm')}
                </span>
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{finding.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentFindings;