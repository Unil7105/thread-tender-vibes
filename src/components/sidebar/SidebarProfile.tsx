
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';

interface SidebarProfileProps {
  isCollapsed: boolean;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({ isCollapsed }) => {
  // Mock profile data
  const profile = {
    name: 'Alexandra Chen',
    avatar: 'https://ui-avatars.com/api/?name=Alexandra+Chen&background=random',
    role: 'Forum Member'
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'public/lovable-uploads/2331b3a6-d992-4309-ad24-103b4c2cdc84.png';
  };

  return (
    <div className="w-full flex justify-center p-2">
      <Link 
        to="/profile" 
        className={`group transition-all duration-300 relative ${isCollapsed ? 'w-10' : 'w-full'}`}
      >
        <Avatar 
          className="h-10 w-10 rounded-full border-2 border-gray-700 overflow-hidden mx-auto"
        >
          <AvatarImage 
            src={profile.avatar} 
            alt={profile.name} 
            onError={handleImageError}
          />
          <AvatarFallback className="bg-gray-700">
            <User className="h-5 w-5 text-gray-400" />
          </AvatarFallback>
        </Avatar>
        
        {!isCollapsed && (
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-300 truncate">{profile.name}</p>
            <p className="text-xs text-gray-500 truncate">{profile.role}</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default SidebarProfile;
