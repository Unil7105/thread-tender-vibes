
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, MessageSquare, User } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    <nav className="space-y-1 px-1">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        
        return (
          <motion.div 
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative"
          >
            {isActive && (
              <motion.div
                layoutId="activeIndicator"
                className={`absolute left-0 top-0 bottom-0 w-1 bg-[#9b87f5] rounded-r-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.path}
                    className={`
                      group relative flex items-center 
                      ${isCollapsed ? 'justify-center w-9 h-9 mx-auto' : 'w-full px-3 h-9'} 
                      rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-[#9b87f5]/10 text-[#9b87f5]' 
                        : 'hover:bg-[#9b87f5]/5 text-gray-700 dark:text-gray-400 focus-visible:ring-2 focus-visible:ring-[#9b87f5] focus-visible:outline-none opacity-75 hover:opacity-100'}
                    `}
                    onClick={handleMobileMenuItemClick}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <item.icon className={`
                      w-5 h-5 
                      ${isActive ? 'text-[#9b87f5]' : 'text-gray-700 dark:text-gray-400 group-hover:text-[#9b87f5]/80'}
                      transition-colors duration-200
                    `} />
                    
                    {!isCollapsed && (
                      <span className={`
                        ml-3 text-sm font-medium truncate 
                        ${isActive ? 'text-[#9b87f5]' : 'text-gray-700 dark:text-gray-400 group-hover:text-[#9b87f5]/80'}
                        transition-colors duration-200
                      `}>
                        {item.label}
                      </span>
                    )}
                  </Link>
                </TooltipTrigger>
                {isCollapsed && (
                  <TooltipContent side="right" className="px-3 py-1.5">
                    {item.label}
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default SidebarNavigation;
