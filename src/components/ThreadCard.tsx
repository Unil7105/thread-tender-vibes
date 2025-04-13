
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronUp, Clock } from 'lucide-react';
import { Thread } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { Card } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Badge } from './ui/badge';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard = ({ thread }: ThreadCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const cardVariants: Variants = {
    initial: { y: 0, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)" },
    hover: { 
      y: -5, 
      boxShadow: "0px 10px 25px rgba(147, 112, 219, 0.15)",
      transition: { duration: 0.3 } 
    }
  };
  
  const upvoteVariants: Variants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1, 
      transition: { 
        duration: 0.2, 
        repeat: 1, 
        repeatType: "reverse" as const
      } 
    }
  };
  
  return (
    <Link 
      to={`/thread/${thread.id}`} 
      className="block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={cardVariants}
        className="transition-all duration-300 ease-in-out"
      >
        <Card className="thread-card overflow-hidden rounded-2xl border border-[#dbeafe] bg-white p-6
          transition-all duration-300 ease-in-out min-h-[180px]
          dark:bg-[#1e1e2f] dark:border-[#374151]/30 dark:hover:border-forum-lavender/30">
          
          {/* Title section */}
          <h3 className="font-poppins font-bold text-xl text-[#1e293b] group-hover:text-forum-lavender 
              transition-colors line-clamp-2 tracking-tight mb-3
              dark:text-white dark:group-hover:text-forum-lavender">
            {thread.title}
          </h3>
          
          {/* Author information */}
          <div className="flex items-center mb-4 mt-2">
            <motion.div
              initial={{ scale: 1 }}
              animate={isHovered ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={thread.author.avatar}
                alt={thread.author.name}
                className="w-8 h-8 rounded-full border-2 border-forum-lavender/30 shadow-md flex-shrink-0 object-cover
                  dark:border-forum-magenta/40 dark:shadow-glass-highlight"
              />
              {thread.upvotes > 10 && (
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-forum-lavender rounded-full 
                    shadow-neon-glow" 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              )}
            </motion.div>
            
            <div className="ml-2.5 flex flex-col">
              <span className="text-sm font-medium text-forum-lavender">{thread.author.name}</span>
              <span className="text-xs text-[#6b7280] dark:text-gray-400 flex items-center">
                {formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}
              </span>
            </div>
          </div>
          
          {/* Content preview with fade effect */}
          <div className="relative">
            <p className="text-[#4b5563] dark:text-gray-300 text-sm leading-relaxed line-clamp-2 mb-4">
              {thread.content}
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white dark:from-[#1e1e2f] pointer-events-none"></div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {thread.tags.slice(0, 3).map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Badge
                  className="bg-[#eef2f7] text-xs font-medium text-[#4b5563] px-2.5 py-0.5 rounded-full
                    transition-all duration-200 
                    dark:bg-[#374151]/70 dark:text-gray-300"
                >
                  #{tag}
                </Badge>
              </motion.div>
            ))}
            
            {thread.tags.length > 3 && (
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge className="bg-[#eef2f7] text-xs font-medium text-[#4b5563] px-2.5 py-0.5 rounded-full
                        transition-all duration-200
                        dark:bg-[#374151]/70 dark:text-gray-300">
                        +{thread.tags.length - 3}
                      </Badge>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white border-gray-200 shadow-md dark:bg-[#1A1F2C] dark:border-forum-lavender/20">
                    <div className="flex flex-col gap-1">
                      {thread.tags.slice(3).map((tag) => (
                        <span key={tag} className="text-sm text-gray-700 dark:text-gray-300">#{tag}</span>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          
          {/* Interaction stats */}
          <div className="flex items-center justify-between pt-3 border-t border-[#f1f5f9] dark:border-white/5">
            <div className="flex items-center space-x-4">
              {/* Upvotes */}
              <motion.div 
                className="flex items-center gap-1.5 bg-[#f9f9fb] dark:bg-[#111827]/30 px-2.5 py-1.5 rounded-lg"
                whileTap={{ scale: 0.95 }}
                variants={upvoteVariants}
                initial="initial"
                whileHover="hover"
              >
                <ChevronUp className="w-4 h-4 text-forum-lavender" />
                <span className="text-sm font-medium text-[#4b5563] dark:text-gray-300">
                  {thread.upvotes}
                </span>
              </motion.div>
              
              {/* Replies */}
              <motion.div 
                className="flex items-center gap-1.5 bg-[#f9f9fb] dark:bg-[#111827]/30 px-2.5 py-1.5 rounded-lg"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageSquare className="w-4 h-4 text-forum-lavender" />
                </motion.div>
                <span className="text-sm font-medium text-[#4b5563] dark:text-gray-300">
                  {thread.replyCount}
                </span>
              </motion.div>
            </div>
            
            {/* Reading time */}
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#6b7280] dark:text-gray-400 bg-[#f9f9fb] dark:bg-[#111827]/30 px-2.5 py-1.5 rounded-lg">
              <Clock className="w-3.5 h-3.5 text-forum-lavender/80" />
              {Math.ceil(thread.content.length / 800)} min read
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ThreadCard;
