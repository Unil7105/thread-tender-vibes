
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import CategoriesGrid from '@/components/CategoriesGrid';
import ThreadsList from '@/components/ThreadsList';
import FloatingActionButton from '@/components/FloatingActionButton';
import SectionHeader from '@/components/SectionHeader';
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
          <SectionHeader 
            title="Categories" 
            viewAllHref="/view-all/categories" 
          />
          <CategoriesGrid />
        </section>
        
        <section className="w-full lg:w-8/12">
          <SectionHeader 
            title="Recent Threads" 
            viewAllHref="/view-all/threads" 
          />
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
