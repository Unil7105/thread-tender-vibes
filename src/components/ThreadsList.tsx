
import { Thread } from '@/data/mockData';
import ThreadCard from './ThreadCard';
import ThreadCardSkeleton from './ThreadCardSkeleton';

interface ThreadsListProps {
  threads: Thread[];
  categoryId?: string;
  isLoading?: boolean;
}

const ThreadsList = ({ threads, categoryId, isLoading = false }: ThreadsListProps) => {
  // Filter threads by category if categoryId is provided
  const filteredThreads = categoryId
    ? threads.filter((thread) => thread.category.id === categoryId)
    : threads;

  // Show skeletons when loading
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <ThreadCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {filteredThreads.length === 0 ? (
        <div className="text-center py-10 bg-[#F9FAFB] shadow-sm rounded-xl border border-[#E5E7EB] 
          dark:bg-[#1F2937] dark:bg-opacity-90 dark:shadow-lg dark:rounded-xl dark:border dark:border-[#374151] p-8
          transition-all duration-300 hover:shadow-md dark:hover:border-[#4B5563]">
          <div className="text-6xl mb-4">📭</div>
          <p className="text-lg text-gray-700 dark:text-white mb-2">No threads found</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Be the first to start a conversation here!</p>
        </div>
      ) : (
        filteredThreads.map((thread, index) => (
          <div key={thread.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <ThreadCard thread={thread} />
          </div>
        ))
      )}
    </div>
  );
};

export default ThreadsList;
