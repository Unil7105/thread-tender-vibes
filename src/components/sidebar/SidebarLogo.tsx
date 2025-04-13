
import React from 'react';
import { motion } from 'framer-motion';

interface SidebarLogoProps {
  isCollapsed: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({
  isCollapsed
}) => {
  return (
    <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} h-16 pt-6 pb-4 px-2`}>
      <motion.div className="flex items-center" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.3
      }}>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-forum-indigo to-forum-lavender text-white font-semibold shadow-md ring-2 ring-transparent hover:ring-forum-lavender/40 transition-all duration-200">
          <span className="text-base leading-none flex items-center justify-center">T</span>
        </div>
        
        {!isCollapsed && <motion.span initial={{
          opacity: 0,
          x: -10
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.3,
          delay: 0.1
        }} className="ml-3 text-xl font-bold text-forum-indigo dark:text-forum-lavender whitespace-nowrap">
            TextForum
          </motion.span>}
      </motion.div>
    </div>
  );
};

export default SidebarLogo;
