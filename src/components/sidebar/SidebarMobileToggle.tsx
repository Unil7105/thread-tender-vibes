
import React from 'react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import SidebarContent from './SidebarContent';
import SidebarOverlay from './SidebarOverlay';

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
  console.log("Mobile menu state:", isMobileMenuOpen); // Keep debugging log
  
  return (
    <>
      {/* Use the separate SidebarOverlay component for better control */}
      {isMobileMenuOpen && (
        <SidebarOverlay onClick={() => setIsMobileMenuOpen(false)} />
      )}
      
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent 
          side="left" 
          className="p-0 w-[75vw] max-w-[300px] border-r border-sidebar-border bg-[#f1effe] dark:bg-[#1E1E2F] dark:border-white/5 h-full overflow-y-auto shadow-lg dark:shadow-neon-glow/20 backdrop-blur-md z-50
                     transition-transform duration-300 ease-in-out data-[state=open]:translate-x-0 data-[state=closed]:translate-x-[-100%]"
        >
          {/* Removed the X button here */}
          <SidebarContent 
            isMobileMenuOpen={true}
            isCollapsed={false}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            toggleSidebar={toggleSidebar}
          />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SidebarMobileToggle;
