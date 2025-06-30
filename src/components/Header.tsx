import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import { cn } from '../lib/utils.ts';

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Header = ({ open, setOpen }: HeaderProps) => {
  return (
    <div
      className={cn('lg:hidden sticky top-0 bg-white flex justify-between items-center p-5 z-40', {
        'blur-sm': open,
      })}
    >
      <img src="/profile.png" alt="Sankha Banerjee" className="rounded-lg object-cover w-10 h-10" />
      <button onClick={() => setOpen(!open)} aria-label="Toggle sidebar">
        <MenuIcon />
      </button>
    </div>
  );
};

export default Header;
