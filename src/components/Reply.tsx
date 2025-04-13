
import { useState } from 'react';
import { Reply as ReplyType } from '@/data/mockData';
import { ChevronUp, MessageSquare, CornerDownRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

interface ReplyProps {
  reply: ReplyType;
  level?: number;
  isOriginalPoster?: boolean;
}

const Reply = ({ reply, level = 0, isOriginalPoster = false }: ReplyProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  
  // Maximum nesting level to prevent excessive indentation
  const maxLevel = 3;
  const currentLevel = Math.min(level, maxLevel);
  
  // Refined reactions with fewer emojis
  const reactionEmojis = [
    { emoji: '❤️', count: reply.reactions['❤️'] || 0, id: 'heart' },
    { emoji: '👍', count: reply.reactions['👍'] || 0, id: 'thumbs-up' },
    { emoji: '💡', count: reply.reactions['💡'] || 0, id: 'idea' },
  ];
  
  return (
    <div className={cn(
      "mb-6",
      currentLevel > 0 ? 'pl-4 md:pl-6 ml-2 border-l-2 border-forum-lavender/20 dark:border-forum-lavender/30' : ''
    )}>
      <div className={cn(
        "reply-card shadow-soft transition-all duration-200 hover:shadow-hover",
        isOriginalPoster ? "bg-[#f9f9ff] dark:bg-forum-lavender/10" : ""
      )}>
        <div className="flex items-start space-x-3">
          <img
            src={reply.author.avatar}
            alt={reply.author.name}
            className="w-8 h-8 rounded-full border border-border/40 dark:border-border/30 object-cover"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#1d1d1f] dark:text-foreground">{reply.author.name}</span>
              
              {isOriginalPoster && (
                <span className="px-1.5 py-0.5 text-xs font-medium bg-forum-lavender/10 text-forum-lavender rounded-md dark:bg-forum-lavender/20">
                  OP
                </span>
              )}
              
              <div className="flex items-center text-xs text-[#8e8e93] dark:text-muted-foreground">
                <span className="mx-1">·</span>
                <span>{formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}</span>
              </div>
              
              {reply.parentId && (
                <div className="flex items-center text-xs text-[#8e8e93] dark:text-muted-foreground">
                  <span className="mx-1">·</span>
                  <CornerDownRight className="w-3 h-3 mr-1" />
                  <span>Replied to <span className="text-forum-lavender dark:text-forum-lavender">{reply.parentId}</span></span>
                </div>
              )}
            </div>
            
            <div className="mt-3 text-sm text-[#1d1d1f] dark:text-foreground/90 leading-relaxed">
              {reply.content}
            </div>
            
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="upvote-button bg-transparent hover:bg-forum-lavender/5 px-2 py-1 rounded-md transition-colors">
                <ChevronUp className="w-3.5 h-3.5 mr-1" />
                <span>{reply.upvotes}</span>
              </button>
              
              <button 
                className="flex items-center text-xs text-[#8e8e93] hover:text-forum-lavender transition-colors duration-200 hover:underline underline-offset-2 dark:text-muted-foreground dark:hover:text-forum-lavender px-2 py-1 rounded-md hover:bg-forum-lavender/5"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                <span>Reply</span>
              </button>
              
              <div className="flex flex-wrap gap-2 ml-auto">
                {reactionEmojis.map((reaction) => (
                  <button 
                    key={reaction.id}
                    className="emoji-reaction bg-[#f1f1f1] dark:border dark:border-border/30"
                  >
                    <span>{reaction.emoji}</span>
                    {reaction.count > 0 && (
                      <span className="ml-1 text-xs text-[#8e8e93] dark:text-muted-foreground">{reaction.count}</span>
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
