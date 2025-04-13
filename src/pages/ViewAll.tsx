
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ThreadsList from '@/components/ThreadsList';
import { threads, categories } from '@/data/mockData';
import { Filter, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const ViewAll = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('newest');
  
  // Determine what we're viewing based on the type parameter
  const getPageTitle = () => {
    switch(type) {
      case 'categories':
        return 'All Categories';
      case 'threads':
        return 'All Threads';
      default:
        return 'All Content';
    }
  };
  
  const pageTitle = getPageTitle();
  
  // Get the appropriate data based on the type
  const getThreadsToDisplay = () => {
    // For now, showing all threads regardless of type
    // In a real app, you'd filter based on the type parameter
    let filteredThreads = [...threads];
    
    // Apply sorting
    if (sortBy === 'newest') {
      filteredThreads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === 'popular') {
      filteredThreads.sort((a, b) => b.upvotes - a.upvotes);
    } else if (sortBy === 'discussed') {
      filteredThreads.sort((a, b) => b.replyCount - a.replyCount);
    }
    
    return filteredThreads;
  };
  
  return (
    <Layout pageTitle={pageTitle}>
      <div className="flex flex-col mb-12">
        <Button 
          variant="ghost" 
          className="w-fit flex items-center gap-2 mb-4 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{pageTitle}</h1>
            <p className="text-gray-600 dark:text-gray-300">Browse and discover all available content</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="font-normal px-3 py-1.5 border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent">
              <Filter className="h-3.5 w-3.5 mr-1.5 text-indigo-500" />
              <span>{getThreadsToDisplay().length} results</span>
            </Badge>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px] bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="discussed">Most Discussed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900/50 shadow-sm rounded-xl p-6 border border-gray-100 dark:border-gray-800">
          <ThreadsList threads={getThreadsToDisplay()} />
          
          {getThreadsToDisplay().length > 10 && (
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-auto">
                Load More
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ViewAll;
