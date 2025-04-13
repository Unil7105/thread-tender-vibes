
import { useState, useEffect } from 'react';

/**
 * Custom hook to manage sidebar state.
 * Allows for external control through props or internal state management.
 */
export const useSidebarState = (
  propsMobileMenuOpen?: boolean,
  propsSetMobileMenuOpen?: (value: boolean) => void
) => {
  // State for controlling the sidebar menu on mobile
  const [_isMobileMenuOpen, _setIsMobileMenuOpen] = useState(false);
  
  // Use provided props or fallback to internal state
  const isMobileMenuOpen = propsMobileMenuOpen !== undefined ? propsMobileMenuOpen : _isMobileMenuOpen;
  const setIsMobileMenuOpen = propsSetMobileMenuOpen || _setIsMobileMenuOpen;
  
  // State for controlling the collapsed state of the sidebar
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    
    // Save state to localStorage for persistence
    try {
      localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
    } catch (error) {
      console.error('Error saving sidebar state to localStorage:', error);
    }
  };
  
  // Load saved state from localStorage on mount
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
  
  return {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isCollapsed,
    setIsCollapsed,
    toggleSidebar
  };
};
