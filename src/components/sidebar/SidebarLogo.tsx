
import React from 'react';

interface SidebarLogoProps {
  isCollapsed: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({
  isCollapsed
}) => {
  return (
    <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-start'} items-center mb-6 px-2`}>
      <div className="flex items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
          <span className="text-lg font-semibold">T</span>
        </div>
        {!isCollapsed && (
          <span className="ml-2 text-lg font-semibold truncate">
            TextForum
          </span>
        )}
      </div>
    </div>
  );
};

export default SidebarLogo;
