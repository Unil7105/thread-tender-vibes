
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarMobileToggle from './SidebarMobileToggle';
import SidebarContent from './SidebarContent';
import SidebarOverlay from './SidebarOverlay';

interface SidebarProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (value: boolean) => void;
}

const Sidebar = ({ isMobileMenuOpen: propsMobileMenuOpen, setIsMobileMenuOpen: propsSetMobileMenuOpen }: SidebarProps = {}) => {
  const location = useLocation();
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  // Use props values if provided, otherwise use internal state
  const isMobileMenuOpen = propsMobileMenuOpen !== undefined ? propsMobileMenuOpen : internalMobileMenuOpen;
  const setIsMobileMenuOpen = propsSetMobileMenuOpen || setInternalMobileMenuOpen;
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, setIsMobileMenuOpen]);

  // Close mobile menu when scrolling past threshold on mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && window.scrollY > 300 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

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

  // Keyboard shortcut to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 's' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleSidebar();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isCollapsed]);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    
    // Save preference to localStorage
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  return (
    <>
      {/* Mobile Sidebar Toggle Component */}
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
          ${isCollapsed ? 'w-[72px]' : 'w-[240px] max-w-[260px] min-w-[200px]'}
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

      {/* Mobile Sidebar (slide-in drawer) */}
      <aside 
        id="mobile-sidebar"
        className={`
          fixed top-0 left-0 h-full z-50 w-[240px] max-w-[80vw]
          bg-[#f7f5ff] dark:bg-[#252332] border-r border-[#e0d8ff] dark:border-[#3a3351]
          transition-all duration-300 ease-in-out transform
          ${isMobileMenuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'}
          md:hidden
        `}
      >
        <SidebarContent 
          isMobileMenuOpen={isMobileMenuOpen}
          isCollapsed={false}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          toggleSidebar={toggleSidebar}
        />
      </aside>

      {/* Mobile overlay/backdrop with blur effect */}
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
