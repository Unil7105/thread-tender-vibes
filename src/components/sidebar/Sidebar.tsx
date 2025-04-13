
import React from 'react';
import SidebarMobileToggle from './SidebarMobileToggle';
import SidebarContent from './SidebarContent';
import SidebarOverlay from './SidebarOverlay';
import { useSidebarState } from './hooks/useSidebarState';

interface SidebarProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  isMobileMenuOpen: propsMobileMenuOpen, 
  setIsMobileMenuOpen: propsSetMobileMenuOpen 
} = {}) => {
  const { 
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isCollapsed,
    toggleSidebar
  } = useSidebarState(propsMobileMenuOpen, propsSetMobileMenuOpen);

  return (
    <>
      {/* Mobile sidebar toggle */}
      <SidebarMobileToggle 
        isMobileMenuOpen={isMobileMenuOpen} 
        isCollapsed={isCollapsed}
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        toggleSidebar={toggleSidebar}
      />

      {/* Desktop sidebar */}
      <aside 
        id="sidebar"
        className={`
          fixed top-0 left-0 h-full z-40
          bg-sidebar/95 dark:bg-sidebar backdrop-blur-sm 
          border-r border-border/50 dark:border-border/30
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-[72px]' : 'w-[240px]'}
          hidden md:block
        `}
        style={{
          width: isCollapsed ? '72px' : '240px',
        }}
      >
        <SidebarContent 
          isMobileMenuOpen={false}
          isCollapsed={isCollapsed}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          toggleSidebar={toggleSidebar}
        />
      </aside>

      {/* Add spacing div to push content */}
      <div 
        className={`
          hidden md:block shrink-0 transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-[72px]' : 'w-[240px]'}
        `}
      />

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <SidebarOverlay 
          onClick={() => setIsMobileMenuOpen(false)} 
          className="backdrop-blur-sm md:hidden"
        />
      )}
    </>
  );
};

export { Sidebar };
