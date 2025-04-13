
import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import SidebarContent from './SidebarContent';

interface SidebarMobileToggleProps {
  isMobileMenuOpen: boolean;
  isCollapsed: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  toggleSidebar: () => void;
}

const SidebarMobileToggle: React.FC<SidebarMobileToggleProps> = ({ 
  isMobileMenuOpen, 
  isCollapsed,
  setIsMobileMenuOpen,
  toggleSidebar
}) => {
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-50 md:hidden h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:shadow-lg transition-all duration-300 dark:bg-[#1E1E2F]/70 dark:border-white/5 dark:hover:shadow-neon-glow/30"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5 text-foreground dark:text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="p-0 w-[75vw] max-w-[300px] border-r border-sidebar-border bg-[#f1effe] dark:bg-[#1E1E2F] dark:border-white/5 h-full overflow-y-auto shadow-lg dark:shadow-neon-glow/20 backdrop-blur-md"
      >
        <div className="absolute right-4 top-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-transparent hover:bg-white/10 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-4 w-4 text-muted-foreground dark:text-white/70" />
          </Button>
        </div>
        <SidebarContent 
          isMobileMenuOpen={true}
          isCollapsed={false}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          toggleSidebar={toggleSidebar}
        />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobileToggle;
