
import React from 'react';
import { ChevronLeft } from 'lucide-react';

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
      className="absolute top-6 right-3 z-50 flex items-center justify-center w-6 h-6 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300"
      onClick={toggleSidebar}
      aria-label="Collapse sidebar"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>
  );
};

export default SidebarCollapseButton;
