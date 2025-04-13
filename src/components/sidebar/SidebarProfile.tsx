
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProfileProps {
  isCollapsed: boolean;
}

const SidebarProfile: React.FC<SidebarProfileProps> = ({ isCollapsed }) => {
  // Mock profile data - this would normally come from auth state
  const profile = {
    name: 'Alexandra Chen',
    avatar: 'https://ui-avatars.com/api/?name=Alexandra+Chen&background=random',
    role: 'Forum Member'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <Link 
        to="/profile" 
        className="group flex items-center p-2 rounded-lg transition-colors hover:bg-sidebar-accent"
      >
        <Avatar className={`transition-all duration-300 ${isCollapsed ? 'h-10 w-10' : 'h-12 w-12'} border-2 border-forum-lavender`}>
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback>
            <User className="h-6 w-6 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        
        {!isCollapsed && (
          <div className="ml-3 overflow-hidden">
            <p className="font-medium truncate">{profile.name}</p>
            <p className="text-xs text-muted-foreground truncate">{profile.role}</p>
          </div>
        )}
      </Link>
    </motion.div>
  );
};

export default SidebarProfile;
