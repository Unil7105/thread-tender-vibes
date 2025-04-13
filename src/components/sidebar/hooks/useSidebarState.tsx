
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useSidebarState = (
  propsMobileMenuOpen?: boolean,
  propsSetMobileMenuOpen?: (value: boolean) => void
) => {
  const location = useLocation();
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const isMobileMenuOpen = propsMobileMenuOpen !== undefined ? propsMobileMenuOpen : internalMobileMenuOpen;
  const setIsMobileMenuOpen = propsSetMobileMenuOpen || setInternalMobileMenuOpen;
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, setIsMobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && window.scrollY > 300 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  // Load sidebar collapsed state from localStorage
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

  // Add keyboard shortcut for toggling sidebar
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
    
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isCollapsed,
    setIsCollapsed,
    toggleSidebar
  };
};
