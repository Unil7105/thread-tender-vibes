
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
    <aside 
      id="sidebar"
      className={`fixed top-0 left-0 h-full z-40 bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out
               ${isMobileMenuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full md:translate-x-0'} 
               ${isCollapsed ? 'md:w-16' : 'md:w-64'} overflow-y-auto overflow-x-hidden`}
    >
      <div className="flex flex-col h-full p-4">
        <SidebarLogo isCollapsed={isCollapsed} />
        <SidebarNavigation 
          isCollapsed={isCollapsed} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
        <div className="flex-1"></div>
        <SidebarProfile isCollapsed={isCollapsed} />
        <SidebarFooter isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
};

export default SidebarContent;
