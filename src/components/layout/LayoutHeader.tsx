
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
      className={`sticky top-0 z-30 w-full px-4 py-3 bg-background/80 backdrop-blur-md transition-all duration-300 
                flex items-center justify-between
                dark:bg-[#0D1321]/80 dark:border-b dark:border-white/5
                ${isScrolled ? 'shadow-md dark:shadow-neon-glow/10' : ''}`}
    >
      <div className="flex items-center gap-3">
        {/* Mobile menu button with improved styling */}
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
  );
};

export default LayoutHeader;
