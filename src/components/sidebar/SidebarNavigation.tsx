
import React from 'react';
import { Home, Compass, MessageSquare, User, Settings } from 'lucide-react';
import SidebarNavItem from './SidebarNavItem';

interface SidebarNavigationProps {
  isCollapsed: boolean;
  handleMobileMenuItemClick: () => void;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({
  isCollapsed,
  handleMobileMenuItemClick
}) => {
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <nav className="flex-1 space-y-1 px-2">
      {navItems.map((item) => (
        <SidebarNavItem
          key={item.path}
          path={item.path}
          icon={item.icon}
          label={item.label}
          isCollapsed={isCollapsed}
          handleMobileMenuItemClick={handleMobileMenuItemClick}
        />
      ))}
    </nav>
  );
};

export default SidebarNavigation;
