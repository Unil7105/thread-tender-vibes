
import React from 'react';

interface SidebarOverlayProps {
  onClick: () => void;
}

const SidebarOverlay: React.FC<SidebarOverlayProps> = ({ onClick }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-40 md:hidden"
      onClick={onClick}
    ></div>
  );
};

export default SidebarOverlay;
