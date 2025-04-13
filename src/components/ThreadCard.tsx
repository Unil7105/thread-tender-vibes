
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronUp, CalendarClock } from 'lucide-react';
import { Thread } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { Card } from './ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Badge } from './ui/badge';

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard = ({ thread }: ThreadCardProps) => {
  return (
    <Link to={`/thread/${thread.id}`} className="block transform transition-all duration-300 hover:-translate-y-1">
      <Card className="thread-card group bg-[#F9FAFB] shadow-sm border border-[#E5E7EB] hover:bg-white hover:shadow-lg p-5 
        transition-all duration-300 ease-in-out min-h-[180px]
        dark:bg-[#1F2937] dark:bg-opacity-90 dark:shadow-lg dark:border dark:border-[#374151] dark:hover:border-[#4B5563] dark:hover:bg-[#273043]">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={thread.author.avatar}
              alt={thread.author.name}
              className="w-10 h-10 rounded-full border-2 border-forum-lavender/30 shadow-md flex-shrink-0 object-cover
                dark:border-forum-magenta/40 dark:shadow-glass-highlight group-hover:animate-pulse-soft"
            />
            {thread.upvotes > 10 && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-forum-lavender rounded-full 
                animate-pulse-soft shadow-neon-glow" />
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
                <Badge
                  key={tag}
                  className="bg-[#F3F4F6] hover:bg-indigo-100 text-sm font-medium text-gray-700 px-2 py-0.5 rounded-full
                    hover:scale-105 transition-all duration-200 cursor-pointer
                    dark:bg-[#374151] dark:hover:bg-[#334155] dark:text-gray-200"
                >
                  #{tag}
                </Badge>
              ))}
              
              {thread.tags.length > 2 && (
                <TooltipProvider delayDuration={150}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className="bg-[#F3F4F6] hover:bg-indigo-100 text-sm font-medium text-gray-700 px-2 py-0.5 rounded-full
                        hover:scale-105 transition-all duration-200 cursor-pointer
                        dark:bg-[#374151] dark:hover:bg-[#334155] dark:text-gray-200">
                        +{thread.tags.length - 2}
                      </Badge>
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
          <div className="flex items-center mr-4 group/upvote">
            <button className="upvote-button flex items-center gap-1.5 hover:bg-gray-100 dark:hover:bg-[#374151]/50 p-1.5 rounded-md transition-colors">
              <ChevronUp className="w-4 h-4 text-forum-lavender group-hover/upvote:text-forum-lavender transition-all 
                group-hover/upvote:scale-110 dark:group-hover/upvote:text-forum-cyan" />
              <span className="text-base font-medium text-gray-700 group-hover/upvote:text-gray-900 dark:text-gray-300 dark:group-hover/upvote:text-white transition-colors">
                {thread.upvotes}
              </span>
            </button>
          </div>
          
          <div className="flex items-center text-base text-gray-600 group/replies dark:text-gray-400">
            <button className="flex items-center gap-1.5 hover:bg-gray-100 dark:hover:bg-[#374151]/50 p-1.5 rounded-md transition-colors">
              <MessageSquare className="w-4 h-4 text-forum-lavender group-hover/replies:text-forum-lavender 
                transition-all group-hover/replies:scale-110" />
              <span className="text-base font-medium text-gray-700 group-hover/replies:text-gray-900 dark:text-gray-300 dark:group-hover/replies:text-white transition-colors">
                {thread.replyCount}
              </span>
            </button>
          </div>
          
          {/* Reading time estimate based on content length */}
          <div className="ml-auto text-sm font-medium text-gray-600 dark:text-gray-400">
            {Math.ceil(thread.content.length / 800)} min read
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ThreadCard;
