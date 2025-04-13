
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
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-accent/30 object-cover shadow-soft"
          />
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-medium mb-3 dark:text-foreground">{profile.name}</h1>
            
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-5 text-sm text-muted-foreground dark:text-muted-foreground">
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-1.5 opacity-70" />
                {profile.email}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Calendar className="w-4 h-4 mr-1.5 opacity-70" />
                Joined {profile.joinDate}
              </div>
            </div>
            
            <p className="max-w-2xl text-foreground/90 dark:text-foreground/80 leading-relaxed">{profile.bio}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-6">
              <div className="text-center">
                <div className="text-xl font-medium text-forum-lavender">{profile.stats.threads}</div>
                <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">Threads</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-forum-lavender">{profile.stats.replies}</div>
                <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">Replies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-medium text-forum-lavender">{profile.stats.likes}</div>
                <div className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">Likes</div>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="md:self-start dark:border-border/50 dark:text-foreground/80 dark:hover:bg-secondary/30">
            <Edit className="w-4 h-4 mr-2 opacity-70" />
            Edit Profile
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="threads" className="mb-8">
        <TabsList className="dark:bg-secondary/20 dark:border dark:border-border/30">
          <TabsTrigger value="threads" className="flex items-center dark:data-[state=active]:bg-forum-lavender/20 dark:data-[state=active]:text-foreground">
            <MessageSquare className="w-4 h-4 mr-2 opacity-80" />
            Threads
          </TabsTrigger>
          <TabsTrigger value="likes" className="flex items-center dark:data-[state=active]:bg-forum-lavender/20 dark:data-[state=active]:text-foreground">
            <Heart className="w-4 h-4 mr-2 opacity-80" />
            Likes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="threads" className="pt-8">
          <ThreadsList threads={threads.slice(0, 2)} />
        </TabsContent>
        <TabsContent value="likes" className="pt-8">
          <ThreadsList threads={threads.slice(1, 3)} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Profile;
