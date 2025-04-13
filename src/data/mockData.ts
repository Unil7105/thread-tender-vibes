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

export const threads: Thread[] = [
  {
    id: '1',
    title: 'What programming language should I learn first?',
    content: 'I\'m new to programming and wondering which language would be best to start with. I\'m interested in web development but also curious about mobile apps.',
    author: {
      id: 'user1',
      name: 'Alexandra Chen',
      avatar: 'https://ui-avatars.com/api/?name=Alexandra+Chen&background=random',
    },
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
        author: {
          id: 'user2',
          name: 'Mark Johnson',
          avatar: 'https://ui-avatars.com/api/?name=Mark+Johnson&background=random',
        },
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
        author: {
          id: 'user3',
          name: 'Sophia Williams',
          avatar: 'https://ui-avatars.com/api/?name=Sophia+Williams&background=random',
        },
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
            author: {
              id: 'user4',
              name: 'Jamie Rodriguez',
              avatar: 'https://ui-avatars.com/api/?name=Jamie+Rodriguez&background=random',
            },
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
    id: '2',
    title: 'Book recommendations for someone who loves magical realism?',
    content: 'I\'ve just finished "One Hundred Years of Solitude" by Gabriel García Márquez and I\'m looking for similar books that blend reality with magical elements.',
    author: {
      id: 'user5',
      name: 'Raj Patel',
      avatar: 'https://ui-avatars.com/api/?name=Raj+Patel&background=random',
    },
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
    id: '3',
    title: 'Does anyone else struggle with work-life balance as a remote worker?',
    content: 'Since I started working remotely full-time, I\'ve found it increasingly difficult to separate my work hours from personal time. Looking for strategies that have worked for others.',
    author: {
      id: 'user6',
      name: 'Emma Thompson',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Thompson&background=random',
    },
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
    id: '4',
    title: 'Best Travel Destinations for Solo Backpackers in 2025',
    content: 'I\'m planning a solo backpacking trip this year and looking for recommendations. What are some must-visit destinations that are safe, budget-friendly, and offer unique experiences?',
    author: {
      id: 'user7',
      name: 'Alex Rivera',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&background=random',
    },
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
    id: '5',
    title: 'Indie Game Developers: Challenges and Success Stories',
    content: 'For those who have ventured into independent game development, what were the biggest challenges you faced? How did you overcome them, and what advice would you give to aspiring indie developers?',
    author: {
      id: 'user8',
      name: 'Jordan Kim',
      avatar: 'https://ui-avatars.com/api/?name=Jordan+Kim&background=random',
    },
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
    id: '6',
    title: 'Exploring Emerging Music Genres and Subcultures',
    content: 'What are some fascinating emerging music genres or subcultures that are gaining traction? Share your insights and discoveries about underground music scenes.',
    author: {
      id: 'user9',
      name: 'Taylor Morgan',
      avatar: 'https://ui-avatars.com/api/?name=Taylor+Morgan&background=random',
    },
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
  }
];
