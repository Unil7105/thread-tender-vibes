
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import CategoriesGrid from '@/components/CategoriesGrid';
import ThreadsList from '@/components/ThreadsList';
import FloatingActionButton from '@/components/FloatingActionButton';
import { threads } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate loading delay for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleNewThread = () => {
    // In a real app, this would open a modal for creating a new thread
    setShowNewThreadModal(true);
    
    // For demonstration, just show a toast
    toast({
      title: "New thread feature",
      description: "This feature would open a form to create a new thread!",
      duration: 3000,
    });
  };
  
  return (
    <Layout pageTitle="Welcome to TextForum">
      <div className="mb-12 mt-4">
        <p className="text-muted-foreground">A thoughtfully designed space for meaningful conversations</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 mt-16">
        <section className="w-full lg:w-4/12 mb-8 lg:mb-0">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-medium">Categories</h2>
            <a href="#" className="text-forum-lavender hover:text-forum-lavender/80 text-sm transition-colors duration-200">View all</a>
          </div>
          <CategoriesGrid />
        </section>
        
        <section className="w-full lg:w-8/12">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-medium">Recent Threads</h2>
            <a href="#" className="text-forum-lavender hover:text-forum-lavender/80 text-sm transition-colors duration-200">View all</a>
          </div>
          <ThreadsList threads={threads} isLoading={isLoading} />
        </section>
      </div>
      
      <FloatingActionButton 
        label="New Thread" 
        onClick={handleNewThread} 
      />
    </Layout>
  );
};

export default Index;
