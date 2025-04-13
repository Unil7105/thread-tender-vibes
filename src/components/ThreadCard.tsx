
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
      <Card className="thread-card group bg-[#1F2937] bg-opacity-90 shadow-lg border border-[#374151] hover:border-[#4B5563] p-5 
        transition-all duration-300 dark:shadow-glass-highlight">
        <div className="flex items-start gap-4">
          <div className="relative">
            <img
              src={thread.author.avatar}
              alt={thread.author.name}
              className="w-10 h-10 rounded-full border-2 border-forum-lavender/30 shadow-md flex-shrink-0 
                dark:border-forum-magenta/40 dark:shadow-glass-highlight group-hover:animate-pulse-soft"
            />
            {thread.upvotes > 10 && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-forum-lavender rounded-full 
                animate-pulse-soft shadow-neon-glow" />
            )}
          </div>
          <div className="min-w-0 flex-1 space-y-2.5">
            <h3 className="font-bold text-lg text-white group-hover:text-forum-lavender 
              transition-colors line-clamp-2 dark:shadow-text-shadow">
              {thread.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-x-3 text-xs">
              <span className="font-medium text-violet-400">{thread.author.name}</span>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="flex items-center text-[#9CA3AF]">
                <CalendarClock className="w-3.5 h-3.5 mr-1 text-forum-lavender/70" />
                {formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}
              </span>
            </div>
            
            <p className="mt-1 line-clamp-2 text-sm text-gray-300 leading-relaxed">
              {thread.content}
            </p>
            
            <div className="flex flex-wrap gap-1.5 pt-1">
              {thread.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#374151] hover:bg-[#4B5563] text-xs text-gray-200 px-2 py-0.5 rounded-full
                    hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  #{tag}
                </Badge>
              ))}
              
              {thread.tags.length > 2 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Badge className="bg-[#374151] hover:bg-[#4B5563] text-xs text-gray-200 px-2 py-0.5 rounded-full
                        hover:scale-105 transition-all duration-200 cursor-pointer">
                        +{thread.tags.length - 2}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1A1F2C] border-forum-lavender/20">
                      <div className="flex flex-col gap-1">
                        {thread.tags.slice(2).map((tag) => (
                          <span key={tag} className="text-xs text-gray-300">#{tag}</span>
                        ))}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center mt-5 pt-3 border-t dark:border-white/5">
          <div className="flex items-center mr-4 group/upvote">
            <button className="upvote-button flex items-center gap-1.5 hover:bg-[#374151]/50 p-1.5 rounded-md transition-colors">
              <ChevronUp className="w-4 h-4 text-violet-400 group-hover/upvote:text-forum-lavender transition-all 
                group-hover/upvote:scale-110 dark:group-hover/upvote:text-forum-cyan" />
              <span className="text-sm text-gray-300 group-hover/upvote:text-white transition-colors">
                {thread.upvotes}
              </span>
            </button>
          </div>
          
          <div className="flex items-center text-xs text-gray-400 group/replies">
            <button className="flex items-center gap-1.5 hover:bg-[#374151]/50 p-1.5 rounded-md transition-colors">
              <MessageSquare className="w-4 h-4 text-violet-400 group-hover/replies:text-forum-lavender 
                transition-all group-hover/replies:scale-110" />
              <span className="text-sm text-gray-300 group-hover/replies:text-white transition-colors">
                {thread.replyCount}
              </span>
            </button>
          </div>
          
          {/* Reading time estimate based on content length */}
          <div className="ml-auto text-xs text-gray-500">
            {Math.ceil(thread.content.length / 800)} min read
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ThreadCard;
