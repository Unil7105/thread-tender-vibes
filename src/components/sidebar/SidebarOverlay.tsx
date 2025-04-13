
import React from 'react';

interface SidebarOverlayProps {
  onClick: () => void;
  className?: string;
}

const SidebarOverlay: React.FC<SidebarOverlayProps> = ({ onClick, className }) => {
  return (
    <div 
      className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ease-in-out ${className || ''}`}
      onClick={onClick}
      aria-hidden="true"
      role="presentation"
    />
  );
};

export default SidebarOverlay;
