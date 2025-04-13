
import React from 'react';
import { ChevronLeft, ChevronRight, PanelLeft, PanelRight } from 'lucide-react';

interface SidebarCollapseButtonProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarCollapseButton: React.FC<SidebarCollapseButtonProps> = ({
  isCollapsed,
  toggleSidebar,
}) => {
  return (
    <button
      className="fixed z-50 md:flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all duration-300"
      style={{
        bottom: '20px',
        left: isCollapsed ? '14px' : '240px',
      }}
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      {isCollapsed 
        ? <PanelRight className="w-4 h-4" /> 
        : <PanelLeft className="w-4 h-4" />}
    </button>
  );
};

export default SidebarCollapseButton;
