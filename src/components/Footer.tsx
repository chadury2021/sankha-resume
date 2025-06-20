import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Don't render footer on home page
  if (isHomePage) {
    return null;
  }

  return (
    <footer className="bg-primary text-white py-8 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-300 mb-4">
              A professional portfolio showcasing academic and research achievements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/talks" className="text-gray-300 hover:text-white transition-colors">
                  Talks & Media
                </Link>
              </li>
              <li>
                <Link
                  to="/achievements"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-300 hover:text-white transition-colors">
                  Research Interests
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">*/}
              {/*    Courses*/}
              {/*  </Link>*/}
              {/*</li>*/}
              <li>
                <Link to="/experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <a
              href="mailto:sankha80@gmail.com"
              className="text-gray-300 hover:text-white transition-colors mb-2 block"
            >
              sankha80@gmail.com
            </a>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sankha-banerjee-8a04419"
                className="text-gray-300 hover:text-white transition-colors"
                rel="noreferrer"
                target="_blank"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://x.com/BanerjeSankha"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.195 10.195 0 01-3.126 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                </svg>
              </a>
              {/*<a*/}
              {/*  href="#"*/}
              {/*  className="text-gray-300 hover:text-white transition-colors"*/}
              {/*  target="_blank"*/}
              {/*>*/}
              {/*  <span className="sr-only">GitHub</span>*/}
              {/*  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
              {/*    <path*/}
              {/*      fillRule="evenodd"*/}
              {/*      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"*/}
              {/*      clipRule="evenodd"*/}
              {/*    />*/}
              {/*  </svg>*/}
              {/*</a>*/}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>© {currentYear} Professional Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
