
import React from 'react';
import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';
import SidebarFooter from './SidebarFooter';
import SidebarProfile from './SidebarProfile';
import { Separator } from '@/components/ui/separator';

interface SidebarContentProps {
  isMobileMenuOpen: boolean;
  isCollapsed: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  toggleSidebar: () => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  isMobileMenuOpen,
  isCollapsed,
  setIsMobileMenuOpen,
  toggleSidebar
}) => {
  return (
    <div className="flex flex-col h-full py-4 relative">
      {/* Logo Section with consistent spacing */}
      <div className="mb-2">
        <SidebarLogo isCollapsed={isCollapsed} />
      </div>
      
      {/* Profile Section with consistent spacing */}
      <div className="mb-2">
        <SidebarProfile isCollapsed={isCollapsed} />
      </div>
      
      {/* Improved separator with proper spacing and style */}
      <Separator 
        className={`
          my-3 bg-gradient-to-r from-forum-lavender/20 via-forum-lavender/40 to-forum-lavender/20 dark:from-forum-lavender/10 dark:via-forum-lavender/30 dark:to-forum-lavender/10
          ${isCollapsed ? 'w-8 mx-auto' : 'mx-4 w-[calc(100%-2rem)]'}
        `} 
      />
      
      {/* Navigation Section */}
      <div className="mt-2 flex-grow overflow-y-auto scrollbar-hide">
        <SidebarNavigation 
          isCollapsed={isCollapsed} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
      </div>
      
      {/* Footer with Gradient Separator */}
      <div className="mt-auto">
        <Separator 
          className={`
            mb-3 bg-gradient-to-r from-forum-lavender/20 via-forum-lavender/40 to-forum-lavender/20 dark:from-forum-lavender/10 dark:via-forum-lavender/30 dark:to-forum-lavender/10
            ${isCollapsed ? 'w-8 mx-auto' : 'mx-4 w-[calc(100%-2rem)]'}
          `} 
        />
        <SidebarFooter 
          isCollapsed={isCollapsed} 
          toggleSidebar={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default SidebarContent;
