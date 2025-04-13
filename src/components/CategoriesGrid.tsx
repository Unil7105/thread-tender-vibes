
import CategoryCard from './CategoryCard';

// Mock data for categories
const categories = [
  {
    id: '1',
    name: 'Technology',
    description: 'Discuss the latest tech trends, gadgets, and software developments',
    icon: '💻',
    threadCount: 243,
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900/80',
  },
  {
    id: '2',
    name: 'Arts & Creativity',
    description: 'Share your creative works, get feedback, and discuss artistic techniques',
    icon: '🎨',
    threadCount: 187,
    gradient: 'bg-gradient-to-br from-pink-50 to-purple-100 dark:from-slate-800 dark:to-purple-950/30',
  },
  {
    id: '3',
    name: 'Books & Literature',
    description: 'Book recommendations, literary discussions, and author spotlights',
    icon: '📚',
    threadCount: 156,
    gradient: 'bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-slate-800 dark:to-amber-950/30',
  },
  {
    id: '4',
    name: 'Health & Wellness',
    description: 'Tips for staying healthy, mental well-being, and fitness discussions',
    icon: '🧘',
    threadCount: 132,
    gradient: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-800 dark:to-emerald-950/30',
  },
  {
    id: '5',
    name: 'Food & Cooking',
    description: 'Recipe sharing, cooking techniques, and culinary adventures',
    icon: '🍳',
    threadCount: 219,
    gradient: 'bg-gradient-to-br from-orange-50 to-red-100 dark:from-slate-800 dark:to-red-950/30',
  },
  {
    id: '6',
    name: 'Science',
    description: 'Scientific discoveries, research discussions, and learning resources',
    icon: '🔬',
    threadCount: 175,
    gradient: 'bg-gradient-to-br from-cyan-50 to-sky-100 dark:from-slate-800 dark:to-sky-950/30',
  },
];

const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
