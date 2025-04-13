
import { ReactNode, useEffect, useState } from 'react';
import { Sidebar } from './sidebar';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    const sidebar = document.getElementById('sidebar');
    
    if (!sidebar) return;
    
    // Create observer to watch for data-state attribute changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const sidebarEl = mutation.target as HTMLElement;
          const isCurrentlyCollapsed = sidebarEl.classList.contains('w-16') || 
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
    <div className="flex min-h-screen bg-gradient-to-b from-background to-background/95 dark:from-[#0D1321] dark:to-[#161b29]">
      {/* Sidebar container */}
      <div className="flex-shrink-0">
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
      </div>
      
      {/* Main content area - flexible width with transition */}
      <main 
        className={`flex-grow overflow-x-hidden transition-all duration-300 ease-in-out
                   ${isCollapsed ? 'ml-0 md:ml-16' : 'ml-0 md:ml-64'}`}
      >
        {/* Sticky header */}
        <div 
          className={`sticky top-0 z-30 w-full px-4 py-3 bg-background/80 backdrop-blur-md transition-all duration-300 
                    flex items-center justify-between
                    dark:bg-[#0D1321]/80 dark:border-b dark:border-white/5
                    ${isScrolled ? 'shadow-md dark:shadow-neon-glow/10' : ''}`}
        >
          <div className="flex items-center gap-3">
            {/* Redesigned Mobile menu button with improved styling */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 rounded-md bg-gradient-to-br from-[#EDE9FE] to-[#E5DEFF] dark:from-[#2D2B42] dark:to-[#252340] hover:scale-105 transition-all duration-200 shadow-sm"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-sidebar"
            >
              <Menu className="h-5 w-5 text-[#7C3AED] dark:text-[#9b87f5]" />
            </Button>
            
            <h2 className="text-xl font-bold">{pageTitle || 'TextForum'}</h2>
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 relative">
          <div className="relative z-10">
            {children}
          </div>
          
          {/* Background decorative elements */}
          <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
          <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
