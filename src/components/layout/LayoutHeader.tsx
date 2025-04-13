
import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutHeaderProps {
  pageTitle?: string;
  isScrolled: boolean;
  toggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const LayoutHeader: React.FC<LayoutHeaderProps> = ({
  pageTitle,
  isScrolled,
  toggleMobileMenu,
  isMobileMenuOpen
}) => {
  return (
    <div 
      className={`sticky top-0 z-30 w-full px-4 py-4 
                bg-background/90 backdrop-blur-md transition-all duration-300 
                flex items-center justify-between
                dark:bg-background/90 dark:border-b dark:border-border/20
                ${isScrolled ? 'shadow-soft dark:shadow-none' : ''}`}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-9 w-9 rounded-md bg-secondary/70 
                    hover:bg-secondary dark:bg-secondary/20 dark:hover:bg-secondary/30 
                    transition-colors duration-200"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-sidebar"
        >
          <Menu className="h-5 w-5 text-foreground opacity-80" />
        </Button>
        
        <h2 className="text-xl font-medium tracking-tight">{pageTitle || 'TextForum'}</h2>
      </div>
    </div>
  );
};

export default LayoutHeader;
