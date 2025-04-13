
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Import the layout component directly using ESM imports
import LayoutComponent from './layout/Layout';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  return <LayoutComponent children={children} pageTitle={pageTitle} />;
};

export default Layout;
