
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
      className="fixed bottom-6 left-4 z-50 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary/90 text-primary-foreground shadow-md hover:bg-primary transition-all duration-300 transform hover:scale-105"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      {isCollapsed 
        ? <ChevronRight className="w-5 h-5" /> 
        : <ChevronLeft className="w-5 h-5" />}
    </button>
  );
};

export default SidebarCollapseButton;
