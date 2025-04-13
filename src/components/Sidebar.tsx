
import React from 'react';
import SidebarMobileToggleButton from './sidebar/SidebarMobileToggleButton';
import SidebarCollapseToggle from './sidebar/SidebarCollapseToggle';
import SidebarNavigation from './sidebar/SidebarNavigation';
import SidebarUserProfile from './sidebar/SidebarUserProfile';
import SidebarFooterButtons from './sidebar/SidebarFooterButtons';
import SidebarLogo from './sidebar/SidebarLogo';
import { useSidebarState } from './sidebar/useSidebarState';

const Sidebar = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isCollapsed,
    toggleSidebar,
    handleMobileMenuToggle,
    handleMobileMenuItemClick
  } = useSidebarState();

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <SidebarMobileToggleButton handleMobileMenuToggle={handleMobileMenuToggle} />

      {/* Desktop Sidebar Collapse Toggle Button */}
      <SidebarCollapseToggle isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />

      {/* Mobile Sidebar Background Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        id="sidebar"
        className={`fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-background border-r border-border transition-all duration-200 ease-in-out
                 ${isMobileMenuOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'} 
                 md:translate-x-0 ${isCollapsed ? 'md:w-16' : 'md:w-64'} overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex flex-col h-full py-6 px-3">
          {/* Logo Section */}
          <SidebarLogo isCollapsed={isCollapsed} />

          {/* Navigation Items */}
          <SidebarNavigation 
            isCollapsed={isCollapsed} 
            handleMobileMenuItemClick={handleMobileMenuItemClick} 
          />

          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t border-border space-y-2 px-2">
            {/* User Profile Section */}
            <SidebarUserProfile isCollapsed={isCollapsed} />
          
            {/* Footer Buttons */}
            <SidebarFooterButtons isCollapsed={isCollapsed} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
