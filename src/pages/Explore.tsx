
import Layout from '@/components/Layout';
import ThreadsList from '@/components/ThreadsList';
import { threads } from '@/data/mockData';
import { Compass } from 'lucide-react';

const Explore = () => {
  return (
    <Layout>
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-4">
          <Compass className="w-8 h-8 text-forum-lavender" />
          <h1 className="text-3xl md:text-4xl font-bold">Explore</h1>
        </div>
        <p className="text-muted-foreground">Discover popular discussions across all categories</p>
      </div>
      
      <div className="mb-8 flex flex-wrap gap-2">
        <button className="thread-tag bg-forum-lavender text-white">All</button>
        <button className="thread-tag bg-forum-lavender/10 text-forum-lavender dark:bg-forum-lavender/20">Technology</button>
        <button className="thread-tag bg-forum-lavender/10 text-forum-lavender dark:bg-forum-lavender/20">Arts & Creativity</button>
        <button className="thread-tag bg-forum-lavender/10 text-forum-lavender dark:bg-forum-lavender/20">Books & Literature</button>
        <button className="thread-tag bg-forum-lavender/10 text-forum-lavender dark:bg-forum-lavender/20">Health & Wellness</button>
        <button className="thread-tag bg-forum-lavender/10 text-forum-lavender dark:bg-forum-lavender/20">Food & Cooking</button>
        <button className="thread-tag bg-forum-lavender/10 text-forum-lavender dark:bg-forum-lavender/20">Science</button>
      </div>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Popular Threads</h2>
        <ThreadsList threads={threads} />
      </section>
    </Layout>
  );
};

export default Explore;
