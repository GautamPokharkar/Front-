import React from 'react';
import { 
  LayoutDashboard, 
  Shield, 
  Settings, 
  AlertCircle, 
  FileText, 
  History,
  Terminal
} from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string; // Add path to menu items for routing
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Shield, label: 'Security Checks', path: '/security-checks' },
  { icon: AlertCircle, label: 'Vulnerabilities', path: '/vulnerabilities' },
  { icon: Terminal, label: 'Audit Scripts', path: '/audit-scripts' },
  { icon: History, label: 'Audit History', path: '/audit-history' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' }, // Route for Settings Page
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div 
      className={`fixed left-0 top-16 z-30 h-full transition-all duration-300 
        ${isCollapsed ? 'w-16' : 'w-64'} overflow-hidden bg-cyber-dark border-r border-cyber-primary/20 
        shadow-lg shadow-cyber-primary/10 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-cyber-primary/50`}
      onMouseEnter={() => setIsCollapsed(false)} // Expand on hover
      onMouseLeave={() => setIsCollapsed(true)}  // Collapse when not hovered
    >
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path} // Use `to` for navigation
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all 
                duration-200 group hover:bg-cyber-primary/10 
                ${isActive ? 'bg-cyber-primary/20 text-cyber-primary' : 'text-gray-400 hover:text-cyber-primary'}`}
            >
              {/* Render the icon */}
              <item.icon
                className={`w-5 h-5 mr-3 transition-colors text-gray-500 group-hover:text-cyber-primary`} 
              />
              {/* Only display label when sidebar is expanded */}
              <span
                className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}
              >
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
