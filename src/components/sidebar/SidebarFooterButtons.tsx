
import React from 'react';
import { LogOut } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';

interface SidebarFooterButtonsProps {
  isCollapsed: boolean;
}

const SidebarFooterButtons: React.FC<SidebarFooterButtonsProps> = ({
  isCollapsed
}) => {
  return (
    <>
      {/* Theme Toggle */}
      <button 
        onClick={() => {
          const isDark = document.documentElement.classList.contains('dark');
          document.documentElement.classList.toggle('dark', !isDark);
          localStorage.setItem('theme', !isDark ? 'dark' : 'light');
        }}
        className={`flex ${isCollapsed ? 'justify-center' : 'justify-start'} items-center w-full py-2 px-3 rounded-md text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200`}
        aria-label="Toggle dark mode"
      >
        <div className="w-5 h-5 flex items-center justify-center shrink-0">
          <ThemeToggle />
        </div>
        
        {!isCollapsed && (
          <span className="ml-3 truncate transition-opacity duration-200">
            Toggle theme
          </span>
        )}
      </button>
      
      {/* Logout Button */}
      <button
        className={`flex ${isCollapsed ? 'justify-center' : 'justify-start'} items-center w-full py-2 px-3 rounded-md text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200`}
        aria-label="Logout"
      >
        <LogOut className="w-5 h-5 shrink-0" />
        {!isCollapsed && (
          <span className="ml-3 truncate transition-opacity duration-200">
            Logout
          </span>
        )}
      </button>
    </>
  );
};

export default SidebarFooterButtons;
