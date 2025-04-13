import { ReactNode } from 'react';
import Sidebar from './sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-4 pt-16 md:pt-4 md:p-6 lg:p-8 overflow-y-auto w-full transition-all duration-300">
        <div className="max-w-6xl mx-auto animate-fade-in relative">
          <div className="relative z-10">
            {children}
          </div>
          
          {/* Background decorative elements */}
          <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-forum-mint/10 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
          <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-forum-coral/10 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
