
import React from 'react';

const LayoutBackground: React.FC = () => {
  return (
    <>
      {/* Background decorative elements */}
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
    </>
  );
};

export default LayoutBackground;
