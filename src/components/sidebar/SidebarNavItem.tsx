
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SidebarNavItemProps {
  path: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
  handleMobileMenuItemClick: () => void;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  path,
  icon: Icon,
  label,
  isCollapsed,
  handleMobileMenuItemClick
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <Link
      to={path}
      className={`flex ${isCollapsed ? 'justify-center' : 'justify-start'} items-center py-2 px-3 rounded-md transition-colors text-sm font-medium
        ${isActive 
          ? 'bg-primary text-primary-foreground' 
          : 'text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground'}`}
      onClick={handleMobileMenuItemClick}
    >
      <Icon className="w-5 h-5 shrink-0" />
      {!isCollapsed && (
        <span className="ml-3 truncate">
          {label}
        </span>
      )}
    </Link>
  );
};

export default SidebarNavItem;
