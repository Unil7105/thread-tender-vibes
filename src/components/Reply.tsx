
import { useState } from 'react';
import { Reply as ReplyType } from '@/data/mockData';
import { ChevronUp, MessageSquare } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface ReplyProps {
  reply: ReplyType;
  level?: number;
}

const Reply = ({ reply, level = 0 }: ReplyProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  
  // Maximum nesting level to prevent excessive indentation
  const maxLevel = 4;
  const currentLevel = Math.min(level, maxLevel);
  
  const borderColor = 'border-forum-lavender dark:border-forum-magenta';
  
  // Generate reaction emoji buttons
  const reactionEmojis = [
    { emoji: '❤️', count: reply.reactions['❤️'] || 0, id: 'heart' },
    { emoji: '👍', count: reply.reactions['👍'] || 0, id: 'thumbs-up' },
    { emoji: '🔥', count: reply.reactions['🔥'] || 0, id: 'fire' },
    { emoji: '💡', count: reply.reactions['💡'] || 0, id: 'idea' },
    { emoji: '🙌', count: reply.reactions['🙌'] || 0, id: 'praise' },
  ];
  
  return (
    <div className={`mb-4 ${currentLevel > 0 ? 'pl-3 md:pl-6 border-l-2 ' + borderColor : ''}`}>
      <div className="reply-card border-l-forum-lavender dark:border-l-forum-lavender dark:backdrop-blur-md">
        <div className="flex items-start space-x-3">
          <img
            src={reply.author.avatar}
            alt={reply.author.name}
            className="w-8 h-8 rounded-full border-2 border-forum-lavender/30 dark:border-forum-lavender/30 dark:shadow-glass-highlight object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-medium dark:text-[#F9FAFB] dark:shadow-text-shadow">{reply.author.name}</span>
              <span className="ml-2 text-xs text-muted-foreground dark:text-[#94A3B8]">
                {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
              </span>
            </div>
            <div className="mt-2 text-sm dark:text-[#CBD5E1]">
              {reply.content}
            </div>
            
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <button className="upvote-button">
                <ChevronUp className="w-3.5 h-3.5" />
                <span>{reply.upvotes}</span>
              </button>
              
              <button 
                className="flex items-center text-xs text-muted-foreground hover:text-forum-lavender transition-colors dark:text-[#94A3B8] dark:hover:text-forum-lavender"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                <span>Reply</span>
              </button>
              
              <div className="flex flex-wrap gap-1 ml-auto">
                {reactionEmojis.map((reaction) => (
                  <button 
                    key={reaction.id}
                    className="emoji-reaction dark:hover:shadow-glass-highlight dark:border dark:border-[#334155]/30"
                  >
                    <span>{reaction.emoji}</span>
                    {reaction.count > 0 && (
                      <span className="ml-1 text-xs dark:text-[#CBD5E1]">{reaction.count}</span>
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
        <div className="mt-3">
          {reply.replies.map((nestedReply) => (
            <Reply key={nestedReply.id} reply={nestedReply} level={currentLevel + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reply;
