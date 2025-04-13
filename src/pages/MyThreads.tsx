
import Layout from '@/components/Layout';
import ThreadsList from '@/components/ThreadsList';
import { threads } from '@/data/mockData';
import { MessageSquare, Bookmark } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MyThreads = () => {
  // For demo purposes, showing all threads as "my threads"
  // In a real app, you would filter threads created by the current user
  const myThreads = threads;
  
  return (
    <Layout>
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-4">
          <MessageSquare className="w-8 h-8 text-forum-lavender" />
          <h1 className="text-3xl md:text-4xl font-bold">My Threads</h1>
        </div>
        <p className="text-muted-foreground">Keep track of your discussions and saved threads</p>
      </div>
      
      <Tabs defaultValue="created" className="mb-8">
        <TabsList>
          <TabsTrigger value="created" className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            Created
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center">
            <Bookmark className="w-4 h-4 mr-2" />
            Saved
          </TabsTrigger>
        </TabsList>
        <TabsContent value="created" className="pt-6">
          <ThreadsList threads={myThreads} />
        </TabsContent>
        <TabsContent value="saved" className="pt-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground">You haven't saved any threads yet.</p>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default MyThreads;
