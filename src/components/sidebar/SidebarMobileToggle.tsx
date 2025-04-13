
import React from 'react';
import { Menu } from 'lucide-react';
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
}

const SidebarMobileToggle: React.FC<SidebarMobileToggleProps> = ({ 
  isMobileMenuOpen, 
  isCollapsed,
  setIsMobileMenuOpen 
}) => {
  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="fixed top-4 left-4 z-50 md:hidden h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="p-0 w-[75vw] max-w-[300px] border-r border-sidebar-border bg-sidebar overflow-y-auto"
      >
        <SidebarContent 
          isMobileMenuOpen={true}
          isCollapsed={false}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobileToggle;
