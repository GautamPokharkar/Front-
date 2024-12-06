import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  FileText,
  User,
  Download,
  Settings,
  ChevronDown,
  LogOut,
} from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string;
  roles: string[]; // Define access based on roles
  subMenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/', roles: ['admin', 'user'] },
  { icon: FileText, label: 'Reports', path: '/reports', roles: ['user'] },
  { icon: Download, label: 'Script Download', path: '/script-download', roles: ['admin'] },
  { icon: User, label: 'Profile', path: '/profile', roles: ['admin', 'user'] },
  {
    icon: Settings,
    label: 'Settings',
    path: '/settings',
    roles: ['admin'],
    subMenu: [
      { icon: LayoutDashboard, label: 'Add User', path: '/add-user', roles: ['admin'] },
      { icon: LayoutDashboard, label: 'User Control', path: '/user-control', roles: ['admin'] },
      { icon: LayoutDashboard, label: 'Active Devices', path: '/active-devices', roles: ['admin'] },
      { icon: LayoutDashboard, label: 'Notify User', path: '/notify-user', roles: ['admin'] },
    ],
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  role: 'admin' | 'user'; // Role of the logged-in user
  onSignOut: () => void; // Sign-out handler
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed, role, onSignOut }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSettingsDropdown = (isOpen: boolean) => {
    setOpenSettings(isOpen);
  };

  useEffect(() => {
    if (isCollapsed) {
      setOpenSettings(false);
    }
  }, [isCollapsed]);

  const isSubItemActive = (subItemPath: string) => location.pathname === subItemPath;

  const isItemActive = (itemPath: string, subMenu?: MenuItem[]) => {
    if (location.pathname === itemPath) {
      return true;
    }
    if (subMenu) {
      return subMenu.some((subItem) => isSubItemActive(subItem.path));
    }
    return false;
  };

  const filteredMenuItems = menuItems
    .filter((item) => item.roles.includes(role)) // Filter items by role
    .sort((a, b) => {
      // Sort Profile below Settings for admin users
      if (role === 'admin' && a.label === 'Profile') return 1;
      if (role === 'admin' && b.label === 'Profile') return -1;
      return 0;
    });

  return (
    <div
      className={`fixed left-0 top-16 z-30 h-full transition-all duration-300 
        ${isCollapsed ? 'w-16' : 'w-64'} overflow-hidden bg-cyber-dark border-r border-cyber-primary/20 
        shadow-lg shadow-cyber-primary/10 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-cyber-primary/50`}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <div className="p-4">
        <nav className="space-y-1">
          {filteredMenuItems.map((item) => (
            <div key={item.label}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all 
                  duration-200 group hover:bg-cyber-primary/10 
                  ${isActive || isItemActive(item.path, item.subMenu) ? 'bg-cyber-primary/20 text-cyber-primary' : 'text-gray-400 hover:text-cyber-primary'}`
                }
                onMouseEnter={() => item.subMenu && toggleSettingsDropdown(true)}
                onMouseLeave={() => item.subMenu && toggleSettingsDropdown(false)}
              >
                <div className="flex items-center justify-center w-8">
                  <item.icon
                    className={`w-5 h-5 transition-colors text-gray-500 group-hover:text-cyber-primary`}
                  />
                </div>
                <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                  {item.label}
                </span>
                {item.subMenu && (
                  <ChevronDown className={`w-4 h-4 ml-auto transform ${openSettings ? 'rotate-180' : ''}`} />
                )}
              </NavLink>

              {item.subMenu && openSettings && !isCollapsed && (
                <div
                  className="pl-12 space-y-1 transition-all duration-300 ease-in-out"
                  onMouseEnter={() => toggleSettingsDropdown(true)}
                  onMouseLeave={() => toggleSettingsDropdown(false)}
                >
                  {item.subMenu
                    .filter((subItem) => subItem.roles.includes(role)) // Filter subMenu by role
                    .map((subItem) => (
                      <NavLink
                        key={subItem.label}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all 
                          duration-200 group hover:bg-cyber-primary/10 
                          ${isActive ? 'bg-cyber-primary/20 text-cyber-primary' : 'text-gray-400 hover:text-cyber-primary'}`
                        }
                      >
                        <subItem.icon
                          className={`w-4 h-4 mr-3 transition-colors text-gray-500 group-hover:text-cyber-primary`}
                        />
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
        <div className="mt-4">
          <button
            onClick={onSignOut}
            className="flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group hover:bg-red-500/10 text-gray-400 hover:text-red-500"
          >
            <div className="flex items-center justify-center w-8">
              <LogOut className="w-5 h-5 transition-colors text-gray-500 group-hover:text-red-500" />
            </div>
            <span className={`ml-3 transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
