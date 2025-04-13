
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMobileToggle from './SidebarMobileToggle';
import SidebarContent from './SidebarContent';

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
        toggleSidebar={toggleSidebar}
      />

      {/* Desktop Sidebar */}
      <aside 
        id="sidebar"
        className={`
          fixed top-0 left-0 h-full z-40
          bg-[#f7f5ff] dark:bg-[#252332] border-r border-[#e0d8ff] dark:border-[#3a3351]
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16' : 'w-64'}
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

      {/* Mobile Sidebar - Only visible when menu is open */}
      {isMobileMenuOpen && (
        <aside 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="absolute top-0 left-0 h-full w-64 bg-[#f7f5ff] dark:bg-[#252332] border-r border-[#e0d8ff] dark:border-[#3a3351] shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <SidebarContent 
              isMobileMenuOpen={true}
              isCollapsed={false}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              toggleSidebar={toggleSidebar}
            />
          </div>
        </aside>
      )}
    </>
  );
};

export { Sidebar };
