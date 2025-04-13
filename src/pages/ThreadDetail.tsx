
import { useParams } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';
import Reply from '@/components/Reply';
import FloatingActionButton from '@/components/FloatingActionButton';
import { threads } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';

const ThreadDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const thread = threads.find((t) => t.id === id);
  
  if (!thread) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold">Thread not found</h1>
          <p className="mt-4 text-muted-foreground">
            The thread you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="mb-8">
        <div className="mb-2 flex items-center space-x-2">
          <span className="thread-tag bg-forum-lavender text-white">
            {thread.category.name}
          </span>
          {thread.tags.map((tag) => (
            <span 
              key={tag} 
              className="thread-tag bg-forum-lavender/10 text-forum-lavender dark:bg-forum-lavender/20"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{thread.title}</h1>
        
        <div className="flex items-center mb-6">
          <img
            src={thread.author.avatar}
            alt={thread.author.name}
            className="w-10 h-10 rounded-full border-2 border-forum-lavender/30"
          />
          <div className="ml-3">
            <div className="font-medium">{thread.author.name}</div>
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}
            </div>
          </div>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>{thread.content}</p>
        </div>
        
        <div className="mt-6 flex items-center space-x-4">
          <button className="upvote-button">
            <span className="text-lg">▲</span>
            <span>{thread.upvotes}</span>
          </button>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{thread.replyCount} replies</span>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-8">
        <h2 className="text-xl font-bold mb-6">Replies</h2>
        
        {thread.replies && thread.replies.length > 0 ? (
          <div className="space-y-4">
            {thread.replies.map((reply) => (
              <Reply key={reply.id} reply={reply} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No replies yet. Be the first to reply!</p>
          </div>
        )}
      </div>
      
      <FloatingActionButton 
        label="Reply to Thread" 
        icon={<MessageSquare className="w-6 h-6" />}
        onClick={() => alert("Reply to this thread")} 
      />
    </Layout>
  );
};

export default ThreadDetail;
