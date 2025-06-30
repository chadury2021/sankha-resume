import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { cn } from '../lib/utils.ts';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      {/* Hamburger for mobile */}
      <Header open={sidebarOpen} setOpen={setSidebarOpen} />
      {/* Centered container for sidebar + content */}
      <div className={!isHomePage ? 'container pt-6 lg:pt-10 w-full flex gap-x-14 h-full' : ''}>
        {!isHomePage && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
        <main className={cn('flex-1 pb-6 lg:pb-10', { 'blur-sm': sidebarOpen })}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
