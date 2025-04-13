
import Layout from '@/components/Layout';
import ThreadsList from '@/components/ThreadsList';
import { threads } from '@/data/mockData';
import { Compass } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from 'react';

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "technology", label: "Technology" },
    { id: "arts", label: "Arts & Creativity" },
    { id: "books", label: "Books & Literature" },
    { id: "health", label: "Health & Wellness" },
    { id: "food", label: "Food & Cooking" },
    { id: "science", label: "Science" },
  ];
  
  const filteredThreads = activeFilter === "all" 
    ? threads 
    : threads.filter(thread => 
        thread.category.id === activeFilter || 
        thread.tags.includes(activeFilter)
      );
  
  return (
    <Layout>
      <div className="relative mb-12 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-forum-lavender/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-forum-mint/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center space-x-4 mb-5">
            <div className="bg-gradient-to-br from-forum-lavender to-purple-500 p-3 rounded-xl text-white shadow-md">
              <Compass className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-forum-lavender to-purple-600 bg-clip-text text-transparent">
              Explore Discussions
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg max-w-2xl mb-8">
            Discover trending topics and join fascinating conversations across all categories
          </p>
        </div>
      </div>
      
      <div className="mb-10">
        <ToggleGroup type="single" value={activeFilter} onValueChange={(value) => value && setActiveFilter(value)}>
          {categories.map((category) => (
            <ToggleGroupItem 
              key={category.id} 
              value={category.id}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === category.id 
                  ? "bg-forum-lavender text-white shadow-md" 
                  : "bg-forum-lavender/10 text-forum-lavender hover:bg-forum-lavender/20 dark:bg-forum-lavender/20"
              }`}
            >
              {category.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold relative">
            Popular Threads
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-forum-lavender rounded-full"></span>
          </h2>
          <div className="text-sm text-muted-foreground">
            {filteredThreads.length} discussions
          </div>
        </div>
        <ThreadsList threads={filteredThreads} />
      </section>
    </Layout>
  );
};

export default Explore;
