
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
      {/* Mobile sidebar with SheetContent component */}
      <SidebarMobileToggle 
        isMobileMenuOpen={isMobileMenuOpen} 
        isCollapsed={isCollapsed}
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        toggleSidebar={toggleSidebar}
      />

      {/* Desktop sidebar - fixed positioning */}
      <aside 
        id="sidebar"
        className={`
          fixed top-0 left-0 h-full z-40
          bg-[#f7f5ff] dark:bg-[#252332] border-r border-[#e0d8ff] dark:border-[#3a3351]
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-[72px]' : 'w-[240px]'}
          hidden md:block shadow-sm
        `}
      >
        <SidebarContent 
          isMobileMenuOpen={false}
          isCollapsed={isCollapsed}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          toggleSidebar={toggleSidebar}
        />
      </aside>

      {/* Mobile overlay when sidebar is open */}
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
