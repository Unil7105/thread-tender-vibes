
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the initial theme on component mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldUseDark);
    
    // Apply the theme to the document
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save the preference
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Toggle the class on document
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="relative overflow-hidden p-1.5 rounded-full transition-all duration-300 hover:bg-accent/60 dark:hover:bg-white/10"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative z-10 transition-transform duration-500 ease-in-out">
        {isDarkMode ? (
          <Moon className="w-5 h-5 text-forum-lavender dark:text-forum-cyan" strokeWidth={2} />
        ) : (
          <Sun className="w-5 h-5 text-forum-lavender" strokeWidth={2} />
        )}
      </div>
      <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-forum-magenta/30 to-forum-lavender/20 rounded-full blur-sm"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
