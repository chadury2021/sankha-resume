import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      {/* Hamburger for mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100  lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {/* Centered container for sidebar + content */}
      <div className={!isHomePage ? 'container py-10 w-full flex gap-x-14 h-full' : ''}>
        {!isHomePage && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
