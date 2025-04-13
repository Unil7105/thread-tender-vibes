
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from '@/components/Layout';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold text-forum-lavender mb-4">404</h1>
        <p className="text-xl text-foreground mb-6">Oops! We couldn't find the page you're looking for.</p>
        <Button asChild className="primary-gradient">
          <Link to="/" className="flex items-center">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
