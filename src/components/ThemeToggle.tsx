
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 transition-all duration-500 overflow-hidden relative shadow-md border border-sidebar-border"
    >
      <div className={`absolute inset-0 transition-all duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-indigo-700 to-purple-900 opacity-50"></div>
        <Moon className="h-5 w-5 text-yellow-300 relative z-10" />
      </div>
      
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-orange-300 to-yellow-200 opacity-50"></div>
        <Sun className="h-5 w-5 text-yellow-600 relative z-10" />
      </div>
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
