
import React from 'react';
import { Moon, LogOut, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarFooterProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isCollapsed, toggleSidebar }) => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <div className="space-y-3">
      {/* Collapse button */}
      <motion.button 
        onClick={toggleSidebar}
        className={`
          w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-start'} 
          h-10 rounded-lg hover:bg-[#9b87f5]/10 transition-all duration-200
        `}
        whileHover={{ x: isCollapsed ? 0 : 3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle sidebar"
      >
        <motion.div 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#9b87f5]/20"
          animate={{ 
            rotate: isCollapsed ? 180 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronLeft className="w-4 h-4 text-[#9b87f5]" />
        </motion.div>
        {!isCollapsed && (
          <motion.span 
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            className="ml-3 text-sm text-gray-600 dark:text-gray-300"
          >
            Collapse Sidebar
          </motion.span>
        )}
      </motion.button>
      
      {/* Utility buttons */}
      <div className={`flex ${isCollapsed ? 'flex-col' : 'flex-row'} gap-2 ${isCollapsed ? 'items-center' : 'px-2'}`}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button 
                onClick={toggleTheme}
                className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#9b87f5]/10 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle dark mode"
              >
                <motion.div
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Moon className="w-4 h-4 text-[#9b87f5]" />
                </motion.div>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="right" align="center">
              <p>Toggle dark mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button 
                className="group flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#9b87f5]/10 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Logout"
              >
                <LogOut className="w-4 h-4 text-[#9b87f5]" />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="right" align="center">
              <p>Logout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default SidebarFooter;
