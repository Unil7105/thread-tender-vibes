
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
  gradient = 'bg-white dark:bg-card',
}: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`} className="block transition-transform duration-200 hover:-translate-y-1">
      <div className={`category-card ${gradient}`}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 p-3 bg-secondary/80 rounded-md text-2xl">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg hover:text-forum-lavender transition-colors duration-200 dark:text-foreground">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm mt-2 line-clamp-2 dark:text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-5 text-sm text-muted-foreground dark:text-muted-foreground">
          <MessageSquare className="w-4 h-4 mr-1.5 opacity-70" />
          <span>{threadCount} threads</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
