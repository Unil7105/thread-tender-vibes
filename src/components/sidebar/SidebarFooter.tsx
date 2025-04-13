
import React from 'react';
import { Moon, LogOut } from 'lucide-react';

interface SidebarFooterProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed, toggleSidebar }) => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <div className="mt-auto pt-4 border-t border-[#e0d8ff] dark:border-[#3a3351] space-y-2">
      {/* Collapse button integrated above utility icons */}
      <button 
        onClick={toggleSidebar}
        className="w-full flex items-center justify-center h-10 rounded-lg hover:bg-[#9b87f5]/10 transition-all duration-200"
        aria-label="Toggle sidebar"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#9b87f5]/20">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`text-[#9b87f5] transition-transform duration-300 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        {!isCollapsed && <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Collapse Sidebar</span>}
      </button>
      
      {/* Utility buttons */}
      <div className="flex flex-row gap-2 px-2 justify-center">
        <button 
          onClick={toggleTheme}
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#9b87f5]/10 transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          <Moon className="w-5 h-5 text-[#9b87f5]" />
        </button>
        
        <button 
          className="group flex items-center justify-center w-10 h-10 rounded-full bg-transparent hover:bg-[#9b87f5]/10 transition-all duration-200"
          aria-label="Logout"
        >
          <LogOut className="w-5 h-5 text-[#9b87f5]" />
        </button>
      </div>
    </div>
  );
};

export default SidebarFooter;
