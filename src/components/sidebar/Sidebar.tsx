
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMobileToggle from './SidebarMobileToggle';
import SidebarCollapseButton from './SidebarCollapseButton';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to collapsed on desktop
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <SidebarMobileToggle 
        isMobileMenuOpen={isMobileMenuOpen} 
        isCollapsed={isCollapsed}
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <SidebarCollapseButton 
        isCollapsed={isCollapsed} 
        toggleSidebar={toggleSidebar} 
      />

      {/* Desktop Sidebar */}
      <aside 
        id="sidebar"
        className={`hidden md:block fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-[#f1effe] border-r border-sidebar-border transition-all duration-300 ease-in-out
                 md:translate-x-0 ${isCollapsed ? 'md:w-20' : 'md:w-64'} overflow-y-auto overflow-x-hidden`}
      >
        <SidebarContent 
          isMobileMenuOpen={false}
          isCollapsed={isCollapsed}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </aside>
    </>
  );
};

export { Sidebar };
