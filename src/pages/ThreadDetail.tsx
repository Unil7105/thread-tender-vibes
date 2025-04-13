
import { useParams } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';
import Reply from '@/components/Reply';
import FloatingActionButton from '@/components/FloatingActionButton';
import { threads } from '@/data/mockData';
import { formatDistanceToNow } from 'date-fns';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Tag color mapping based on tag content
const getTagColors = (tag: string) => {
  const tagLower = tag.toLowerCase();
  
  if (tagLower.includes('ai')) {
    return 'bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200';
  } else if (tagLower.includes('career')) {
    return 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200';
  } else if (tagLower.includes('future')) {
    return 'bg-amber-100 text-amber-700 hover:bg-amber-200 border-amber-200';
  } else if (tagLower.includes('programming') || tagLower.includes('technology') || tagLower.includes('tech')) {
    return 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200';
  } else if (tagLower.includes('health') || tagLower.includes('wellness')) {
    return 'bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200';
  } else if (tagLower.includes('book') || tagLower.includes('reading')) {
    return 'bg-teal-100 text-teal-700 hover:bg-teal-200 border-teal-200';
  } else if (tagLower.includes('art') || tagLower.includes('creative')) {
    return 'bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200';
  }
  
  // Default style
  return 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200';
};

// Category color mapping
const getCategoryColors = (categoryName: string) => {
  const nameLower = categoryName.toLowerCase();
  
  if (nameLower.includes('technology')) {
    return 'bg-indigo-100 text-indigo-800 border-indigo-300';
  } else if (nameLower.includes('health')) {
    return 'bg-purple-100 text-purple-800 border-purple-300';
  } else if (nameLower.includes('books') || nameLower.includes('literature')) {
    return 'bg-teal-100 text-teal-800 border-teal-300';
  } else if (nameLower.includes('art') || nameLower.includes('creativity')) {
    return 'bg-pink-100 text-pink-800 border-pink-300';
  } else if (nameLower.includes('food') || nameLower.includes('cooking')) {
    return 'bg-orange-100 text-orange-800 border-orange-300';
  } else if (nameLower.includes('science')) {
    return 'bg-blue-100 text-blue-800 border-blue-300';
  } else if (nameLower.includes('travel')) {
    return 'bg-cyan-100 text-cyan-800 border-cyan-300';
  } else if (nameLower.includes('music')) {
    return 'bg-rose-100 text-rose-800 border-rose-300';
  } else if (nameLower.includes('gaming')) {
    return 'bg-violet-100 text-violet-800 border-violet-300';
  }
  
  // Default style
  return 'bg-slate-100 text-slate-800 border-slate-300';
};

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
          <span className={cn(
            "inline-flex items-center px-3 py-1 rounded-full font-medium text-sm font-poppins", 
            "border transition-all duration-200 shadow-sm", 
            "transform hover:scale-105 hover:shadow-md",
            getCategoryColors(thread.category.name)
          )}>
            {thread.category.name}
          </span>
          
          {thread.tags.map((tag) => (
            <span 
              key={tag} 
              className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium font-poppins",
                "border transition-all duration-200 shadow-sm",
                "transform hover:scale-105 hover:shadow-md",
                getTagColors(tag)
              )}
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
