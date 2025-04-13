
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
  gradient = 'bg-gradient-to-br from-white to-secondary/50 dark:from-card dark:to-background/80',
}: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`} className="block group">
      <div className={`category-card ${gradient}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0 p-3 bg-accent rounded-xl text-2xl">
            {icon}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-bold text-lg group-hover:text-forum-lavender transition-colors">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
        <div className="flex items-center mt-4 text-sm text-muted-foreground">
          <MessageSquare className="w-4 h-4 mr-1" />
          <span>{threadCount} threads</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
