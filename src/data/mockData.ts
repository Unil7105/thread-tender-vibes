
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
      {
        id: 'reply3',
        content: 'Don\'t overthink it. Pick any popular language and start building things. The specific language matters less than developing problem-solving skills and understanding programming concepts.',
        author: users[9],
        createdAt: '2025-04-10T14:22:00Z',
        upvotes: 19,
        downvotes: 0,
        reactions: {
          '💯': 12,
          '🧠': 8,
        },
      },
      {
        id: 'reply4',
        content: 'For mobile apps specifically, consider Swift (iOS) or Kotlin (Android). But if you want to cover both platforms with one language, JavaScript with React Native is a solid choice.',
        author: users[5],
        createdAt: '2025-04-10T16:45:00Z',
        upvotes: 7,
        downvotes: 0,
        reactions: {
          '👍': 3,
          '🔥': 2,
        },
      },
      {
        id: 'reply5',
        content: 'I started with HTML/CSS/JavaScript and found it very rewarding because you can see results immediately in the browser. Great for motivation!',
        author: users[8],
        createdAt: '2025-04-10T19:12:00Z',
        upvotes: 10,
        downvotes: 0,
        reactions: {
          '❤️': 4,
          '✨': 6,
        },
      }
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
    replyCount: 9,
    tags: ['AI', 'career', 'future'],
    replies: [
      {
        id: 'reply_t2_1',
        content: 'I believe AI will be more of an augmentation tool than a replacement. It\'s already helping with code completion and refactoring, but the creative problem-solving aspects of programming still need human intelligence.',
        author: users[0],
        createdAt: '2025-04-09T15:10:00Z',
        upvotes: 20,
        downvotes: 0,
        reactions: {
          '👍': 8,
          '💡': 12,
        },
      },
      {
        id: 'reply_t2_2',
        content: 'AI is already changing how I work. I use it for boilerplate code, debugging, and learning new concepts. But I still need to understand what I\'m implementing and make critical architecture decisions.',
        author: users[4],
        createdAt: '2025-04-09T16:30:00Z',
        upvotes: 15,
        downvotes: 0,
        reactions: {
          '💯': 7,
          '🤖': 4,
        },
      },
      {
        id: 'reply_t2_3',
        content: 'Junior developers should be concerned. A lot of entry-level tasks that used to be learning opportunities are being automated away. The bar for entry is rising.',
        author: users[8],
        createdAt: '2025-04-09T17:45:00Z',
        upvotes: 8,
        downvotes: 5,
        reactions: {
          '🤔': 12,
        },
        replies: [
          {
            id: 'reply_t2_3_1',
            content: 'I disagree. AI tools are creating new types of entry-level positions focused on prompt engineering and AI integration. Junior devs just need to adapt their skillset.',
            author: users[3],
            createdAt: '2025-04-09T18:20:00Z',
            upvotes: 14,
            downvotes: 1,
            reactions: {
              '👏': 5,
              '💡': 4,
            },
            parentId: 'reply_t2_3',
          },
          {
            id: 'reply_t2_3_2',
            content: 'As a junior dev myself, I\'ve found AI tools incredibly helpful for learning. They explain concepts and help me understand code patterns that would take longer to learn otherwise.',
            author: users[7],
            createdAt: '2025-04-09T19:05:00Z',
            upvotes: 9,
            downvotes: 0,
            reactions: {
              '❤️': 3,
              '💯': 6,
            },
            parentId: 'reply_t2_3',
          }
        ]
      },
      {
        id: 'reply_t2_4',
        content: 'We\'ll see more emphasis on domain expertise. AI can generate code, but you still need people who understand the business problems they\'re solving and can validate the AI\'s output.',
        author: users[11],
        createdAt: '2025-04-09T20:15:00Z',
        upvotes: 17,
        downvotes: 0,
        reactions: {
          '💯': 9,
          '🧠': 7,
        },
      }
    ]
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
    replyCount: 8,
    tags: ['digital art', 'traditional art', 'comparison'],
    replies: [
      {
        id: 'reply_a1_1',
        content: 'The biggest pro of digital art is the undo button! Also, it\'s much easier to experiment with different color schemes and effects without having to start over.',
        author: users[5],
        createdAt: '2025-04-11T10:30:00Z',
        upvotes: 12,
        downvotes: 0,
        reactions: {
          '👍': 8,
          '✨': 5,
        },
      },
      {
        id: 'reply_a1_2',
        content: 'Traditional art has a tactile quality that digital can\'t match. The feel of the brush on canvas, the unpredictable way paints blend together... there\'s a certain magic to it.',
        author: users[2],
        createdAt: '2025-04-11T11:15:00Z',
        upvotes: 14,
        downvotes: 0,
        reactions: {
          '❤️': 9,
          '🎨': 7,
        },
        replies: [
          {
            id: 'reply_a1_2_1',
            content: 'I agree! Digital art is convenient, but sometimes I miss the happy accidents and organic textures you get with traditional mediums.',
            author: users[9],
            createdAt: '2025-04-11T12:40:00Z',
            upvotes: 7,
            downvotes: 0,
            reactions: {
              '💯': 4,
            },
            parentId: 'reply_a1_2',
          }
        ]
      },
      {
        id: 'reply_a1_3',
        content: 'Digital art is more forgiving for beginners. You can work in layers, easily resize and modify elements, and the learning curve isn\'t as steep as mastering traditional techniques.',
        author: users[3],
        createdAt: '2025-04-11T13:25:00Z',
        upvotes: 10,
        downvotes: 1,
        reactions: {
          '👍': 6,
          '💡': 5,
        },
      },
      {
        id: 'reply_a1_4',
        content: 'Cost is a factor too. Traditional art requires constant supply replenishment, while digital has a higher upfront cost (tablet, software) but lower ongoing expenses.',
        author: users[7],
        createdAt: '2025-04-11T15:10:00Z',
        upvotes: 9,
        downvotes: 0,
        reactions: {
          '💰': 7,
          '👍': 3,
        },
      }
    ]
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
    replies: [
      {
        id: 'reply_a2_1',
        content: 'Nature walks are my biggest inspiration. There\'s something about being surrounded by patterns and colors that weren\'t designed by humans that sparks fresh ideas.',
        author: users[11],
        createdAt: '2025-04-08T17:15:00Z',
        upvotes: 15,
        downvotes: 0,
        reactions: {
          '🌿': 10,
          '💚': 8,
        },
      },
      {
        id: 'reply_a2_2',
        content: 'I keep a dream journal. Our unconscious minds create the most fascinating imagery and narratives, and I find tapping into that helps me break away from conventional thinking.',
        author: users[9],
        createdAt: '2025-04-08T18:30:00Z',
        upvotes: 12,
        downvotes: 1,
        reactions: {
          '💭': 9,
          '✨': 7,
        },
      },
      {
        id: 'reply_a2_3',
        content: 'Museums and galleries! Seeing how other artists approach their work often gives me new perspectives. I also like to sketch in cafes and observe people.',
        author: users[1],
        createdAt: '2025-04-08T19:45:00Z',
        upvotes: 14,
        downvotes: 0,
        reactions: {
          '🏛️': 8,
          '☕': 6,
        },
      },
      {
        id: 'reply_a2_4',
        content: 'Music is essential to my creative process. Different genres put me in different moods and mindsets, which directly influences what I create.',
        author: users[0],
        createdAt: '2025-04-08T20:15:00Z',
        upvotes: 18,
        downvotes: 0,
        reactions: {
          '🎵': 12,
          '🎧': 9,
        },
        replies: [
          {
            id: 'reply_a2_4_1',
            content: 'Same here! Do you have specific playlists for different types of creative work? I find ambient music great for focused design work but something more energetic for brainstorming.',
            author: users[8],
            createdAt: '2025-04-08T21:00:00Z',
            upvotes: 6,
            downvotes: 0,
            reactions: {
              '👍': 4,
            },
            parentId: 'reply_a2_4',
          }
        ]
      },
      {
        id: 'reply_a2_5',
        content: 'Constraints paradoxically boost my creativity. Setting arbitrary limitations (like using only three colors or creating within a specific theme) forces me to think more creatively.',
        author: users[4],
        createdAt: '2025-04-08T22:30:00Z',
        upvotes: 20,
        downvotes: 0,
        reactions: {
          '💡': 14,
          '🧠': 11,
        },
      }
    ]
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
    replies: [
      {
        id: 'reply_2_1',
        content: '"The House of the Spirits" by Isabel Allende would be a natural next step. It has a similar multi-generational family saga with magical elements woven throughout.',
        author: users[1],
        createdAt: '2025-04-09T16:10:00Z',
        upvotes: 21,
        downvotes: 0,
        reactions: {
          '📚': 15,
          '✨': 12,
        },
      },
      {
        id: 'reply_2_2',
        content: 'Try "Midnight\'s Children" by Salman Rushdie. It\'s a beautiful blend of history, politics, and magical realism set in India during independence.',
        author: users[3],
        createdAt: '2025-04-09T17:25:00Z',
        upvotes: 18,
        downvotes: 0,
        reactions: {
          '👍': 10,
          '🪄': 7,
        },
        replies: [
          {
            id: 'reply_2_2_1',
            content: 'Rushdie\'s language is more dense than Márquez, but absolutely worth the effort. His work "The Satanic Verses" is also brilliant if you enjoy Midnight\'s Children.',
            author: users[10],
            createdAt: '2025-04-09T18:15:00Z',
            upvotes: 9,
            downvotes: 0,
            reactions: {
              '💯': 6,
            },
            parentId: 'reply_2_2',
          }
        ]
      },
      {
        id: 'reply_2_3',
        content: 'For something a bit different but still in the magical realism vein, "The Wind-Up Bird Chronicle" by Haruki Murakami blends the mundane with the surreal in fascinating ways.',
        author: users[7],
        createdAt: '2025-04-09T19:05:00Z',
        upvotes: 15,
        downvotes: 0,
        reactions: {
          '🐦': 8,
          '🇯🇵': 6,
        },
      },
      {
        id: 'reply_2_4',
        content: '"Like Water for Chocolate" by Laura Esquivel is a wonderful magical realism novel that incorporates food and cooking with emotion and magic.',
        author: users[2],
        createdAt: '2025-04-09T20:30:00Z',
        upvotes: 14,
        downvotes: 0,
        reactions: {
          '🍽️': 9,
          '❤️': 7,
        },
      },
      {
        id: 'reply_2_5',
        content: 'If you\'re open to contemporary authors, "The Night Circus" by Erin Morgenstern has beautiful magical realism elements in a historical setting.',
        author: users[9],
        createdAt: '2025-04-09T21:40:00Z',
        upvotes: 12,
        downvotes: 1,
        reactions: {
          '🎪': 8,
          '✨': 5,
        },
      }
    ]
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
    replies: [
      {
        id: 'reply_b2_1',
        content: 'I\'ll always prefer physical books. There\'s something irreplaceable about the tactile experience – the feel of turning pages, the smell of paper, being able to see your progress physically.',
        author: users[0],
        createdAt: '2025-04-07T12:15:00Z',
        upvotes: 28,
        downvotes: 1,
        reactions: {
          '📚': 18,
          '❤️': 14,
        },
      },
      {
        id: 'reply_b2_2',
        content: 'I\'ve switched almost entirely to e-books. The convenience of carrying my entire library in one device and being able to read in the dark are game-changers for me.',
        author: users[5],
        createdAt: '2025-04-07T13:40:00Z',
        upvotes: 19,
        downvotes: 2,
        reactions: {
          '💡': 10,
          '👍': 8,
        },
        replies: [
          {
            id: 'reply_b2_2_1',
            content: 'Same here. Also, instant dictionary lookup and adjustable font sizes have made reading much more accessible for me as someone with minor visual impairments.',
            author: users[10],
            createdAt: '2025-04-07T14:25:00Z',
            upvotes: 15,
            downvotes: 0,
            reactions: {
              '💯': 7,
              '👏': 5,
            },
            parentId: 'reply_b2_2',
          }
        ]
      },
      {
        id: 'reply_b2_3',
        content: 'I use different formats for different purposes. Physical books for deep reading at home, e-books for travel, and audiobooks for commuting. Each has its place!',
        author: users[2],
        createdAt: '2025-04-07T15:05:00Z',
        upvotes: 32,
        downvotes: 0,
        reactions: {
          '🧠': 20,
          '👌': 15,
        },
      },
      {
        id: 'reply_b2_4',
        content: 'Physical books have proven remarkably resilient throughout history. They don\'t need batteries, won\'t become obsolete with changing technology, and can last centuries with proper care.',
        author: users[8],
        createdAt: '2025-04-07T16:30:00Z',
        upvotes: 24,
        downvotes: 0,
        reactions: {
          '🪦': 12,
          '⏳': 9,
        },
      },
      {
        id: 'reply_b2_5',
        content: 'The environmental impact is worth considering. E-readers have an upfront carbon footprint from manufacturing, but if you read hundreds of books on one device, you may use fewer resources in the long run.',
        author: users[11],
        createdAt: '2025-04-07T17:45:00Z',
        upvotes: 17,
        downvotes: 2,
        reactions: {
          '🌿': 11,
          '🌎': 8,
        },
      }
    ]
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
    replies: [
      {
        id: 'reply_3_1',
        content: 'Creating a dedicated workspace that you can physically leave at the end of the day has been crucial for me. It helps create that psychological separation between "work mode" and "home mode."',
        author: users[1],
        createdAt: '2025-04-11T10:30:00Z',
        upvotes: 31,
        downvotes: 0,
        reactions: {
          '💯': 22,
          '👍': 18,
        },
      },
      {
        id: 'reply_3_2',
        content: 'I stick to strict working hours and use calendar blocking for both work tasks AND personal time. When 5:30 hits, I close my laptop and don\'t check emails until the next day.',
        author: users[9],
        createdAt: '2025-04-11T11:15:00Z',
        upvotes: 27,
        downvotes: 1,
        reactions: {
          '⌚': 15,
          '🧠': 10,
        },
        replies: [
          {
            id: 'reply_3_2_1',
            content: 'This is so important! I also use different browser profiles for work and personal use to keep them separated, and have notifications turned off outside working hours.',
            author: users[3],
            createdAt: '2025-04-11T12:05:00Z',
            upvotes: 11,
            downvotes: 0,
            reactions: {
              '🙌': 6,
              '💡': 3
            },
            parentId: 'reply_3_2',
          }
        ]
      },
      {
        id: 'reply_3_3',
        content: 'Taking actual lunch breaks away from your desk makes a huge difference. I make a point to eat lunch in a different room and sometimes even go for a short walk to simulate a "commute" between work and break time.',
        author: users[2],
        createdAt: '2025-04-11T13:45:00Z',
        upvotes: 24,
        downvotes: 0,
        reactions: {
          '🥗': 11,
          '🚶': 9,
        },
      },
      {
        id: 'reply_3_4',
        content: 'Physical cues can help. I have a "work candle" that I light only during work hours. When the candle gets blown out, work is over. It sounds silly, but these rituals really help signal to your brain when it\'s time to switch modes.',
        author: users[6],
        createdAt: '2025-04-11T15:20:00Z',
        upvotes: 19,
        downvotes: 1,
        reactions: {
          '🕯️': 12,
          '🧠': 8,
        },
      },
      {
        id: 'reply_3_5',
        content: 'I was struggling with this until I created a separate user account on my computer for work. Now I literally log out of my work account at the end of the day, which helps mentally disconnect.',
        author: users[8],
        createdAt: '2025-04-11T16:55:00Z',
        upvotes: 22,
        downvotes: 0,
        reactions: {
          '💻': 12,
          '👍': 9,
        },
      }
    ]
  },
  
  // Add a Food & Cooking thread
  {
    id: 'f1',
    title: 'What\'s your go-to weeknight dinner recipe?',
    content: 'Looking for quick, nutritious meals that can be prepared in under 30 minutes on busy weeknights. What are your favorites?',
    author: users[2],
    category: {
      id: '5',
      name: 'Food & Cooking',
    },
    createdAt: '2025-04-05T18:30:00Z',
    updatedAt: '2025-04-05T18:30:00Z',
    upvotes: 39,
    downvotes: 1,
    replyCount: 14,
    tags: ['quick meals', 'weeknight dinners', 'recipes'],
    replies: [
      {
        id: 'reply_f1_1',
        content: 'Sheet pan dinners are my lifesaver! Toss chicken, vegetables, and potatoes with olive oil and herbs, spread on a sheet pan, and bake at 425°F for 25 minutes. One pan, minimal cleanup.',
        author: users[4],
        createdAt: '2025-04-05T19:10:00Z',
        upvotes: 27,
        downvotes: 0,
        reactions: {
          '🍗': 15,
          '👨‍🍳': 10,
        },
      },
      {
        id: 'reply_f1_2',
        content: 'Stir-fry is perfect for busy nights. Prep vegetables on weekends, then just heat oil, add protein, vegetables, and sauce. Ready in 15 minutes with rice.',
        author: users[7],
        createdAt: '2025-04-05T19:45:00Z',
        upvotes: 21,
        downvotes: 0,
        reactions: {
          '🥢': 12,
          '🔥': 8,
        },
      },
      {
        id: 'reply_f1_3',
        content: 'Pasta with cherry tomatoes, garlic, and spinach. While pasta cooks, sauté garlic, add halved tomatoes and spinach. Mix with pasta, add some pasta water, olive oil, and parmesan. Done in 20 minutes!',
        author: users[1],
        createdAt: '2025-04-05T20:30:00Z',
        upvotes: 25,
        downvotes: 0,
        reactions: {
          '🍝': 14,
          '🍅': 9,
        },
      }
    ]
  },
  
  // Add a Science thread
  {
    id: 's1',
    title: 'Latest breakthroughs in renewable energy technology',
    content: 'What are some of the most promising recent developments in renewable energy that could help combat climate change?',
    author: users[11],
    category: {
      id: '6',
      name: 'Science',
    },
    createdAt: '2025-04-02T11:20:00Z',
    updatedAt: '2025-04-02T11:20:00Z',
    upvotes: 51,
    downvotes: 2,
    replyCount: 13,
    tags: ['renewable energy', 'climate change', 'technology'],
    replies: [
      {
        id: 'reply_s1_1',
        content: 'Perovskite solar cells are showing incredible promise. They can be manufactured cheaply, potentially printed on flexible surfaces, and recent advances have improved their durability significantly. Could revolutionize solar adoption.',
        author: users[0],
        createdAt: '2025-04-02T12:15:00Z',
        upvotes: 29,
        downvotes: 0,
        reactions: {
          '☀️': 17,
          '🔬': 12,
        },
      },
      {
        id: 'reply_s1_2',
        content: 'Green hydrogen production is becoming more viable with the decreasing cost of electrolyzers and renewable electricity. It could be key for decarbonizing industries like steel and shipping that are difficult to electrify directly.',
        author: users[3],
        createdAt: '2025-04-02T13:40:00Z',
        upvotes: 24,
        downvotes: 1,
        reactions: {
          '🧪': 14,
          '🌊': 9,
        },
      },
      {
        id: 'reply_s1_3',
        content: 'Grid-scale battery storage technology is advancing rapidly. Flow batteries with much longer lifespans than lithium-ion are being deployed for longer-duration storage, which is essential for managing intermittent renewable sources.',
        author: users[10],
        createdAt: '2025-04-02T15:20:00Z',
        upvotes: 20,
        downvotes: 0,
        reactions: {
          '🔋': 12,
          '⚡': 8,
        },
      }
    ]
  }
];
