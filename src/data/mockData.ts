export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  threadCount: number;
  gradient?: string;
}

export interface Thread {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  category: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  upvotes: number;
  downvotes: number;
  replyCount: number;
  tags: string[];
  replies?: Reply[];
}

export interface Reply {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  upvotes: number;
  downvotes: number;
  reactions: {
    [key: string]: number;
  };
  parentId?: string;
  replies?: Reply[];
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Technology',
    description: 'Discuss the latest tech trends, gadgets, and software developments',
    icon: '💻',
    threadCount: 243,
    gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-900/80',
  },
  {
    id: '2',
    name: 'Arts & Creativity',
    description: 'Share your creative works, get feedback, and discuss artistic techniques',
    icon: '🎨',
    threadCount: 187,
    gradient: 'bg-gradient-to-br from-pink-50 to-purple-100 dark:from-slate-800 dark:to-purple-950/30',
  },
  {
    id: '3',
    name: 'Books & Literature',
    description: 'Book recommendations, literary discussions, and author spotlights',
    icon: '📚',
    threadCount: 156,
    gradient: 'bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-slate-800 dark:to-amber-950/30',
  },
  {
    id: '4',
    name: 'Health & Wellness',
    description: 'Tips for staying healthy, mental well-being, and fitness discussions',
    icon: '🧘',
    threadCount: 132,
    gradient: 'bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-800 dark:to-emerald-950/30',
  },
  {
    id: '5',
    name: 'Food & Cooking',
    description: 'Recipe sharing, cooking techniques, and culinary adventures',
    icon: '🍳',
    threadCount: 219,
    gradient: 'bg-gradient-to-br from-orange-50 to-red-100 dark:from-slate-800 dark:to-red-950/30',
  },
  {
    id: '6',
    name: 'Science',
    description: 'Scientific discoveries, research discussions, and learning resources',
    icon: '🔬',
    threadCount: 175,
    gradient: 'bg-gradient-to-br from-cyan-50 to-sky-100 dark:from-slate-800 dark:to-sky-950/30',
  },
  {
    id: '7',
    name: 'Travel & Adventure',
    description: 'Share travel experiences, tips, and incredible journey stories',
    icon: '✈️',
    threadCount: 198,
    gradient: 'bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-slate-800 dark:to-blue-950/30',
  },
  {
    id: '8',
    name: 'Music & Concerts',
    description: 'Discuss music genres, artists, upcoming concerts, and album reviews',
    icon: '🎵',
    threadCount: 223,
    gradient: 'bg-gradient-to-br from-pink-50 to-rose-100 dark:from-slate-800 dark:to-rose-950/30',
  },
  {
    id: '9',
    name: 'Gaming',
    description: 'Video game discussions, reviews, esports, and gaming strategies',
    icon: '🎮',
    threadCount: 265,
    gradient: 'bg-gradient-to-br from-indigo-50 to-violet-100 dark:from-slate-800 dark:to-violet-950/30',
  }
];

