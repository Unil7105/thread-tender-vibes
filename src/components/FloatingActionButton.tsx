
import { ReactNode } from 'react';
import { Plus } from 'lucide-react';

interface FloatingActionButtonProps {
  label: string;
  icon?: ReactNode;
  onClick: () => void;
}

const FloatingActionButton = ({
  label,
  icon = <Plus className="w-6 h-6" />,
  onClick,
}: FloatingActionButtonProps) => {
  return (
    <button
      className="floating-action-button group"
      onClick={onClick}
      aria-label={label}
    >
      <div className="relative z-10 flex items-center justify-center">
        {icon}
      </div>
      <span className="absolute right-full mr-3 rounded-lg bg-black/80 backdrop-blur-md text-white px-3 py-1.5 text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-md">
        {label}
      </span>
      
      {/* Gradient ripple effect */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/20 animate-ping"></span>
    </button>
  );
};

export default FloatingActionButton;
