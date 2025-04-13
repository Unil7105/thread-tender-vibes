
import Layout from '@/components/Layout';
import { User, Mail, Calendar, Edit, MessageSquare, Heart, Info } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ThreadsList from '@/components/ThreadsList';
import { threads } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from '@/components/ui/switch';

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
  
  const [showNewUserTips, setShowNewUserTips] = useState(true);
  const [activeTab, setActiveTab] = useState("threads");
  
  return (
    <Layout>
      <div className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-accent/30 object-cover shadow-soft"
            />
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-foreground"
            >
              {profile.name}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-3 md:gap-6 mb-5 text-sm font-medium text-foreground"
            >
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-1.5 text-forum-lavender" />
                {profile.email}
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Calendar className="w-4 h-4 mr-1.5 text-forum-lavender" />
                Joined {profile.joinDate}
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="max-w-2xl text-base text-foreground leading-relaxed"
            >
              {profile.bio}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-8 mt-6"
            >
              <div className="text-center">
                <div className="text-xl font-semibold text-forum-lavender">{profile.stats.threads}</div>
                <div className="text-sm font-medium text-forum-indigo mt-1">Threads</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-forum-lavender">{profile.stats.replies}</div>
                <div className="text-sm font-medium text-forum-indigo mt-1">Replies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold text-forum-lavender">{profile.stats.likes}</div>
                <div className="text-sm font-medium text-forum-indigo mt-1">Likes</div>
              </div>
            </motion.div>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className="md:self-start border-forum-lavender/30 text-forum-lavender hover:bg-forum-lavender/10 hover:text-forum-lavender"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Customize your profile information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-medium">Your Content</h2>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Show tips</span>
          <Switch 
            checked={showNewUserTips} 
            onCheckedChange={setShowNewUserTips}
            className="data-[state=checked]:bg-forum-lavender"
          />
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Info className="h-4 w-4 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Profile Tips</h4>
                <p className="text-sm text-muted-foreground">
                  View your threads and liked content. Toggle "Show tips" to hide or show helpful guidance.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <Tabs 
        defaultValue="threads" 
        className="mb-8"
        onValueChange={setActiveTab}
      >
        <TabsList className="bg-background border border-border/30">
          <TabsTrigger 
            value="threads" 
            className="flex items-center text-base font-medium data-[state=active]:bg-forum-lavender/20 data-[state=active]:text-foreground group"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: activeTab === "threads" ? [0, -10, 10, -5, 5, 0] : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <MessageSquare className="w-4 h-4 mr-2 opacity-80 group-data-[state=active]:text-forum-lavender transition-colors duration-200" />
            </motion.div>
            Threads
          </TabsTrigger>
          <TabsTrigger 
            value="likes" 
            className="flex items-center text-base font-medium data-[state=active]:bg-forum-lavender/20 data-[state=active]:text-foreground group"
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ 
                scale: activeTab === "likes" ? [1, 1.2, 1] : 1,
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Heart className="w-4 h-4 mr-2 opacity-80 group-data-[state=active]:text-forum-lavender transition-colors duration-200" />
            </motion.div>
            Likes
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="threads" className="pt-8">
          {showNewUserTips && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-forum-lavender/10 border border-forum-lavender/20 rounded-lg p-4 mb-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex space-x-2">
                  <Info className="h-5 w-5 text-forum-lavender flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">Your Threads</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Here you can see all the threads you've created. Start a conversation by clicking the "New Thread" button in the bottom right.
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => setShowNewUserTips(false)}
                >
                  Dismiss
                </Button>
              </div>
            </motion.div>
          )}
          <ThreadsList threads={threads.slice(0, 2)} />
        </TabsContent>
        
        <TabsContent value="likes" className="pt-8">
          {showNewUserTips && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-forum-lavender/10 border border-forum-lavender/20 rounded-lg p-4 mb-6"
            >
              <div className="flex justify-between items-start">
                <div className="flex space-x-2">
                  <Info className="h-5 w-5 text-forum-lavender flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">Your Likes</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      These are threads you've liked. Liking threads helps organize your favorite content and shows appreciation to authors.
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs"
                  onClick={() => setShowNewUserTips(false)}
                >
                  Dismiss
                </Button>
              </div>
            </motion.div>
          )}
          <ThreadsList threads={threads.slice(1, 3)} />
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Profile;
