import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  color?: string;
}

const getCardStyly = (index: number) => {
  const styles = [
    'from-emerald-500/20 to-teal-500/20 border-emerald-500 hover:from-emerald-500/30 hover:to-teal-500/30',
    'from-rose-500/20 to-pink-500/20 border-rose-500 hover:from-rose-500/30 hover:to-pink-500/30',
    'from-violet-500/20 to-purple-500/20 border-violet-500 hover:from-violet-500/30 hover:to-purple-500/30',
    'from-amber-500/20 to-orange-500/20 border-amber-500 hover:from-amber-500/30 hover:to-orange-500/30',
  ];
  return styles[index % styles.length];
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-6 
        backdrop-blur-xl transition-all duration-300 group
        border-cyan-500 hover:border-cyan-600 dark:border-transparent
        shadow-lg shadow-cyan-300/50 dark:shadow-cyber-primary/50
        hover:shadow-2xl hover:shadow-cyan-500/80 dark:hover:shadow-cyber-primary/80`} // Increased intensity in non-hover mode
    >
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
          {trend !== undefined && (
            <p className={`text-sm ${trend >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
              {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        <div className="rounded-full bg-white/10 p-3 shadow-lg dark:bg-gray-800 
          group-hover:bg-emerald-500/10 dark:group-hover:bg-cyber-primary/20 transition-all duration-300">
          <Icon className="h-6 w-6 text-emerald-500 dark:text-cyber-primary 
            group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
