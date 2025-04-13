
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
      {icon}
      <span className="absolute right-full mr-3 rounded-md bg-black/80 text-white px-2 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};

export default FloatingActionButton;
