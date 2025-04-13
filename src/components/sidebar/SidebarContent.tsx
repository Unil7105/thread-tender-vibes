
import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarNavigation from './SidebarNavigation';
import SidebarProfile from './SidebarProfile';
import SidebarFooter from './SidebarFooter';

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
    <aside 
      id="sidebar"
      className={`fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-[#111827] border-r border-gray-800 transition-all duration-300 ease-in-out
               ${isMobileMenuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'} 
               md:translate-x-0 ${isCollapsed ? 'md:w-16' : 'md:w-64'} overflow-y-auto overflow-x-hidden`}
    >
      <div className="flex flex-col h-full py-6 justify-between">
        <SidebarNavigation 
          isCollapsed={isCollapsed} 
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          toggleSidebar={toggleSidebar}
        />
        
        <div className="mt-auto">
          <SidebarProfile isCollapsed={isCollapsed} />
        </div>
      </div>
    </aside>
  );
};

export default SidebarContent;
