
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { UserRound } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProfileProps {
  isCollapsed: boolean;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({
  isCollapsed
}) => {
  // Rich profile data with proper image
  const profile = {
    name: 'Alexandra Chen',
    avatar: 'https://i.pravatar.cc/300?img=47', // Using a proper avatar image
    role: 'Product Designer',
    status: 'online'
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
      className="w-full pt-2 pb-2"
    >
      <Link 
        to="/profile" 
        className={`
          group flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} 
          p-1.5 rounded-lg transition-colors hover:bg-sidebar-accent
          dark:hover:bg-white/5 dark:hover:shadow-glass-highlight
        `}
      >
        <Avatar 
          className={`
            transition-all duration-300 
            ${isCollapsed ? 'h-8 w-8' : 'h-9 w-9'} 
            border-2 border-forum-lavender/50
            dark:border-forum-magenta/60
            flex-shrink-0
            ring-2 ring-transparent hover:ring-forum-lavender/40 group-hover:ring-forum-lavender/40
            dark:hover:ring-forum-magenta/40 dark:group-hover:ring-forum-magenta/40
            shadow-md
            dark:shadow-neon-glow
          `}
        >
          <AvatarImage 
            src={profile.avatar} 
            alt={profile.name} 
            className="object-cover"
          />
          <AvatarFallback>
            <UserRound className="h-4 w-4 text-muted-foreground dark:text-white" />
          </AvatarFallback>
        </Avatar>
        
        {!isCollapsed && (
          <div className="ml-2 flex-grow overflow-hidden min-w-0">
            <div className="flex items-center">
              <p className="font-medium text-sm truncate dark:text-white">{profile.name}</p>
              {profile.status === 'online' && (
                <span className="ml-1.5 h-2 w-2 rounded-full bg-green-500 shadow-glow-sm"></span>
              )}
            </div>
            <p className="text-xs text-muted-foreground truncate dark:text-gray-400">{profile.role}</p>
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default SidebarProfile;
