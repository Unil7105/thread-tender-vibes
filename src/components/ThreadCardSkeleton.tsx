
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ThreadCardSkeleton = () => {
  return (
    <Card className="bg-[#1F2937] bg-opacity-90 shadow-lg border border-[#374151] p-5 
      transition-all duration-300 dark:shadow-glass-highlight">
      <div className="flex items-start gap-4">
        <Skeleton className="w-10 h-10 rounded-full flex-shrink-0 bg-[#374151]" />
        <div className="min-w-0 flex-1 space-y-2.5">
          <Skeleton className="h-6 w-[85%] bg-[#374151]" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24 bg-[#374151]" />
            <Skeleton className="h-4 w-32 bg-[#374151]" />
          </div>
          <Skeleton className="h-4 w-full bg-[#374151]" />
          <Skeleton className="h-4 w-[90%] bg-[#374151]" />
          
          <div className="flex gap-1.5 pt-1">
            <Skeleton className="h-5 w-16 rounded-full bg-[#374151]" />
            <Skeleton className="h-5 w-20 rounded-full bg-[#374151]" />
            <Skeleton className="h-5 w-8 rounded-full bg-[#374151]" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center mt-5 pt-3 border-t border-[#374151]/30">
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-16 bg-[#374151]" />
          <Skeleton className="h-5 w-20 bg-[#374151]" />
        </div>
        <div className="ml-auto">
          <Skeleton className="h-4 w-16 bg-[#374151]" />
        </div>
      </div>
    </Card>
  );
};

export default ThreadCardSkeleton;
