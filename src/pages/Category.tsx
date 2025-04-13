
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ThreadsList from '@/components/ThreadsList';
import FloatingActionButton from '@/components/FloatingActionButton';
import { categories, threads } from '@/data/mockData';

const Category = () => {
  const { id } = useParams<{ id: string }>();
  
  const category = categories.find((cat) => cat.id === id);
  
  if (!category) {
    return (
      <Layout>
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold">Category not found</h1>
          <p className="mt-4 text-muted-foreground">
            The category you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="mb-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-shrink-0 p-4 bg-accent rounded-xl text-3xl">
            {category.icon}
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
            <p className="text-muted-foreground mt-2">{category.description}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-muted-foreground">{category.threadCount} threads</span>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="text-forum-lavender hover:underline">
            Browse by latest
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="text-forum-lavender hover:underline">
            Browse by popular
          </a>
        </div>
      </div>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Threads</h2>
        <ThreadsList threads={threads} categoryId={id} />
      </section>
      
      <FloatingActionButton 
        label="New Thread" 
        onClick={() => alert("Create new thread in this category")} 
      />
    </Layout>
  );
};

export default Category;
