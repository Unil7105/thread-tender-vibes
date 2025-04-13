
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMobileToggle from './SidebarMobileToggle';
import SidebarContent from './SidebarContent';
import { ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Load sidebar state from localStorage on component mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('sidebarCollapsed');
      if (savedState !== null) {
        setIsCollapsed(JSON.parse(savedState));
      }
    } catch (error) {
      console.error('Error retrieving sidebar state from localStorage:', error);
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    
    // Save preference to localStorage
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  return (
    <>
      <SidebarMobileToggle 
        isMobileMenuOpen={isMobileMenuOpen} 
        isCollapsed={isCollapsed}
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {/* Desktop Sidebar Expand/Collapse Button */}
      <button 
        onClick={toggleSidebar}
        className={`
          fixed bottom-4 left-4 z-50 hidden md:flex 
          items-center justify-center w-12 h-12 
          bg-[#9b87f5] text-white rounded-full 
          shadow-lg transition-all duration-300
        `}
      >
        <ChevronRight 
          className={`w-6 h-6 transform transition-transform ${isCollapsed ? 'rotate-0' : 'rotate-180'}`} 
        />
      </button>

      {/* Desktop Sidebar */}
      <aside 
        id="sidebar"
        className={`
          hidden md:block fixed top-0 left-0 h-full z-40 
          bg-[#f1effe] border-r border-sidebar-border 
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-64'}
        `}
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
