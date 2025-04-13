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
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('sidebar');
      const mobileToggle = document.getElementById('mobile-toggle');
      
      // Don't close if clicking on the toggle button itself
      if (mobileToggle && mobileToggle.contains(event.target)) {
        return;
      }
      
      if (isMobileMenuOpen && sidebar && !sidebar.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
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

  // Handle mobile menu toggle with a specific handler
  const handleMobileMenuToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Handle mobile menu item click to close the menu
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button 
        id="mobile-toggle"
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-sidebar shadow-md border border-sidebar-border"
        onClick={handleMobileMenuToggle}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? 
          <X className="w-5 h-5 text-sidebar-foreground" /> :
          <Menu className="w-5 h-5 text-sidebar-foreground" />
        }
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
        className={`fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out
                 ${isMobileMenuOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'} 
                 md:translate-x-0 ${isCollapsed ? 'md:w-20' : 'md:w-64'} overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo Section with Mobile Close Button */}
          <div className="flex justify-between items-center h-16 mb-2">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-forum-lavender text-white">
                {isCollapsed ? 'Tf' : 'T'}
              </div>
              {!isCollapsed && (
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-3 text-xl font-bold text-forum-lavender whitespace-nowrap"
                >
                  TextForum
                </motion.span>
              )}
            </motion.div>
            
            {/* Mobile Close Button Inside Sidebar */}
            <button 
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 mt-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.li 
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      className={`group flex items-center px-3 py-2.5 rounded-lg transition-colors relative
                        ${isActive 
                          ? 'text-white' 
                          : 'text-sidebar-foreground hover:text-white'}`}
                      onClick={handleMobileMenuItemClick}
                    >
                      {/* Active background with proper padding */}
                      {isActive && (
                        <span className="absolute inset-0 bg-forum-lavender rounded-lg" />
                      )}
                      
                      {/* Hover background */}
                      {!isActive && (
                        <span className="absolute inset-0 bg-sidebar-accent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                      )}
                      
                      {/* Icon and label */}
                      <span className="relative flex items-center">
                        <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-sidebar-foreground group-hover:text-white'}`} />
                        {!isCollapsed && (
                          <span className={`ml-3 transition-all duration-300 whitespace-nowrap ${isCollapsed ? 'w-0 opacity-0' : 'opacity-100'}`}>
                            {item.label}
                          </span>
                        )}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t border-sidebar-border">
            <div className="flex flex-col items-center space-y-3">
              {/* User Profile Section */}
              <div className="w-full group relative mb-3">
                <div className="flex items-center px-3 py-2 rounded-lg text-sidebar-foreground hover:text-white transition-colors relative">
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-sidebar-accent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                  
                  {/* Profile picture and username */}
                  <div className="relative flex items-center w-full">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-forum-lavender/20">
                      <img 
                        src="/path/to/profile-image.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/40';
                        }}
                      />
                    </div>
                    
                    {!isCollapsed && (
                      <div className="ml-3 flex-1 overflow-hidden">
                        <p className="font-medium truncate">User Name</p>
                        <p className="text-xs text-sidebar-foreground/70 truncate">user@example.com</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            
              {/* Theme Toggle */}
              <button 
                onClick={() => {
                  // We'll call the theme toggle functionality directly here
                  const isDark = document.documentElement.classList.contains('dark');
                  document.documentElement.classList.toggle('dark', !isDark);
                  localStorage.setItem('theme', !isDark ? 'dark' : 'light');
                }}
                className="w-full group relative"
              >
                <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sidebar-foreground hover:text-white transition-colors relative">
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-sidebar-accent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                  
                  {/* Icon container with fixed dimensions */}
                  <div className="relative flex items-center w-full">
                    <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-800">
                      <ThemeToggle />
                    </div>
                    
                    {!isCollapsed && (
                      <span className="ml-3 text-sm whitespace-nowrap">
                        Toggle theme
                      </span>
                    )}
                  </div>
                </div>
              </button>
              
              {/* Logout Button */}
              <div className="w-full group relative">
                <button
                  className="w-full flex items-center px-3 py-2.5 rounded-lg text-sidebar-foreground hover:text-destructive transition-colors relative"
                >
                  {/* Hover background */}
                  <span className="absolute inset-0 bg-sidebar-accent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
                  
                  {/* Icon and label */}
                  <span className="relative flex items-center w-full">
                    <LogOut className="w-5 h-5 text-sidebar-foreground group-hover:text-destructive" />
                    {!isCollapsed && (
                      <span className="ml-3 transition-all duration-300 whitespace-nowrap">
                        Logout
                      </span>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;