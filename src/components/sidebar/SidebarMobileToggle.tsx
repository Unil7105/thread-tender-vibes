
import React from 'react';

interface SidebarMobileToggleProps {
  isMobileMenuOpen: boolean;
  handleMobileMenuToggle: (e: React.MouseEvent) => void;
}

const SidebarMobileToggle: React.FC<SidebarMobileToggleProps> = ({ 
  isMobileMenuOpen, 
  handleMobileMenuToggle 
}) => {
  return (
    <button 
      id="mobile-toggle"
      className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-sidebar shadow-md border border-sidebar-border"
      onClick={handleMobileMenuToggle}
      aria-label="Toggle menu"
    >
      <div className="w-5 h-5 flex flex-col justify-between">
        <span className={`block h-0.5 w-full bg-sidebar-foreground rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block h-0.5 w-full bg-sidebar-foreground rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block h-0.5 w-full bg-sidebar-foreground rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </div>
    </button>
  );
};

export default SidebarMobileToggle;
