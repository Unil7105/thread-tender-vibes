
import React from 'react';
import { X } from 'lucide-react';
import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';
import SidebarFooter from './SidebarFooter';
import SidebarProfile from './SidebarProfile';

interface SidebarContentProps {
  isMobileMenuOpen: boolean;
  isCollapsed: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const SidebarContent: React.FC<SidebarContentProps> = ({
  isMobileMenuOpen,
  isCollapsed,
  setIsMobileMenuOpen
}) => {
  return (
    <div className="flex flex-col h-full py-6 px-3 relative">
      {/* Close button for mobile view */}
      {isMobileMenuOpen && (
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-accent/50 text-muted-foreground hover:text-accent-foreground md:hidden"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      )}
      
      <SidebarLogo isCollapsed={isCollapsed} />
      <SidebarProfile isCollapsed={isCollapsed} />
      <SidebarNavigation 
        isCollapsed={isCollapsed} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      <SidebarFooter isCollapsed={isCollapsed} />
    </div>
  );
};

export default SidebarContent;
