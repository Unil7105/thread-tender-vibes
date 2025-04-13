
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProfileProps {
  isCollapsed: boolean;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({
  isCollapsed
}) => {
  // Mock profile data - this would normally come from auth state
  const profile = {
    name: 'Alexandra Chen',
    avatar: 'https://ui-avatars.com/api/?name=Alexandra+Chen&background=random',
    role: 'Forum Member'
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
            ${isCollapsed ? 'h-8 w-8' : 'h-8 w-8'} 
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
            className="flex items-center justify-center" 
          />
          <AvatarFallback>
            <User className="h-4 w-4 text-muted-foreground dark:text-white" />
          </AvatarFallback>
        </Avatar>
        
        {!isCollapsed && (
          <div className="ml-2 flex-grow overflow-hidden min-w-0">
            <p className="font-medium text-xs truncate dark:text-white">{profile.name}</p>
            <p className="text-xs text-muted-foreground truncate dark:text-gray-400">{profile.role}</p>
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default SidebarProfile;
