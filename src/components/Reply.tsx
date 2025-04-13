
import { useState } from 'react';
import { Reply as ReplyType } from '@/data/mockData';
import { ChevronUp, MessageSquare, CornerDownRight, Heart } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface ReplyProps {
  reply: ReplyType;
  level?: number;
  isOriginalPoster?: boolean;
}

const Reply = ({ reply, level = 0, isOriginalPoster = false }: ReplyProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  
  // Maximum nesting level to prevent excessive indentation
  const maxLevel = 3;
  const currentLevel = Math.min(level, maxLevel);
  
  // Refined reactions with fewer emojis
  const reactionEmojis = [
    { emoji: '❤️', count: reply.reactions['❤️'] || 0, id: 'heart' },
    { emoji: '👍', count: reply.reactions['👍'] || 0, id: 'thumbs-up' },
    { emoji: '💡', count: reply.reactions['💡'] || 0, id: 'idea' },
  ];
  
  const handleUpvote = () => {
    setHasUpvoted(!hasUpvoted);
  };
  
  return (
    <div className={cn(
      "mb-6 animate-fade-in",
      currentLevel > 0 ? 'pl-4 md:pl-6 ml-2 border-l-2 border-forum-electric/50 dark:border-forum-electric/30' : ''
    )}>
      <div className={cn(
        "reply-card shadow-soft transition-all duration-300",
        isOriginalPoster ? "bg-forum-yellow/5 dark:bg-forum-yellow/10 border-l-4 border-l-forum-yellow" : "",
        hasUpvoted ? "border-forum-yellow/30" : ""
      )}>
        <div className="flex items-start space-x-3">
          <img
            src={reply.author.avatar}
            alt={reply.author.name}
            className="w-8 h-8 rounded-full border border-forum-yellow/40 dark:border-forum-yellow/30 object-cover shadow-yellow-glow"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-foreground dark:text-foreground hover-glow">{reply.author.name}</span>
              
              {isOriginalPoster && (
                <span className="px-1.5 py-0.5 text-xs font-medium bg-forum-yellow/20 text-forum-yellow rounded-md dark:bg-forum-yellow/30 pulse-glow">
                  OP
                </span>
              )}
              
              <div className="flex items-center text-xs text-muted-foreground dark:text-muted-foreground">
                <span className="mx-1">·</span>
                <span>{formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}</span>
              </div>
              
              {reply.parentId && (
                <div className="flex items-center text-xs text-muted-foreground dark:text-muted-foreground">
                  <span className="mx-1">·</span>
                  <CornerDownRight className="w-3 h-3 mr-1 text-forum-yellow" />
                  <span>Replied to <span className="text-forum-yellow dark:text-forum-yellow hover-glow">{reply.parentId}</span></span>
                </div>
              )}
            </div>
            
            <div className="mt-3 text-sm text-foreground dark:text-foreground/90 leading-relaxed">
              {reply.content}
            </div>
            
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button 
                className={cn(
                  "upvote-button bg-transparent hover:bg-forum-yellow/10 px-2 py-1 rounded-md transition-all",
                  hasUpvoted && "text-forum-yellow bg-forum-yellow/10"
                )}
                onClick={handleUpvote}
              >
                <ChevronUp className={cn("w-3.5 h-3.5 mr-1", hasUpvoted && "text-forum-yellow")} />
                <span>{hasUpvoted ? reply.upvotes + 1 : reply.upvotes}</span>
              </button>
              
              <button 
                className="flex items-center text-xs text-muted-foreground hover:text-forum-yellow transition-colors duration-200 hover:underline underline-offset-2 dark:text-muted-foreground dark:hover:text-forum-yellow px-2 py-1 rounded-md hover:bg-forum-yellow/10"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                <span>Reply</span>
              </button>
              
              <div className="flex flex-wrap gap-2 ml-auto">
                {reactionEmojis.map((reaction) => (
                  <button 
                    key={reaction.id}
                    className="emoji-reaction bg-[#f8f8ff] dark:bg-secondary/40 dark:border dark:border-border/30 hover:border-forum-yellow/30"
                  >
                    <span>{reaction.emoji}</span>
                    {reaction.count > 0 && (
                      <span className="ml-1 text-xs text-muted-foreground dark:text-muted-foreground">{reaction.count}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Nested replies */}
      {reply.replies && reply.replies.length > 0 && (
        <div className="mt-4">
          {reply.replies.map((nestedReply) => (
            <Reply 
              key={nestedReply.id} 
              reply={nestedReply} 
              level={currentLevel + 1} 
              isOriginalPoster={nestedReply.author.id === reply.author.id} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reply;
