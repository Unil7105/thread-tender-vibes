
import React from 'react';
import { Moon, LogOut } from 'lucide-react';

interface SidebarFooterProps {
  isCollapsed: boolean;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed }) => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <div className="mt-auto space-y-2 w-full flex flex-col items-center">
      <button 
        onClick={toggleTheme}
        className={`
          flex items-center justify-center
          ${isCollapsed ? 'w-12 h-12 mx-auto' : 'w-full px-3 h-12'} 
          rounded-full bg-transparent hover:bg-[#9b87f5]/10 
          transition-all duration-200
        `}
        aria-label="Toggle dark mode"
      >
        <Moon className="w-5 h-5 text-[#9b87f5]" />
        {!isCollapsed && (
          <span className="ml-3 text-sm text-gray-700">Toggle theme</span>
        )}
      </button>
      
      <button 
        className={`
          flex items-center justify-center
          ${isCollapsed ? 'w-12 h-12 mx-auto' : 'w-full px-3 h-12'} 
          rounded-full bg-transparent hover:bg-[#9b87f5]/10 
          transition-all duration-200
        `}
        aria-label="Log out"
      >
        <LogOut className="w-5 h-5 text-[#9b87f5]" />
        {!isCollapsed && (
          <span className="ml-3 text-sm text-gray-700">Log out</span>
        )}
      </button>
    </div>
  );
};

export default SidebarFooter;
