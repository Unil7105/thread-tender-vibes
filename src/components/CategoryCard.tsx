
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  threadCount: number;
  gradient?: string;
}

const CategoryCard = ({
  id,
  name,
  description,
  icon,
  threadCount,
  gradient = 'bg-gradient-to-br from-white to-secondary/50 dark:from-[#2B2D42] dark:to-[#3A0CA3]/40',
}: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`} className="block group">
      <div className={`category-card group-hover:scale-[1.02] ${gradient}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0 p-3 bg-accent rounded-xl text-2xl shadow-sm group-hover:shadow-md transition-all dark:bg-gradient-to-br dark:from-forum-magenta/30 dark:to-forum-lavender/30 dark:backdrop-blur-sm dark:border dark:border-white/5">
            {icon}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-bold text-lg group-hover:text-forum-lavender transition-colors dark:text-white dark:group-hover:text-forum-cyan dark:shadow-text-shadow">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm text-muted-foreground dark:text-gray-400">
          <MessageSquare className="w-4 h-4 mr-1 dark:text-forum-lavender" />
          <span>{threadCount} threads</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
