import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Don't render navbar on home page
  if (isHomePage) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { path: '/about', name: 'About' },
    { path: '/talks', name: 'Talks' },
    { path: '/achievements', name: 'Achievements' },
    { path: '/research', name: 'Research Interests' },
    { path: '/courses', name: 'Courses' },
    { path: '/external-profiles', name: 'External Profiles' },
    { path: '/experience', name: 'Experience' },
  ];

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 dark:border-b dark:border-gray-700">
      <div className="container py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-primary dark:text-secondary">
          Home
        </NavLink>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-secondary transition-colors ${
                  isActive
                    ? 'text-secondary font-medium dark:text-secondary'
                    : 'text-gray-700 dark:text-gray-200'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-white border-t dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-3">
            {links.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 hover:text-secondary transition-colors ${
                    isActive
                      ? 'text-secondary font-medium dark:text-secondary'
                      : 'text-gray-700 dark:text-gray-200'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
