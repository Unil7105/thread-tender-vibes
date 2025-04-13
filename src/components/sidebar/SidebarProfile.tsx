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
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3
  }} className="mb-4 w-full">
      <Link to="/profile" className="group flex items-center justify-center md:justify-start p-2 rounded-lg transition-colors hover:bg-sidebar-accent">
        <Avatar className={`
            transition-all duration-300 
            ${isCollapsed ? 'h-8 w-8' : 'h-10 w-10'} 
            border-2 border-forum-lavender
            flex-shrink-0
          `}>
          <AvatarImage src={profile.avatar} alt={profile.name} className="flex items-center justify-center" />
          <AvatarFallback>
            <User className="h-5 w-5 text-muted-foreground" />
          </AvatarFallback>
        </Avatar>
        
        {!isCollapsed && <div className="ml-3 flex-grow overflow-hidden min-w-0">
            <p className="font-medium text-sm truncate">{profile.name}</p>
            <p className="text-xs text-muted-foreground truncate">{profile.role}</p>
          </div>}
      </Link>
    </motion.div>;
};
export default SidebarProfile;