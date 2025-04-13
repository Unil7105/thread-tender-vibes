
import React from 'react';
import { User } from 'lucide-react';

interface SidebarUserProfileProps {
  isCollapsed: boolean;
}

const SidebarUserProfile: React.FC<SidebarUserProfileProps> = ({
  isCollapsed
}) => {
  return (
    <div className={`flex ${isCollapsed ? 'justify-center' : 'items-center gap-2'} rounded-md p-2 ${isCollapsed ? 'px-0' : 'px-2'} mb-3`}>
      <div className="w-10 h-10 rounded-full bg-primary overflow-hidden flex items-center justify-center">
        <User className="w-5 h-5 text-primary-foreground" />
      </div>
      
      {!isCollapsed && (
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-medium truncate">User Name</p>
          <p className="text-xs text-muted-foreground truncate">user@example.com</p>
        </div>
      )}
    </div>
  );
};

export default SidebarUserProfile;
