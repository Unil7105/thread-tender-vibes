
import React from 'react';
import { LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

interface SidebarFooterProps {
  isCollapsed: boolean;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed }) => {
  const handleThemeToggle = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <div className="mt-auto pt-4 border-t border-sidebar-border">
      <div className="flex flex-col items-center space-y-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <button
            onClick={handleThemeToggle}
            className="group flex items-center w-full px-3 py-2.5 rounded-lg text-sidebar-foreground hover:text-white transition-colors relative"
          >
            <span className="absolute inset-0 bg-sidebar-accent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
            
            <span className="relative flex items-center">
              <span className="flex items-center justify-center w-5 h-5">
                <ThemeToggle />
              </span>
              {!isCollapsed && (
                <span className="ml-3 transition-all duration-300 whitespace-nowrap">
                  Toggle theme
                </span>
              )}
            </span>
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <button
            className="group flex items-center w-full px-3 py-2.5 rounded-lg text-sidebar-foreground hover:text-destructive transition-colors relative"
          >
            <span className="absolute inset-0 bg-sidebar-accent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
            
            <span className="relative flex items-center">
              <LogOut className="w-5 h-5 text-sidebar-foreground group-hover:text-destructive" />
              {!isCollapsed && (
                <span className="ml-3 transition-all duration-300 whitespace-nowrap">
                  Logout
                </span>
              )}
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SidebarFooter;
