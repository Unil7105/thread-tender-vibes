
import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
  pageTitle?: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  // Import and use the Layout component from layout folder
  const LayoutComponent = require('./layout/Layout').default;
  return <LayoutComponent children={children} pageTitle={pageTitle} />;
};

export default Layout;
