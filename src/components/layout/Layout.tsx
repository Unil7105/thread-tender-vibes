
import { ReactNode, useEffect, useState } from 'react';
import { Sidebar } from '../sidebar';
import { cn } from '@/lib/utils';
import LayoutHeader from './LayoutHeader';
import LayoutBackground from './LayoutBackground';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll to create sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-background to-background/95 dark:from-[#0D1321] dark:to-[#161b29]">
      {/* Sidebar */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />
      
      {/* Main content area with proper margin that adjusts based on sidebar state */}
      <main 
        className="flex-grow transition-all duration-300 ease-in-out w-full"
      >
        {/* Sticky header */}
        <LayoutHeader 
          pageTitle={pageTitle}
          isScrolled={isScrolled}
          toggleMobileMenu={toggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 relative">
          <div className="relative z-10">
            {children}
          </div>
          
          <LayoutBackground />
        </div>
      </main>
    </div>
  );
};

export default Layout;
