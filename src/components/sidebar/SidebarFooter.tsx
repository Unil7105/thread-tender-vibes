
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
    <div className="mt-auto space-y-2 flex flex-col items-center">
      <button 
        onClick={toggleTheme}
        className={`
          group flex items-center 
          ${isCollapsed ? 'w-12 justify-center' : 'w-full px-3'} 
          h-12 rounded-lg hover:bg-[#9b87f5]/10 transition-all
        `}
      >
        <Moon className="w-5 h-5 text-[#9b87f5]" />
      </button>
      
      <button 
        className={`
          group flex items-center 
          ${isCollapsed ? 'w-12 justify-center' : 'w-full px-3'} 
          h-12 rounded-lg hover:bg-[#9b87f5]/10 transition-all
        `}
      >
        <LogOut className="w-5 h-5 text-[#9b87f5]" />
      </button>
    </div>
  );
};

export default SidebarFooter;
