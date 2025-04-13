
import { Thread } from '@/data/mockData';
import ThreadCard from './ThreadCard';

interface ThreadsListProps {
  threads: Thread[];
  categoryId?: string;
}

const ThreadsList = ({ threads, categoryId }: ThreadsListProps) => {
  // Filter threads by category if categoryId is provided
  const filteredThreads = categoryId
    ? threads.filter((thread) => thread.category.id === categoryId)
    : threads;

  return (
    <div className="space-y-6">
      {filteredThreads.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">No threads found</p>
        </div>
      ) : (
        filteredThreads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))
      )}
    </div>
  );
};

export default ThreadsList;
