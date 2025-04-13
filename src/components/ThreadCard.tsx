import { Link } from 'react-router-dom';
import { MessageSquare, ChevronUp, CalendarClock } from 'lucide-react';
import { Thread } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { Card } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard = ({ thread }: ThreadCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const cardVariants = {
    initial: { y: 0 },
    hover: { y: -8, transition: { duration: 0.3 } }
  };
  
  const upvoteVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1, 
      transition: { 
        duration: 0.2, 
        repeat: 1, 
        repeatType: "reverse"
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
      >
        <Card className="thread-card group bg-[#F9FAFB] shadow-sm border border-[#E5E7EB] hover:bg-white hover:shadow-lg p-5 
          transition-all duration-300 ease-in-out min-h-[180px]
          dark:bg-[#1F2937] dark:bg-opacity-90 dark:shadow-lg dark:border dark:border-[#374151] dark:hover:border-[#4B5563] dark:hover:bg-[#273043]">
          <div className="flex items-start gap-4">
            <div className="relative">
              <motion.div
                initial={{ scale: 1 }}
                animate={isHovered ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={thread.author.avatar}
                  alt={thread.author.name}
                  className="w-10 h-10 rounded-full border-2 border-forum-lavender/30 shadow-md flex-shrink-0 object-cover
                    dark:border-forum-magenta/40 dark:shadow-glass-highlight"
                />
              </motion.div>
              {thread.upvotes > 10 && (
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-4 h-4 bg-forum-lavender rounded-full 
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
            </div>
            <div className="min-w-0 flex-1 space-y-2.5">
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-forum-lavender 
                transition-colors line-clamp-2 dark:text-white dark:group-hover:text-forum-lavender tracking-tight">
                {thread.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-x-3 text-sm font-medium">
                <span className="text-forum-lavender">{thread.author.name}</span>
                <span className="hidden sm:inline text-gray-500">•</span>
                <span className="flex items-center text-gray-700 dark:text-gray-300">
                  <CalendarClock className="w-3.5 h-3.5 mr-1 text-forum-lavender/70" />
                  {formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}
                </span>
              </div>
              
              <p className="mt-1 line-clamp-2 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {thread.content}
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-1">
                {thread.tags.slice(0, 2).map((tag) => (
                  <motion.div
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge
                      className="bg-[#F3F4F6] hover:bg-indigo-100 text-sm font-medium text-gray-700 px-2 py-0.5 rounded-full
                        transition-all duration-200 cursor-pointer
                        dark:bg-[#374151] dark:hover:bg-[#334155] dark:text-gray-200"
                    >
                      #{tag}
                    </Badge>
                  </motion.div>
                ))}
                
                {thread.tags.length > 2 && (
                  <TooltipProvider delayDuration={150}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <Badge className="bg-[#F3F4F6] hover:bg-indigo-100 text-sm font-medium text-gray-700 px-2 py-0.5 rounded-full
                            transition-all duration-200 cursor-pointer
                            dark:bg-[#374151] dark:hover:bg-[#334155] dark:text-gray-200">
                            +{thread.tags.length - 2}
                          </Badge>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white border-gray-200 shadow-md dark:bg-[#1A1F2C] dark:border-forum-lavender/20">
                        <div className="flex flex-col gap-1">
                          {thread.tags.slice(2).map((tag) => (
                            <span key={tag} className="text-sm text-gray-700 dark:text-gray-300">#{tag}</span>
                          ))}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex items-center mt-5 pt-3 border-t border-gray-200 dark:border-white/5">
            <div className="flex items-center mr-4">
              <motion.button 
                className="upvote-button flex items-center gap-1.5 hover:bg-gray-100 dark:hover:bg-[#374151]/50 p-1.5 rounded-md transition-colors"
                whileTap={{ scale: 0.95 }}
                variants={upvoteVariants}
                initial="initial"
                whileHover="hover"
              >
                <ChevronUp className="w-4 h-4 text-forum-lavender transition-all" />
                <span className="text-base font-medium text-gray-700 group-hover/upvote:text-gray-900 dark:text-gray-300 dark:group-hover/upvote:text-white transition-colors">
                  {thread.upvotes}
                </span>
              </motion.button>
            </div>
            
            <div className="flex items-center text-base text-gray-600 group/replies dark:text-gray-400">
              <motion.button 
                className="flex items-center gap-1.5 hover:bg-gray-100 dark:hover:bg-[#374151]/50 p-1.5 rounded-md transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -5, 5, -3, 3, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <MessageSquare className="w-4 h-4 text-forum-lavender transition-all" />
                </motion.div>
                <span className="text-base font-medium text-gray-700 group-hover/replies:text-gray-900 dark:text-gray-300 dark:group-hover/replies:text-white transition-colors">
                  {thread.replyCount}
                </span>
              </motion.button>
            </div>
            
            {/* Reading time estimate based on content length */}
            <div className="ml-auto text-sm font-medium text-gray-600 dark:text-gray-400">
              {Math.ceil(thread.content.length / 800)} min read
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ThreadCard;
