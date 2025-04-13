
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, MessageSquare, Book, Settings, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarNavigationProps {
  isCollapsed: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  toggleSidebar: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  isCollapsed,
  setIsMobileMenuOpen,
  toggleSidebar
}) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Expand button - only visible in small mode */}
      {isCollapsed && (
        <button 
          onClick={toggleSidebar}
          className="w-8 h-8 rounded-md flex items-center justify-center mb-6 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      <nav>
        <ul className="flex flex-col items-center space-y-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="w-full">
                <Link
                  to={item.path}
                  className="flex items-center justify-center w-full"
                  onClick={handleMobileMenuItemClick}
                  title={item.label}
                >
                  <div 
                    className={`relative rounded-md p-2 transition-all duration-200
                      ${isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'}
                      ${isCollapsed ? 'w-10 h-10' : 'w-full px-3 py-2'}
                      flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                    
                    {!isCollapsed && (
                      <span className="ml-3 whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarNavigation;
