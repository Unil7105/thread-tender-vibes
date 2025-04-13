
import React from 'react';
import { Moon, LogOut, ChevronLeft } from 'lucide-react';

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
    <div className="space-y-3">
      {/* Collapse button */}
      <button 
        onClick={toggleSidebar}
        className={`
          w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} 
          h-10 rounded-lg hover:bg-[#9b87f5]/10 transition-all duration-200
        `}
        aria-label="Toggle sidebar"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#9b87f5]/20">
          <ChevronLeft 
            className={`w-4 h-4 text-[#9b87f5] transition-transform duration-300 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>
        {!isCollapsed && <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">Collapse Sidebar</span>}
      </button>
      
      {/* Utility buttons */}
      <div className={`flex ${isCollapsed ? 'flex-col' : 'flex-row'} gap-2 ${isCollapsed ? 'items-center' : 'px-2'}`}>
        <button 
          onClick={toggleTheme}
          className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#9b87f5]/10 transition-all duration-200"
          aria-label="Toggle dark mode"
        >
          <Moon className="w-4 h-4 text-[#9b87f5]" />
        </button>
        
        <button 
          className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#9b87f5]/10 transition-all duration-200"
          aria-label="Logout"
        >
          <LogOut className="w-4 h-4 text-[#9b87f5]" />
        </button>
      </div>
    </div>
  );
};

export default SidebarFooter;
