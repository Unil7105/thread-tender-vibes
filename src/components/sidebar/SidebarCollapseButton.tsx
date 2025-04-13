
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SidebarCollapseButtonProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarCollapseButton: React.FC<SidebarCollapseButtonProps> = ({
  isCollapsed,
  toggleSidebar,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.button
            className="fixed bottom-6 left-4 z-50 hidden md:flex items-center justify-center w-10 h-10 rounded-full 
              bg-primary/90 text-primary-foreground shadow-md hover:bg-primary transition-all duration-300"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{isCollapsed ? "Expand sidebar" : "Collapse sidebar"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SidebarCollapseButton;
