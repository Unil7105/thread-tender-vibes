
import { Home, Compass, MessageSquare, User, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <aside className="w-20 md:w-64 h-screen sticky top-0 left-0 overflow-y-auto bg-sidebar p-5 border-r transform transition-all duration-300 group">
      {/* Logo Section */}
      <div className="flex justify-center md:justify-start items-center mb-8">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:inline-block text-2xl font-bold text-forum-lavender"
        >
          TextForum
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-3xl font-bold text-forum-lavender"
        >
          Tf
        </motion.span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <motion.li 
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={item.path}
                className={`nav-item group/link ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3"
                >
                  <item.icon className="w-6 h-6 group-hover/link:text-forum-lavender transition-colors" />
                  <span className="hidden md:inline-block group-hover/link:text-forum-lavender transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-sidebar-border">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <ThemeToggle />
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-destructive transition-colors group"
          >
            <LogOut className="w-5 h-5 group-hover:text-destructive" />
            <span className="hidden md:inline-block group-hover:text-destructive">
              Logout
            </span>
          </motion.button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
