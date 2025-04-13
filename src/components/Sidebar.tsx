
import { Home, Compass, MessageSquare, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button 
        className="fixed top-4 left-4 z-50 md:hidden bg-sidebar p-2 rounded-full shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="w-5 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-sidebar-foreground rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-sidebar-foreground rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 w-full bg-sidebar-foreground rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Sidebar Background Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-sidebar p-5 border-r transform transition-all duration-300 
                        ${isMobileMenuOpen ? 'translate-x-0 w-64 shadow-xl' : '-translate-x-full w-64'} 
                        md:translate-x-0 md:w-20 md:hover:w-64 group overflow-y-auto overflow-x-hidden`}>
        
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start items-center mb-8">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden group-hover:inline-block md:inline-block text-2xl font-bold text-forum-lavender"
          >
            TextForum
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="group-hover:hidden md:hidden text-3xl font-bold text-forum-lavender"
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
                    <span className="opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-300">
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
          <div className="flex flex-col items-center justify-between space-y-4">
            <ThemeToggle />
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-destructive transition-colors group/btn w-full mt-4"
            >
              <LogOut className="w-5 h-5 group-hover/btn:text-destructive" />
              <span className="opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity duration-300 group-hover/btn:text-destructive">
                Logout
              </span>
            </motion.button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
