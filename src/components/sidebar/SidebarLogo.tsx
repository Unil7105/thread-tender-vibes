
import React from 'react';
import { motion } from 'framer-motion';

interface SidebarLogoProps {
  isCollapsed: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ isCollapsed }) => {
  return (
    <div className="flex justify-center md:justify-start items-center h-16 mb-2">
      <motion.div 
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-forum-lavender text-white">
          {isCollapsed ? 'Tf' : 'T'}
        </div>
        {!isCollapsed && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-3 text-xl font-bold text-forum-lavender whitespace-nowrap"
          >
            TextForum
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default SidebarLogo;
