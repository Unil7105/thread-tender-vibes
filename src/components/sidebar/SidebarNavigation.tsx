
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
    { path: '/', icon: Home, label: 'Home', initials: null },
    { path: '/explore', icon: Compass, label: 'Explore', initials: null },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads', initials: null },
    { path: '/profile', icon: User, label: 'Profile', initials: null },
  ];

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="space-y-2 px-1">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        
        return (
          <motion.div 
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className={`
                group flex items-center 
                ${isCollapsed ? 'justify-center w-10 h-10 mx-auto' : 'w-full px-3 h-10'} 
                rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-[#9b87f5] text-white shadow-sm' 
                  : 'hover:bg-[#9b87f5]/10 text-gray-700 dark:text-gray-300'}
              `}
              onClick={handleMobileMenuItemClick}
            >
              <item.icon className={`
                w-5 h-5 
                ${isActive ? 'text-white' : 'text-[#9b87f5]'}
              `} />
              
              {!isCollapsed && (
                <span className={`
                  ml-3 text-sm font-medium truncate 
                  ${isActive ? 'text-white' : 'text-gray-700 dark:text-gray-300'}
                `}>
                  {item.label}
                </span>
              )}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default SidebarNavigation;
