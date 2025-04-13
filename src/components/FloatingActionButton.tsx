
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
      className="floating-action-button"
      onClick={onClick}
      aria-label={label}
    >
      <div className="relative z-10 flex items-center justify-center">
        {icon}
      </div>
      <span className="absolute right-full mr-3 rounded-lg bg-black/80 text-white px-3 py-1.5 text-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap shadow-md dark:bg-[#1C1F2A]">
        {label}
      </span>
    </button>
  );
};

export default FloatingActionButton;
