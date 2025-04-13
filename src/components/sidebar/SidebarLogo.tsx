
import React from 'react';
import { motion } from 'framer-motion';

interface SidebarLogoProps {
  isCollapsed: boolean;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ isCollapsed }) => {
  return (
    <div className="flex items-center justify-center md:justify-start h-12 mb-2 px-2">
      <motion.div 
        className="flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#b29dff] text-white font-semibold shadow-sm">
          <span className="text-base">T</span>
        </div>
        
        {!isCollapsed && (
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="ml-3 text-xl font-bold text-[#9b87f5] whitespace-nowrap"
          >
            TextForum
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default SidebarLogo;