// Expand user profiles with more details
const users = [
  { 
    id: 'user1', 
    name: 'Alexandra Chen', 
    avatar: 'https://i.pravatar.cc/300?img=47',
    bio: 'Software engineer passionate about AI and open-source',
    location: 'San Francisco, CA',
    expertise: ['React', 'Machine Learning', 'Design Systems']
  },
  { 
    id: 'user2', 
    name: 'Mark Johnson', 
    avatar: 'https://i.pravatar.cc/300?img=12',
    bio: 'Digital nomad, travel blogger, and tech enthusiast',
    location: 'Bali, Indonesia',
    expertise: ['Content Creation', 'SEO', 'Digital Marketing']
  },
  { id: 'user3', name: 'Sophia Williams', avatar: 'https://i.pravatar.cc/300?img=29' },
  { id: 'user4', name: 'Jamie Rodriguez', avatar: 'https://i.pravatar.cc/300?img=20' },
  { id: 'user5', name: 'Raj Patel', avatar: 'https://i.pravatar.cc/300?img=68' },
  { id: 'user6', name: 'Emma Thompson', avatar: 'https://i.pravatar.cc/300?img=23' },
  { id: 'user7', name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/300?img=58' },
  { id: 'user8', name: 'Jordan Kim', avatar: 'https://i.pravatar.cc/300?img=33' },
  { id: 'user9', name: 'Taylor Morgan', avatar: 'https://i.pravatar.cc/300?img=15' },
  { id: 'user10', name: 'Michael Zhang', avatar: 'https://i.pravatar.cc/300?img=8' },
  { id: 'user11', name: 'Olivia Clark', avatar: 'https://i.pravatar.cc/300?img=5' },
  {
    id: 'user12', 
    name: 'Ethan Wright', 
    avatar: 'https://i.pravatar.cc/300?img=3',
    bio: 'Environmental scientist and sustainability advocate',
    location: 'Melbourne, Australia',
    expertise: ['Climate Research', 'Data Visualization', 'Science Communication']
  }
];

export const threads: Thread[] = [
  {
    id: '1',
    title: 'What programming language should I learn first?',
    content: 'I\'m new to programming and wondering which language would be best to start with. I\'m interested in web development but also curious about mobile apps.',
    author: users[0],
    category: {
      id: '1',
      name: 'Technology',
    },
    createdAt: '2025-04-10T10:30:00Z',
    updatedAt: '2025-04-10T10:30:00Z',
    upvotes: 24,
    downvotes: 3,
    replyCount: 7,
    tags: ['programming', 'beginners', 'learning'],
    replies: [
      {
        id: 'reply1',
        content: 'I would recommend JavaScript since it\'s versatile for both web and mobile development through frameworks like React and React Native.',
        author: users[1],
        createdAt: '2025-04-10T11:15:00Z',
        upvotes: 12,
        downvotes: 0,
        reactions: {
          '👍': 5,
          '💡': 8,
        },
      },
      {
        id: 'reply2',
        content: 'Python is great for beginners because of its readable syntax and vast applications from web dev (Django, Flask) to data science and AI.',
        author: users[2],
        createdAt: '2025-04-10T12:05:00Z',
        upvotes: 15,
        downvotes: 1,
        reactions: {
          '👍': 7,
          '💯': 3,
        },
        replies: [
          {
            id: 'reply2-1',
            content: 'I second Python! I started with it six months ago and now I\'m building simple web apps with Flask.',
            author: users[3],
            createdAt: '2025-04-10T13:30:00Z',
            upvotes: 8,
            downvotes: 0,
            reactions: {
              '🙌': 4,
            },
            parentId: 'reply2',
          },
        ],
      },
    ],
  },
  {
    id: 't2',
    title: 'Future of AI in Software Development',
    content: 'How do you think AI will change the landscape of software development in the next 5-10 years? Will it replace developers or augment their capabilities?',
    author: users[10],
    category: {
      id: '1',
      name: 'Technology',
    },
    createdAt: '2025-04-09T14:22:00Z',
    updatedAt: '2025-04-09T14:22:00Z',
    upvotes: 31,
    downvotes: 2,
    replyCount: 5,
    tags: ['AI', 'career', 'future'],
  },
  
  // Arts & Creativity threads (id: 2)
  {
    id: 'a1',
    title: 'Digital vs Traditional Art: Pros and Cons',
    content: 'I\'ve been a traditional artist for years but thinking about getting into digital art. What are the main pros and cons of each medium?',
    author: users[8],
    category: {
      id: '2',
      name: 'Arts & Creativity',
    },
    createdAt: '2025-04-11T09:15:00Z',
    updatedAt: '2025-04-11T09:15:00Z',
    upvotes: 18,
    downvotes: 1,
    replyCount: 6,
    tags: ['digital art', 'traditional art', 'comparison'],
  },
  {
    id: 'a2',
    title: 'What inspires your creative process?',
    content: 'I\'m curious to hear about different sources of inspiration. Do you have specific routines, places, or practices that help spark your creativity?',
    author: users[5],
    category: {
      id: '2',
      name: 'Arts & Creativity',
    },
    createdAt: '2025-04-08T16:40:00Z',
    updatedAt: '2025-04-08T16:40:00Z',
    upvotes: 27,
    downvotes: 0,
    replyCount: 12,
    tags: ['inspiration', 'creative process', 'routines'],
  },
  
  // Books & Literature threads (id: 3)
  {
    id: '2',
    title: 'Book recommendations for someone who loves magical realism?',
    content: 'I\'ve just finished "One Hundred Years of Solitude" by Gabriel García Márquez and I\'m looking for similar books that blend reality with magical elements.',
    author: users[4],
    category: {
      id: '3',
      name: 'Books & Literature',
    },
    createdAt: '2025-04-09T15:20:00Z',
    updatedAt: '2025-04-09T15:20:00Z',
    upvotes: 37,
    downvotes: 1,
    replyCount: 12,
    tags: ['books', 'magical realism', 'literature'],
  },
  {
    id: 'b2',
    title: 'Do physical books still matter in the digital age?',
    content: 'With e-readers and audiobooks becoming increasingly popular, I\'m wondering about the future of physical books. Do you still prefer them, and why?',
    author: users[11],
    category: {
      id: '3',
      name: 'Books & Literature',
    },
    createdAt: '2025-04-07T11:35:00Z',
    updatedAt: '2025-04-07T11:35:00Z',
    upvotes: 42,
    downvotes: 3,
    replyCount: 16,
    tags: ['ebooks', 'physical books', 'reading habits'],
  },
  
  // Health & Wellness threads (id: 4)
  {
    id: '3',
    title: 'Does anyone else struggle with work-life balance as a remote worker?',
    content: 'Since I started working remotely full-time, I\'ve found it increasingly difficult to separate my work hours from personal time. Looking for strategies that have worked for others.',
    author: users[5],
    category: {
      id: '4',
      name: 'Health & Wellness',
    },
    createdAt: '2025-04-11T09:45:00Z',
    updatedAt: '2025-04-11T09:45:00Z',
    upvotes: 48,
    downvotes: 2,
    replyCount: 15,
    tags: ['remote work', 'mental health', 'productivity'],
  },
  {
    id: 'h2',
    title: 'Meditation techniques for beginners with busy schedules',
    content: 'I\'ve been trying to start a meditation practice but finding it hard to fit into my busy day. Any recommendations for short but effective techniques?',
    author: users[6],
    category: {
      id: '4',
      name: 'Health & Wellness',
    },
    createdAt: '2025-04-06T08:30:00Z',
    updatedAt: '2025-04-06T08:30:00Z',
    upvotes: 33,
    downvotes: 0,
    replyCount: 9,
    tags: ['meditation', 'beginners', 'busy lifestyle'],
  },
  
  // Food & Cooking threads (id: 5)
  {
    id: 'f1',
    title: 'Easy but impressive dinner party recipes?',
    content: 'I\'m hosting a dinner party for 6 people this weekend and want to make something that seems fancy but isn\'t too complicated. Any suggestions?',
    author: users[7],
    category: {
      id: '5',
      name: 'Food & Cooking',
    },
    createdAt: '2025-04-10T17:20:00Z',
    updatedAt: '2025-04-10T17:20:00Z',
    upvotes: 21,
    downvotes: 0,
    replyCount: 8,
    tags: ['recipes', 'dinner party', 'cooking'],
  },
  {
    id: 'f2',
    title: 'Favorite international cuisines to cook at home?',
    content: 'I\'ve been exploring different cuisines in my home cooking and would love to hear which international foods others enjoy making. What cuisines do you find approachable for home cooking?',
    author: users[2],
    category: {
      id: '5',
      name: 'Food & Cooking',
    },
    createdAt: '2025-04-08T13:40:00Z',
    updatedAt: '2025-04-08T13:40:00Z',
    upvotes: 29,
    downvotes: 1,
    replyCount: 11,
    tags: ['international cuisine', 'home cooking', 'recipes'],
  },
  
  // Science threads (id: 6)
  {
    id: 's1',
    title: 'Recent scientific discoveries that blew your mind',
    content: 'What are some recent scientific breakthroughs or discoveries that you found particularly fascinating or surprising?',
    author: users[9],
    category: {
      id: '6',
      name: 'Science',
    },
    createdAt: '2025-04-09T10:15:00Z',
    updatedAt: '2025-04-09T10:15:00Z',
    upvotes: 36,
    downvotes: 0,
    replyCount: 7,
    tags: ['discoveries', 'breakthrough', 'research'],
  },
  {
    id: 's2',
    title: 'How to explain complex scientific concepts to children?',
    content: 'My 8-year-old is very curious about science, especially astronomy and physics. Any tips on how to explain complex concepts in a way that\'s accurate but understandable?',
    author: users[3],
    category: {
      id: '6',
      name: 'Science',
    },
    createdAt: '2025-04-07T16:25:00Z',
    updatedAt: '2025-04-07T16:25:00Z',
    upvotes: 24,
    downvotes: 1,
    replyCount: 9,
    tags: ['education', 'children', 'science communication'],
  },
  
  // Travel & Adventure threads (id: 7)
  {
    id: '4',
    title: 'Best Travel Destinations for Solo Backpackers in 2025',
    content: 'I\'m planning a solo backpacking trip this year and looking for recommendations. What are some must-visit destinations that are safe, budget-friendly, and offer unique experiences?',
    author: users[6],
    category: {
      id: '7',
      name: 'Travel & Adventure',
    },
    createdAt: '2025-04-12T14:30:00Z',
    updatedAt: '2025-04-12T14:30:00Z',
    upvotes: 42,
    downvotes: 1,
    replyCount: 9,
    tags: ['travel', 'backpacking', 'solo travel'],
  },
  {
    id: 'tr2',
    title: 'Sustainable travel practices: How do you reduce your environmental impact?',
    content: 'I love traveling but am increasingly concerned about the environmental impact. What practices have you adopted to make your travels more sustainable?',
    author: users[0],
    category: {
      id: '7',
      name: 'Travel & Adventure',
    },
    createdAt: '2025-04-05T09:50:00Z',
    updatedAt: '2025-04-05T09:50:00Z',
    upvotes: 31,
    downvotes: 2,
    replyCount: 14,
    tags: ['sustainable travel', 'eco-friendly', 'environment'],
  },
  
  // Music & Concerts threads (id: 8)
  {
    id: '6',
    title: 'Exploring Emerging Music Genres and Subcultures',
    content: 'What are some fascinating emerging music genres or subcultures that are gaining traction? Share your insights and discoveries about underground music scenes.',
    author: users[8],
    category: {
      id: '8',
      name: 'Music & Concerts',
    },
    createdAt: '2025-04-10T16:45:00Z',
    updatedAt: '2025-04-10T16:45:00Z',
    upvotes: 33,
    downvotes: 1,
    replyCount: 7,
    tags: ['music', 'genres', 'culture'],
  },
  {
    id: 'm2',
    title: 'How has streaming changed your music listening habits?',
    content: 'With streaming platforms dominating music consumption, I\'m curious how it\'s changed the way people discover and listen to music. Has it broadened your horizons or created echo chambers?',
    author: users[4],
    category: {
      id: '8',
      name: 'Music & Concerts',
    },
    createdAt: '2025-04-06T12:30:00Z',
    updatedAt: '2025-04-06T12:30:00Z',
    upvotes: 26,
    downvotes: 1,
    replyCount: 11,
    tags: ['streaming', 'music consumption', 'discovery'],
  },
  
  // Gaming threads (id: 9)
  {
    id: '5',
    title: 'Indie Game Developers: Challenges and Success Stories',
    content: 'For those who have ventured into independent game development, what were the biggest challenges you faced? How did you overcome them, and what advice would you give to aspiring indie developers?',
    author: users[7],
    category: {
      id: '9',
      name: 'Gaming',
    },
    createdAt: '2025-04-11T11:15:00Z',
    updatedAt: '2025-04-11T11:15:00Z',
    upvotes: 56,
    downvotes: 2,
    replyCount: 14,
    tags: ['game development', 'indie games', 'programming'],
  },
  {
    id: 'g2',
    title: 'Do narrative-driven games provide more meaningful experiences than competitive ones?',
    content: 'I\'ve always preferred story-rich single-player games over competitive multiplayer. I\'m curious about others\' perspectives on which type of gaming experience feels more meaningful or rewarding.',
    author: users[1],
    category: {
      id: '9',
      name: 'Gaming',
    },
    createdAt: '2025-04-07T19:15:00Z',
    updatedAt: '2025-04-07T19:15:00Z',
    upvotes: 39,
    downvotes: 5,
    replyCount: 17,
    tags: ['narrative games', 'competitive gaming', 'game design'],
  },
  {
    id: 'climate_tech_innovation',
    title: 'Innovative Climate Technologies Reshaping Our Future',
    content: 'As global warming continues to be a pressing issue, what breakthrough technologies do you believe have the most potential to mitigate climate change? From carbon capture to renewable energy solutions, let\'s discuss the innovations that could make a real difference.',
    author: users[11],
    category: {
      id: '6',
      name: 'Science',
    },
    createdAt: '2025-04-15T10:30:00Z',
    updatedAt: '2025-04-15T10:30:00Z',
    upvotes: 65,
    downvotes: 3,
    replyCount: 22,
    tags: ['climate-tech', 'sustainability', 'innovation', 'renewable-energy', 'carbon-capture'],
    replies: [
      {
        id: 'reply_climate_1',
        content: 'Direct Air Capture (DAC) technologies are promising. Companies like Climeworks are already deploying scalable carbon removal solutions that could be game-changers.',
        author: users[0],
        createdAt: '2025-04-15T11:45:00Z',
        upvotes: 18,
        downvotes: 1,
        reactions: {
          '🌍': 12,
          '💡': 6
        }
      },
      {
        id: 'reply_climate_2',
        content: 'I\'m particularly excited about advances in fusion energy. While still experimental, technologies like those being developed at ITER could provide virtually unlimited, clean energy.',
        author: users[2],
        createdAt: '2025-04-15T12:15:00Z',
        upvotes: 22,
        downvotes: 0,
        reactions: {
          '⚛️': 15,
          '🚀': 7
        },
        replies: [
          {
            id: 'reply_climate_2_1',
            content: 'Fusion is promising, but we also need to invest heavily in current renewable technologies like solar and wind to bridge the gap.',
            author: users[9],
            createdAt: '2025-04-15T13:30:00Z',
            upvotes: 10,
            downvotes: 0,
            reactions: {
              '👍': 8
            },
            parentId: 'reply_climate_2'
          }
        ]
      }
    ]
  },
  {
    id: 'future_of_remote_work',
    title: 'The Evolution of Remote Work: Challenges and Opportunities',
    content: 'As we move further into 2025, remote work continues to transform. What are the most significant challenges and opportunities you see in distributed teams? How are companies adapting their strategies?',
    author: users[5],
    category: {
      id: '4',
      name: 'Health & Wellness',
    },
    createdAt: '2025-04-14T14:20:00Z',
    updatedAt: '2025-04-14T14:20:00Z',
    upvotes: 52,
    downvotes: 2,
    replyCount: 18,
    tags: ['remote-work', 'digital-nomads', 'work-life-balance', 'technology', 'future-of-work'],
    replies: [
      {
        id: 'reply_remote_1',
        content: 'Asynchronous communication and strong documentation have been key to our team\'s success. Tools like Notion and Slack have been game-changers.',
        author: users[1],
        createdAt: '2025-04-14T15:10:00Z',
        upvotes: 15,
        downvotes: 0,
        reactions: {
          '💻': 10,
          '🌐': 5
        }
      }
    ]
  }
];
