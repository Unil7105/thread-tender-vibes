
import { Home, Compass, MessageSquare, User, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/explore', icon: Compass, label: 'Explore' },
    { path: '/my-threads', icon: MessageSquare, label: 'My Threads' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <aside className="w-20 md:w-64 h-screen sticky top-0 left-0 overflow-y-auto bg-sidebar p-5 border-r transform transition-all duration-300">
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start items-center mb-8">
          <span className="hidden md:inline-block text-2xl font-bold text-forum-lavender">
            TextForum
          </span>
          <span className="md:hidden text-3xl font-bold text-forum-lavender">
            Tf
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-item ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="hidden md:inline-block">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto pt-6 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <ThemeToggle />
            <Link 
              to="/settings" 
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="hidden md:inline-block">Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
