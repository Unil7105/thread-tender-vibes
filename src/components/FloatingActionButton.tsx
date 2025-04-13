
import { ReactNode } from 'react';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface FloatingActionButtonProps {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
}

const FloatingActionButton = ({
  label,
  icon = <Plus className="w-5 h-5" />,
  onClick,
}: FloatingActionButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <motion.button
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full 
              bg-forum-lavender text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 
              focus:ring-forum-lavender focus:ring-offset-2 focus:ring-offset-background
              dark:bg-forum-lavender dark:text-white"
            onClick={onClick}
            aria-label={label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.3 
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 180,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              className="relative z-10 flex items-center justify-center"
            >
              {icon}
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-full bg-forum-lavender opacity-80"
              initial={{ scale: 0 }}
              animate={{ scale: [0.85, 1.05, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3,
              }}
            />
          </motion.button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-white border-gray-200 shadow-md dark:bg-card dark:border-border/40">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FloatingActionButton;
