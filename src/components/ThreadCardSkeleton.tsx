
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const ThreadCardSkeleton = () => {
  return (
    <Card className="bg-[#F9FAFB] shadow-sm border border-[#E5E7EB] p-5 transition-all duration-300 min-h-[180px]
      dark:bg-[#1F2937] dark:bg-opacity-90 dark:shadow-lg dark:border dark:border-[#374151]">
      <div className="flex items-start gap-4">
        <Skeleton className="w-10 h-10 rounded-full flex-shrink-0 bg-gray-200 dark:bg-[#374151]" />
        <div className="min-w-0 flex-1 space-y-2.5">
          <Skeleton className="h-6 w-[85%] bg-gray-200 dark:bg-[#374151]" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-24 bg-gray-200 dark:bg-[#374151]" />
            <Skeleton className="h-4 w-32 bg-gray-200 dark:bg-[#374151]" />
          </div>
          <Skeleton className="h-4 w-full bg-gray-200 dark:bg-[#374151]" />
          <Skeleton className="h-4 w-[90%] bg-gray-200 dark:bg-[#374151]" />
          
          <div className="flex gap-1.5 pt-1">
            <Skeleton className="h-5 w-16 rounded-full bg-gray-200 dark:bg-[#374151]" />
            <Skeleton className="h-5 w-20 rounded-full bg-gray-200 dark:bg-[#374151]" />
            <Skeleton className="h-5 w-8 rounded-full bg-gray-200 dark:bg-[#374151]" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center mt-5 pt-3 border-t border-gray-200 dark:border-[#374151]/30">
        <div className="flex items-center gap-3">
          <Skeleton className="h-5 w-16 bg-gray-200 dark:bg-[#374151]" />
          <Skeleton className="h-5 w-20 bg-gray-200 dark:bg-[#374151]" />
        </div>
        <div className="ml-auto">
          <Skeleton className="h-4 w-16 bg-gray-200 dark:bg-[#374151]" />
        </div>
      </div>
    </Card>
  );
};

export default ThreadCardSkeleton;
