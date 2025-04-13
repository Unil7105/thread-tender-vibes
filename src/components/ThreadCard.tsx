
import { Link } from 'react-router-dom';
import { MessageSquare, ChevronUp, CalendarClock } from 'lucide-react';
import { Thread } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { Card } from './ui/card';

interface ThreadCardProps {
  thread: Thread;
}

const ThreadCard = ({ thread }: ThreadCardProps) => {
  return (
    <Link to={`/thread/${thread.id}`} className="block transform transition-all duration-300 hover:-translate-y-1">
      <Card className="thread-card group bg-[#FAFAFA] dark:bg-gradient-to-br dark:from-[#1A1F2C]/80 dark:to-[#1A1F2C]/60">
        <div className="flex items-start gap-3">
          <img
            src={thread.author.avatar}
            alt={thread.author.name}
            className="w-10 h-10 rounded-full border-2 border-forum-lavender/30 shadow-md flex-shrink-0 dark:border-forum-magenta/40 dark:shadow-glass-highlight"
          />
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-base md:text-lg group-hover:text-forum-lavender transition-colors line-clamp-2 dark:text-white dark:group-hover:text-forum-cyan dark:shadow-text-shadow">
              {thread.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 mt-1 text-xs text-muted-foreground dark:text-gray-400">
              <span className="font-medium text-forum-lavender/80 dark:text-forum-cyan">{thread.author.name}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <CalendarClock className="w-3.5 h-3.5 mr-1 dark:text-forum-lavender/70" />
                {formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-foreground/80 dark:text-gray-300">
              {thread.content}
            </p>
          </div>
        </div>
        
        <div className="flex items-center flex-wrap gap-2 mt-4 pt-3 border-t dark:border-white/5">
          <div className="flex items-center mr-3">
            <button className="upvote-button group/upvote">
              <ChevronUp className="w-4 h-4 group-hover/upvote:text-forum-lavender transition-colors dark:group-hover/upvote:text-forum-cyan" />
              <span>{thread.upvotes}</span>
            </button>
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground dark:text-gray-400">
            <MessageSquare className="w-4 h-4 mr-1 dark:text-forum-lavender/70" />
            <span>{thread.replyCount} replies</span>
          </div>
          
          <div className="ml-auto flex flex-wrap gap-1.5">
            {thread.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="thread-tag dark:animate-pulse-soft"
              >
                #{tag}
              </span>
            ))}
            {thread.tags.length > 2 && (
              <span className="thread-tag dark:animate-pulse-soft">
                +{thread.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ThreadCard;
