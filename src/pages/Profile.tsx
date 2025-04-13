
import Layout from '@/components/Layout';
import { User, Mail, Calendar, Edit, MessageSquare, Heart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThreadsList from '@/components/ThreadsList';
import { threads } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const Profile = () => {
  // Mock profile data
  const profile = {
    name: 'Alexandra Chen',
    avatar: 'https://i.pravatar.cc/300?img=47',
    email: 'alexandra@example.com',
    joinDate: 'April 2023',
    bio: 'Tech enthusiast and avid reader. I love discussing new technologies and finding great book recommendations!',
    stats: {
      threads: 24,
      replies: 153,
      likes: 432
    }
  };
  
  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-forum-lavender object-cover"
          />
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 dark:text-[#F9FAFB]">{profile.name}</h1>
            
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-4 text-sm text-muted-foreground dark:text-[#94A3B8]">
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-1" />
                {profile.email}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Calendar className="w-4 h-4 mr-1" />
                Joined {profile.joinDate}
              </div>
            </div>
            
            <p className="max-w-2xl dark:text-[#CBD5E1]">{profile.bio}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
              <div className="text-center">
                <div className="text-xl font-bold text-forum-lavender">{profile.stats.threads}</div>
                <div className="text-xs text-muted-foreground dark:text-[#94A3B8]">Threads</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-forum-lavender">{profile.stats.replies}</div>
                <div className="text-xs text-muted-foreground dark:text-[#94A3B8]">Replies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-forum-lavender">{profile.stats.likes}</div>
                <div className="text-xs text-muted-foreground dark:text-[#94A3B8]">Likes</div>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="md:self-start dark:border-[#334155] dark:text-[#CBD5E1] dark:hover:bg-[#334155]/50">
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="threads" className="mb-8">
        <TabsList className="dark:bg-[#1E293B] dark:border dark:border-[#334155]">
          <TabsTrigger value="threads" className="flex items-center dark:data-[state=active]:bg-forum-lavender dark:data-[state=active]:text-white">
            <MessageSquare className="w-4 h-4 mr-2" />
            Threads
          </TabsTrigger>
          <TabsTrigger value="likes" className="flex items-center dark:data-[state=active]:bg-forum-lavender dark:data-[state=active]:text-white">
            <Heart className="w-4 h-4 mr-2" />
            Likes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="threads" className="pt-6">
          <ThreadsList threads={threads.slice(0, 2)} />
        </TabsContent>
        <TabsContent value="likes" className="pt-6">
          <ThreadsList threads={threads.slice(1, 3)} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Profile;
