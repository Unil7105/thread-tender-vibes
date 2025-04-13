
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
    <div className="flex flex-col h-full py-6 relative">
      {/* Logo Section with consistent spacing */}
      <div className="mb-4">
        <SidebarLogo isCollapsed={isCollapsed} />
      </div>
      
      {/* Profile Section with Separator */}
      <div className="mb-4">
        <SidebarProfile isCollapsed={isCollapsed} />
      </div>
      
      {/* Consistent separator with proper spacing */}
      <Separator 
        className={`
          my-4 bg-[#e0d8ff] dark:bg-[#3a3351] opacity-70 
          ${isCollapsed ? 'w-8 mx-auto' : 'w-full'}
        `} 
      />
      
      {/* Navigation Section */}
      <div className="mt-2 flex-grow overflow-y-auto scrollbar-hide">
        <SidebarNavigation 
          isCollapsed={isCollapsed} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
      </div>
      
      {/* Footer with Separator */}
      <div className="mt-auto">
        <Separator 
          className={`
            mb-4 bg-[#e0d8ff] dark:bg-[#3a3351] opacity-70 
            ${isCollapsed ? 'w-8 mx-auto' : 'w-full'}
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
