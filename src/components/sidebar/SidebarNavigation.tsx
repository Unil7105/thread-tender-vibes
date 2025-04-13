
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, MessageSquare, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarNavigationProps {
  isCollapsed: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  isCollapsed,
  setIsMobileMenuOpen
}) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex-1 mt-4">
      <ul className="space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.li 
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={item.path}
                className={`group flex items-center px-3 py-2.5 rounded-lg transition-colors relative
                  ${isActive 
                    ? 'text-white' 
                    : 'text-gray-700 hover:text-white'}`}
                onClick={handleMobileMenuItemClick}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#9b87f5] rounded-lg" />
                )}
                
                {!isActive && (
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#9b87f5]/80 rounded-lg transition-opacity" />
                )}
                
                <span className="relative flex items-center">
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}`} />
                  {!isCollapsed && (
                    <span className={`ml-3 transition-all duration-300 whitespace-nowrap ${isCollapsed ? 'w-0 opacity-0' : 'opacity-100'}`}>
                      {item.label}
                    </span>
                  )}
                </span>
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
