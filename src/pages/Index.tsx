
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
      <div className="mb-8 mt-4">
        <p className="text-muted-foreground">A cozy digital space for deep conversations</p>
      </div>
      
      <section className="mb-8">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-xl font-bold">Categories</h2>
          <a href="#" className="text-forum-lavender hover:underline text-sm">View all</a>
        </div>
        <CategoriesGrid />
      </section>
      
      <section>
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="text-xl font-bold">Recent Threads</h2>
          <a href="#" className="text-forum-lavender hover:underline text-sm">View all</a>
        </div>
        <ThreadsList threads={threads} isLoading={isLoading} />
      </section>
      
      <FloatingActionButton 
        label="New Thread" 
        onClick={handleNewThread} 
      />
    </Layout>
  );
};

export default Index;
