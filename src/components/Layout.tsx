
import { ReactNode } from 'react';
import { Sidebar } from './sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-0 md:pl-6 lg:pl-8 pt-16 md:pt-6 overflow-y-auto w-full transition-all duration-300">
        <div className="max-w-5xl mx-auto animate-fade-in relative px-4 md:px-6">
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
