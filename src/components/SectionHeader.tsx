
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  viewAllHref,
  viewAllLabel = "View all",
  className,
}: SectionHeaderProps) => {
  return (
    <div 
      className={cn(
        "flex justify-between items-center pb-6", 
        className
      )}
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-poppins">
        {title}
      </h2>
      
      {viewAllHref && (
        <Link
          to={viewAllHref}
          className="flex items-center gap-x-2 text-indigo-600 hover:text-indigo-800 dark:text-forum-lavender dark:hover:text-forum-lavender/80 font-medium transition-all duration-150 hover:underline px-3 py-1.5 rounded-full hover:bg-indigo-50 dark:hover:bg-forum-lavender/10"
        >
          <span>{viewAllLabel}</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
