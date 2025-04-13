
import React from 'react';

interface SidebarOverlayProps {
  onClick: () => void;
}

const SidebarOverlay: React.FC<SidebarOverlayProps> = ({ onClick }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ease-in-out"
      onClick={onClick}
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default SidebarOverlay;
