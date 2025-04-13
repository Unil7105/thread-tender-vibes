
import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface SidebarCollapseToggleProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarCollapseToggle: React.FC<SidebarCollapseToggleProps> = ({
  isCollapsed,
  toggleSidebar
}) => {
  return (
    <div className="fixed bottom-4 left-4 z-50 hidden md:block">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90"
        onClick={toggleSidebar}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <ChevronLeft className={`w-5 h-5 transform transition-transform duration-200 ${isCollapsed ? 'rotate-180' : 'rotate-0'}`} />
      </button>
    </div>
  );
};

export default SidebarCollapseToggle;
