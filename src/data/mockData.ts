
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
];
