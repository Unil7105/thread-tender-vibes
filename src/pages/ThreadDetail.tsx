
import { useParams } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';
import Reply from '@/components/Reply';
import FloatingActionButton from '@/components/FloatingActionButton';
import { threads } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ThreadDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const thread = threads.find((t) => t.id === id);
  
  if (isLoading) {
    return (
      <Layout>
        <div className="mb-6 px-0 sm:px-0 max-w-full">
          <div className="mb-4 flex flex-wrap gap-2">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
          </div>
          
          <div className="flex items-center mb-6">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="ml-3 space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[90%]" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        </div>
      </Layout>
    );
  }
  
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
    <Layout pageTitle={thread.title}>
      <div className="mb-6 px-0 sm:px-0 max-w-full">
        <div className="mb-2 flex flex-wrap items-center gap-2">
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
        
        <div className="flex items-center mb-6">
          <img
            src={thread.author.avatar}
            alt={thread.author.name}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-forum-lavender/30 object-cover shadow-md"
          />
          <div className="ml-3">
            <div className="font-medium text-sm md:text-base">{thread.author.name}</div>
            <div className="text-xs md:text-sm text-[#8e8e93] dark:text-muted-foreground">
              {formatDistanceToNow(new Date(thread.createdAt), { addSuffix: true })}
            </div>
          </div>
        </div>
        
        <div className="prose dark:prose-invert max-w-none text-sm md:text-base break-words">
          <p>{thread.content}</p>
        </div>
        
        <div className="mt-6 flex items-center space-x-4">
          <button className="upvote-button bg-transparent hover:bg-forum-lavender/5 px-2 py-1 rounded-md transition-colors">
            <span className="text-lg">▲</span>
            <span>{thread.upvotes}</span>
          </button>
          
          <div className="flex items-center text-xs md:text-sm text-[#8e8e93] dark:text-muted-foreground">
            <MessageSquare className="w-4 h-4 mr-1" />
            <span>{thread.replyCount} replies</span>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-6 px-0 sm:px-0">
        <h2 className="text-lg md:text-xl font-bold mb-6">Replies</h2>
        
        {thread.replies && thread.replies.length > 0 ? (
          <div className="space-y-4">
            {thread.replies.map((reply) => (
              <Reply 
                key={reply.id} 
                reply={reply} 
                isOriginalPoster={reply.author.id === thread.author.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-[#8e8e93] dark:text-muted-foreground">No replies yet. Be the first to reply!</p>
          </div>
        )}
      </div>
      
      <FloatingActionButton 
        label="Reply to Thread" 
        icon={<MessageSquare className="w-5 h-5 md:w-6 md:h-6" />}
        onClick={() => alert("Reply to this thread")} 
      />
    </Layout>
  );
};

export default ThreadDetail;
