import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Shield, 
  Settings, 
  AlertCircle, 
  FileText, 
  History,
  Terminal,
  ChevronDown,
  LogOut, // Import the logout icon
} from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation for current path

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string; // Add path to menu items for routing
  subMenu?: MenuItem[]; // Optional submenu for items like "Settings"
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Shield, label: 'Security Checks', path: '/security-checks' },
  { icon: AlertCircle, label: 'Vulnerabilities', path: '/vulnerabilities' },
  { icon: Terminal, label: 'Audit Scripts', path: '/audit-scripts' },
  { icon: History, label: 'Audit History', path: '/audit-history' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { 
    icon: Settings, 
    label: 'Settings', 
    path: '/settings', 
    subMenu: [
      { icon: FileText, label: 'Add User', path: '/add-user' },  
      { icon: FileText, label: 'User Control', path: '/user-control' },
      { icon: FileText, label: 'Active Devices', path: '/active-devices' },  
      { icon: FileText, label: 'Notify User', path: '/notify-user' },  
    ] 
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate hook
  const location = useLocation(); // Get the current path

  const toggleSettingsDropdown = (isOpen: boolean) => {
    setOpenSettings(isOpen);
  };

  // Reset the dropdown state when the sidebar collapses
  useEffect(() => {
    if (isCollapsed) {
      setOpenSettings(false);
    }
  }, [isCollapsed]);

  // Function to handle sign out and redirect to login page
  const handleSignOut = () => {
    // Clear user data (e.g., authentication token, session data)
    localStorage.removeItem('authToken'); // Remove authentication token from local storage
    sessionStorage.clear(); // Clear all items in session storage if used
  
    // Navigate to the login page
    navigate('/login');
  };
  

  // Helper function to check if current path matches a subItem's path
  const isSubItemActive = (subItemPath: string) => location.pathname === subItemPath;

  // Helper function to check if the current path matches the parent item or any sub-item
  const isItemActive = (itemPath: string, subMenu?: MenuItem[]) => {
    if (location.pathname === itemPath) {
      return true;
    }
    if (subMenu) {
      return subMenu.some(subItem => isSubItemActive(subItem.path));
    }
    return false;
  };

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
            <div key={item.label}>
              <NavLink
                to={item.path} // Use `to` for navigation
                className={({ isActive }) =>
                  `flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all 
                  duration-200 group hover:bg-cyber-primary/10 
                  ${isActive || isItemActive(item.path, item.subMenu) ? 'bg-cyber-primary/20 text-cyber-primary' : 'text-gray-400 hover:text-cyber-primary'}` }
                onMouseEnter={() => item.subMenu && toggleSettingsDropdown(true)} // Show dropdown on hover
                onMouseLeave={() => item.subMenu && toggleSettingsDropdown(false)} // Hide dropdown on hover out
              >
                {/* Icon container */}
                <div className="flex items-center justify-center w-8">
                  <item.icon
                    className={`w-5 h-5 transition-colors text-gray-500 group-hover:text-cyber-primary`} 
                  />
                </div>
                {/* Label with transition for visibility */}
                <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} >
                  {item.label}
                </span>
                {item.subMenu && (
                  <ChevronDown className={`w-4 h-4 ml-auto transform ${openSettings ? 'rotate-180' : ''}`} />
                )}
              </NavLink>

              {/* Render the dropdown menu if Settings is hovered */}
              {item.subMenu && openSettings && !isCollapsed && (
                <div
                  className="pl-12 space-y-1 transition-all duration-300 ease-in-out"
                  onMouseEnter={() => toggleSettingsDropdown(true)} // Keep dropdown open when hovering over sub-menu
                  onMouseLeave={() => toggleSettingsDropdown(false)} // Hide dropdown when hovering out of sub-menu
                >
                  {item.subMenu.map((subItem) => (
                    <NavLink
                      key={subItem.label}
                      to={subItem.path}
                      className={({ isActive }) =>
                        `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all 
                        duration-200 group hover:bg-cyber-primary/10 
                        ${isActive ? 'bg-cyber-primary/20 text-cyber-primary' : 'text-gray-400 hover:text-cyber-primary'}` }
                    >
                      {/* Render the icon for sub menu */}
                      <subItem.icon
                        className={`w-4 h-4 mr-3 transition-colors text-gray-500 group-hover:text-cyber-primary`} 
                      />
                      {/* Label for sub-menu */}
                      <span
                        className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}
                      >
                        {subItem.label}
                      </span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Sign out button */}
        <div className="mt-4">
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group hover:bg-red-500/10 text-gray-400 hover:text-red-500"
          >
            {/* Icon container */}
            <div className="flex items-center justify-center w-8">
              <LogOut className="w-5 h-5 transition-colors text-gray-500 group-hover:text-red-500" />
            </div>
            <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`} >
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
