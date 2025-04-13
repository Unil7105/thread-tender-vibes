
import React from 'react';
import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';
import SidebarFooter from './SidebarFooter';
import SidebarProfile from './SidebarProfile';

interface SidebarContentProps {
  isMobileMenuOpen: boolean;
  isCollapsed: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  isMobileMenuOpen,
  isCollapsed,
  setIsMobileMenuOpen
}) => {
  return (
    <div className="flex flex-col h-full py-6 px-3 relative">
      {/* Removed close button for mobile view */}
      
      <SidebarLogo isCollapsed={isCollapsed} />
      <SidebarProfile isCollapsed={isCollapsed} />
      <SidebarNavigation 
        isCollapsed={isCollapsed} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <SidebarFooter isCollapsed={isCollapsed} />
    </div>
  );
};

export default SidebarContent;
