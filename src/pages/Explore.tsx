
import Layout from '@/components/Layout';
import ThreadsList from '@/components/ThreadsList';
import { threads, categories } from '@/data/mockData';
import { Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Explore = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const categoryItems = [
    { id: "all", label: "All" },
    ...categories.map(category => ({ id: category.id, label: category.name }))
  ];
  
  const filteredThreads = activeFilter === "all" 
    ? threads 
    : threads.filter(thread => 
        thread.category.id === activeFilter || 
        thread.tags.includes(activeFilter)
      );
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth / 2;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const updateArrowVisibility = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 20);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 20
      );
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateArrowVisibility);
      // Initial check
      updateArrowVisibility();
      
      // Center active category on mount and when it changes
      const activeElement = scrollContainer.querySelector(`[data-value="${activeFilter}"]`);
      if (activeElement) {
        setTimeout(() => {
          const containerWidth = scrollContainer.clientWidth;
          const elementOffset = (activeElement as HTMLElement).offsetLeft;
          const elementWidth = (activeElement as HTMLElement).clientWidth;
          const centerPosition = elementOffset - (containerWidth / 2) + (elementWidth / 2);
          
          scrollContainer.scrollTo({
            left: centerPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', updateArrowVisibility);
      }
    };
  }, [activeFilter]);
  
  return (
    <Layout>
      <div className="relative mb-12 overflow-hidden bg-gradient-to-br from-forum-lavender/10 to-purple-500/10 rounded-2xl p-8">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-forum-lavender/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-forum-mint/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
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
      
      <div className="relative mb-10">
        <div className="flex items-center mb-4">
          {showLeftArrow && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-0 z-10 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full shadow-md"
              onClick={() => handleScroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          
          <div 
            ref={scrollContainerRef}
            className="flex items-center overflow-x-auto scroll-smooth py-4 px-10 max-w-full scrollbar-hide bg-gray-100 dark:bg-forum-navy/70 rounded-full shadow-inner mx-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <ToggleGroup 
              type="single" 
              value={activeFilter} 
              onValueChange={(value) => value && setActiveFilter(value)}
              className="inline-flex flex-nowrap min-w-max gap-2 px-2 mx-auto"
            >
              {categoryItems.map((category) => (
                <ToggleGroupItem 
                  key={category.id} 
                  value={category.id}
                  data-value={category.id}
                  className={`rounded-full px-8 py-3 text-sm font-medium transition-all mx-1 whitespace-nowrap ${
                    activeFilter === category.id 
                      ? "bg-forum-lavender text-white shadow-md" 
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-forum-lavender"
                  }`}
                >
                  {category.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          
          {showRightArrow && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 z-10 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full shadow-md"
              onClick={() => handleScroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
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
