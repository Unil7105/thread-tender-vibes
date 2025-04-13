
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
  const maxLevel = 3;
  const currentLevel = Math.min(level, maxLevel);
  
  const borderColor = 'border-forum-lavender/30 dark:border-forum-lavender/40';
  
  // Refined reactions with fewer emojis
  const reactionEmojis = [
    { emoji: '❤️', count: reply.reactions['❤️'] || 0, id: 'heart' },
    { emoji: '👍', count: reply.reactions['👍'] || 0, id: 'thumbs-up' },
    { emoji: '💡', count: reply.reactions['💡'] || 0, id: 'idea' },
  ];
  
  return (
    <div className={`mb-5 ${currentLevel > 0 ? 'pl-4 md:pl-5 border-l ' + borderColor : ''}`}>
      <div className="reply-card">
        <div className="flex items-start space-x-3">
          <img
            src={reply.author.avatar}
            alt={reply.author.name}
            className="w-8 h-8 rounded-full border border-border/40 dark:border-border/30 object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-medium dark:text-foreground">{reply.author.name}</span>
              <span className="ml-2 text-xs text-muted-foreground dark:text-muted-foreground">
                {formatDistanceToNow(new Date(reply.createdAt), { addSuffix: true })}
              </span>
            </div>
            <div className="mt-3 text-sm dark:text-foreground/90 leading-relaxed">
              {reply.content}
            </div>
            
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button className="upvote-button">
                <ChevronUp className="w-3.5 h-3.5" />
                <span>{reply.upvotes}</span>
              </button>
              
              <button 
                className="flex items-center text-xs text-muted-foreground hover:text-forum-lavender transition-colors duration-200 dark:text-muted-foreground dark:hover:text-forum-lavender"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1" />
                <span>Reply</span>
              </button>
              
              <div className="flex flex-wrap gap-1.5 ml-auto">
                {reactionEmojis.map((reaction) => (
                  <button 
                    key={reaction.id}
                    className="emoji-reaction dark:border dark:border-border/30"
                  >
                    <span>{reaction.emoji}</span>
                    {reaction.count > 0 && (
                      <span className="ml-1 text-xs dark:text-muted-foreground">{reaction.count}</span>
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
            <Reply key={nestedReply.id} reply={nestedReply} level={currentLevel + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reply;
