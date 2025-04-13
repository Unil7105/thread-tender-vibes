
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
      <div className="mb-8 rounded-2xl overflow-hidden bg-[#f1effe]">
        <div className="p-6 md:p-8 relative">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-forum-lavender/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-forum-mint/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="bg-[#9b87f5] p-3 rounded-xl text-white shadow-md w-fit">
              <Compass className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5]">
                Explore Discussions
              </h1>
              <p className="text-muted-foreground text-lg mt-2 max-w-2xl">
                Discover trending topics and join fascinating conversations across all categories
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative mb-8">
        <div className="flex items-center mb-4">
          {showLeftArrow && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-0 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md"
              onClick={() => handleScroll('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}
          
          <div 
            ref={scrollContainerRef}
            className="flex items-center overflow-x-auto scroll-smooth py-2 px-10 max-w-full scrollbar-hide bg-white/80 dark:bg-gray-900/30 rounded-full shadow-sm"
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
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all whitespace-nowrap ${
                    activeFilter === category.id 
                      ? "bg-[#9b87f5] text-white shadow-md" 
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
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
              className="absolute right-0 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-md"
              onClick={() => handleScroll('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold relative">
            Popular Threads
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#9b87f5] rounded-full"></span>
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
