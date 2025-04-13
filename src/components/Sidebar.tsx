
import { Home, Compass, MessageSquare, User, LogOut, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
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

  // Toggle sidebar collapsed state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.toggle('sidebar-collapsed');
    }
  };

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

      {/* Desktop Toggle Button */}
      <button
        className="fixed bottom-4 left-4 z-50 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-forum-lavender text-white shadow-md hover:bg-forum-lavender/90 transition-all duration-300"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isCollapsed 
          ? <Menu className="w-5 h-5" /> 
          : <X className="w-5 h-5" />}
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
        className={`fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out w-60
                 ${isMobileMenuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'} 
                 md:translate-x-0 ${isCollapsed ? 'md:w-16' : 'md:w-60'} overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start items-center h-16">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isCollapsed ? 0 : 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-xl font-bold text-forum-lavender whitespace-nowrap ${isCollapsed ? 'hidden md:hidden' : 'block'}`}
            >
              TextForum
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`text-xl font-bold text-forum-lavender ${!isCollapsed ? 'hidden md:hidden' : 'block'}`}
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
                    className={`flex items-center px-2 py-3 rounded-lg text-sidebar-foreground transition-colors
                      ${location.pathname === item.path 
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                        : 'hover:bg-sidebar-accent hover:text-sidebar-primary'}`}
                  >
                    <item.icon className="w-5 h-5 min-w-5" />
                    <span className={`ml-3 transition-all duration-300 whitespace-nowrap ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
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
              <div className="w-full flex items-center px-2 py-2 rounded-lg text-sidebar-foreground">
                <ThemeToggle />
                <span className={`ml-3 text-sm text-sidebar-foreground transition-all duration-300 whitespace-nowrap ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
                  Toggle theme
                </span>
              </div>
              
              {/* Logout Button */}
              <button
                className="w-full flex items-center px-2 py-3 rounded-lg text-sidebar-foreground hover:text-destructive transition-colors"
              >
                <LogOut className="w-5 h-5 min-w-5" />
                <span className={`ml-3 transition-all duration-300 whitespace-nowrap ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
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
