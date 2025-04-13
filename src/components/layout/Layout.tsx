
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
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for sidebar state changes
  useEffect(() => {
    try {
      const savedState = localStorage.getItem('sidebarCollapsed');
      if (savedState !== null) {
        setIsCollapsed(JSON.parse(savedState));
      }
    } catch (error) {
      console.error('Error retrieving sidebar state from localStorage:', error);
    }
    
    const sidebar = document.getElementById('sidebar');
    
    if (!sidebar) return;
    
    // Create observer to watch for data-state attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const sidebarEl = mutation.target as HTMLElement;
          const isCurrentlyCollapsed = sidebarEl.classList.contains('w-[72px]') || 
                                  !sidebarEl.classList.contains('translate-x-0');
          setIsCollapsed(isCurrentlyCollapsed);
        }
      });
    });
    
    // Start observing
    observer.observe(sidebar, { attributes: true });
    
    // Cleanup
    return () => observer.disconnect();
  }, []);

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
        className={cn(
          "flex-grow transition-all duration-300 ease-in-out w-full",
          // Apply proper margin based on sidebar collapsed state
          isCollapsed ? "md:ml-[72px]" : "md:ml-[240px]",
          // No left margin on mobile (sidebar is overlay on mobile)
          "ml-0"
        )}
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
