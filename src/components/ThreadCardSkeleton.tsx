
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ThreadCardSkeleton = () => {
  return (
    <Card className="thread-card bg-[#FAFAFA] dark:bg-gradient-to-br dark:from-[#1A1F2C]/80 dark:to-[#1A1F2C]/60 overflow-hidden">
      <div className="flex items-start gap-3">
        <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
        <div className="min-w-0 flex-1 space-y-2">
          <Skeleton className="h-6 w-[85%]" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
        </div>
      </div>
      
      <div className="flex items-center mt-4 pt-3 border-t dark:border-white/5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
        </div>
        <div className="ml-auto flex gap-1.5">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-14" />
        </div>
      </div>
    </Card>
  );
};

export default ThreadCardSkeleton;
