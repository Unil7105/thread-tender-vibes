import { Home, Compass, MessageSquare, User, LogOut, Menu, X, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
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
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/settings', icon: Settings, label: 'Settings' },
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
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-background/80 backdrop-blur-sm shadow-md border border-border"
        onClick={handleMobileMenuToggle}
        aria-label="Toggle menu"
      >
        <Menu className="w-5 h-5 text-foreground" />
      </button>

      {/* Desktop Toggle Button */}
      <button
        className="fixed bottom-4 left-4 z-50 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all duration-200"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isCollapsed 
          ? <Menu className="w-4 h-4" /> 
          : <X className="w-4 h-4" />}
      </button>

      {/* Mobile Sidebar Background Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside 
        id="sidebar"
        className={`fixed top-0 left-0 h-full z-40 md:sticky md:z-auto bg-background border-r border-border transition-all duration-200 ease-in-out
                 ${isMobileMenuOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'} 
                 md:translate-x-0 ${isCollapsed ? 'md:w-16' : 'md:w-64'} overflow-y-auto overflow-x-hidden`}
      >
        <div className="flex flex-col h-full py-6 px-3">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start items-center mb-6 px-2">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
                {isCollapsed ? 'T' : 'T'}
              </div>
              {!isCollapsed && (
                <span className="ml-2 text-lg font-semibold truncate">
                  TextForum
                </span>
              )}
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center py-2 px-3 rounded-md transition-colors text-sm font-medium
                    ${isActive 
                      ? 'bg-accent text-accent-foreground' 
                      : 'text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground'}`}
                  onClick={handleMobileMenuItemClick}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 truncate">
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto pt-4 border-t border-border space-y-2 px-2">
            {/* User Profile Section */}
            <div className="flex items-center gap-2 rounded-md p-2 bg-accent/20 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              
              {!isCollapsed && (
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium truncate">User Name</p>
                  <p className="text-xs text-muted-foreground truncate">user@example.com</p>
                </div>
              )}
            </div>
          
            {/* Theme Toggle */}
            <button 
              onClick={() => {
                const isDark = document.documentElement.classList.contains('dark');
                document.documentElement.classList.toggle('dark', !isDark);
                localStorage.setItem('theme', !isDark ? 'dark' : 'light');
              }}
              className="flex items-center w-full py-2 px-3 rounded-md text-sm text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground transition-colors"
            >
              <div className="w-4 h-4 shrink-0">
                <ThemeToggle />
              </div>
              
              {!isCollapsed && (
                <span className="ml-3 truncate">
                  Toggle theme
                </span>
              )}
            </button>
            
            {/* Logout Button */}
            <button
              className="flex items-center w-full py-2 px-3 rounded-md text-sm text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              {!isCollapsed && (
                <span className="ml-3 truncate">
                  Logout
                </span>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;