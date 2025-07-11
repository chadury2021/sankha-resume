import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { cn } from '../lib/utils.ts';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen">
      {/* Hamburger for mobile */}
      {!isHomePage && <Header open={sidebarOpen} setOpen={setSidebarOpen} />}
      {/* Centered container for sidebar + content */}
      <div
        className={cn({
          'container pt-6 lg:pt-10 w-full flex gap-x-[5.625rem] h-full': !isHomePage,
        })}
      >
        {!isHomePage && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
        <main
          className={cn('flex-1', {
            'pb-6 lg:pb-10': !isHomePage,
            'blur-sm pointer-events-none': sidebarOpen,
          })}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
