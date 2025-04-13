
import React from 'react';
import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';
import SidebarFooter from './SidebarFooter';
import SidebarProfile from './SidebarProfile';

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
    <div className="flex flex-col h-full py-4 px-3 relative">
      <SidebarLogo isCollapsed={isCollapsed} />
      <SidebarProfile isCollapsed={isCollapsed} />
      <div className="mt-6 flex-grow overflow-y-auto scrollbar-hide">
        <SidebarNavigation 
          isCollapsed={isCollapsed} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
      </div>
      <SidebarFooter 
        isCollapsed={isCollapsed} 
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default SidebarContent;
