
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

  // Close mobile menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      if (isMobileMenuOpen && sidebar && !sidebar.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

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
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-sidebar shadow-md border border-sidebar-border"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
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
      <aside 
        id="sidebar"
        className={`fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-sidebar border-r border-sidebar-border transform transition-transform duration-300 ease-in-out
                 ${isMobileMenuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'} 
                 md:translate-x-0 md:w-16 md:hover:w-64 group overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start items-center h-16">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:group-hover:inline-block text-xl font-bold text-forum-lavender whitespace-nowrap"
            >
              TextForum
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:group-hover:hidden text-xl font-bold text-forum-lavender"
            >
              Tf
            </motion.span>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 mt-6">
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
                    className={`flex items-center space-x-3 px-2 py-3 rounded-lg text-sidebar-foreground group/link
                      ${location.pathname === item.path 
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                        : 'hover:bg-sidebar-accent hover:text-sidebar-primary'}`}
                  >
                    <item.icon className="w-5 h-5 min-w-5" />
                    <span className="opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t border-sidebar-border">
            <div className="flex flex-col items-center space-y-4">
              {/* Theme Toggle */}
              <div className="w-full flex justify-center md:justify-start items-center group/theme">
                <ThemeToggle />
                <span className="ml-3 text-sm text-sidebar-foreground opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Toggle theme
                </span>
              </div>
              
              {/* Logout Button */}
              <button
                className="w-full flex items-center space-x-3 px-2 py-3 rounded-lg text-sidebar-foreground hover:text-destructive transition-colors group/btn"
              >
                <LogOut className="w-5 h-5 min-w-5" />
                <span className="opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Logout
                </span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
