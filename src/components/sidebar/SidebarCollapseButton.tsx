
import React from 'react';
import { Menu, X } from 'lucide-react';

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
      className="fixed bottom-4 left-4 z-50 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-forum-lavender text-white shadow-md hover:bg-forum-lavender/90 transition-all duration-300"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      {isCollapsed 
        ? <Menu className="w-5 h-5" /> 
        : <X className="w-5 h-5" />}
    </button>
  );
};

export default SidebarCollapseButton;
