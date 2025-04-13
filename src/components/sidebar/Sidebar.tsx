
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMobileToggle from './SidebarMobileToggle';
import SidebarCollapseButton from './SidebarCollapseButton';
import SidebarOverlay from './SidebarOverlay';
import SidebarContent from './SidebarContent';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true); // Default to collapsed
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const mobileToggle = document.getElementById('mobile-toggle');
      
      if (mobileToggle && mobileToggle.contains(event.target)) {
        return;
      }
      
      if (isMobileMenuOpen && sidebar && !sidebar.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMobileMenuToggle = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <SidebarMobileToggle 
        isMobileMenuOpen={isMobileMenuOpen} 
        handleMobileMenuToggle={handleMobileMenuToggle} 
      />

      {!isCollapsed && (
        <SidebarCollapseButton 
          isCollapsed={isCollapsed} 
          toggleSidebar={toggleSidebar} 
        />
      )}

      {isMobileMenuOpen && (
        <SidebarOverlay onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <SidebarContent 
        isMobileMenuOpen={isMobileMenuOpen}
        isCollapsed={isCollapsed}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export { Sidebar };
