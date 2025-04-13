
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the initial theme on component mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  return (
    <>
      {isDarkMode ? (
        <Moon className="w-5 h-5 text-forum-lavender" strokeWidth={2} />
      ) : (
        <Sun className="w-5 h-5 text-forum-lavender" strokeWidth={2} />
      )}
    </>
  );
};

export default ThemeToggle;
