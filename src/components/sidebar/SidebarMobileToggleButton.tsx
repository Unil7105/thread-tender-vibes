
import React from 'react';
import { Menu } from 'lucide-react';

interface SidebarMobileToggleButtonProps {
  handleMobileMenuToggle: (e: React.MouseEvent) => void;
}

const SidebarMobileToggleButton: React.FC<SidebarMobileToggleButtonProps> = ({
  handleMobileMenuToggle
}) => {
  return (
    <button 
      id="mobile-toggle"
      className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-background/80 backdrop-blur-sm shadow-md border border-border"
      onClick={handleMobileMenuToggle}
      aria-label="Toggle menu"
    >
      <Menu className="w-5 h-5 text-foreground" />
    </button>
  );
};

export default SidebarMobileToggleButton;
