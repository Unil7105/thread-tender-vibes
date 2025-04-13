
import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-background to-background/95 dark:from-[#0D1321] dark:to-[#161b29]">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area with proper margin that adjusts based on sidebar state */}
      <main className="flex-grow transition-all duration-300 ease-in-out w-full md:ml-[72px] relative">
        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 relative">
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
