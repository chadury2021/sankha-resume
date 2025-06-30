import { NavLink } from 'react-router-dom';

import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { ReactComponent as MessageIcon } from '../assets/message.svg';
import { ReactComponent as AboutIcon } from '../assets/Sidebar/about.svg';
import { ReactComponent as AchievementsIcon } from '../assets/Sidebar/achievements.svg';
import { ReactComponent as EducationIcon } from '../assets/Sidebar/education.svg';
import { ReactComponent as ExperienceIcon } from '../assets/Sidebar/experience.svg';
import { ReactComponent as ExternalIcon } from '../assets/Sidebar/external.svg';
import { ReactComponent as ResearchIcon } from '../assets/Sidebar/research.svg';
import { ReactComponent as TalksIcon } from '../assets/Sidebar/talks.svg';
import { ReactComponent as WritingsIcon } from '../assets/Sidebar/writings.svg';
import { ReactComponent as XMarkIcon } from '../assets/x-mark.svg';
import { ReactComponent as XIcon } from '../assets/x.svg';

const navLinks = [
  { path: '/about', name: 'About', Icon: <AboutIcon /> },
  { path: '/education', name: 'Education', Icon: <EducationIcon /> },
  { path: '/talks', name: 'Talks and Media', Icon: <TalksIcon /> },
  { path: '/writings', name: 'Writings', Icon: <WritingsIcon /> },
  { path: '/achievements', name: 'Achievements', Icon: <AchievementsIcon /> },
  { path: '/research', name: 'Research Interests', Icon: <ResearchIcon /> },
  { path: '/experience', name: 'Experience', Icon: <ExperienceIcon /> },
  { path: '/external-profiles', name: 'External Profiles', Icon: <ExternalIcon /> },
];

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <aside
      className={`lg:max-h-[calc(100vh-2.5rem)] overflow-y-auto max-lg:w-[309px] w-[216px] max-lg:p-5 bg-white lg:top-10 flex flex-col h-full max-w-full fixed right-0 top-0 lg:sticky z-40 transition-transform duration-300 lg:translate-x-0
        ${open ? 'translate-x-0' : 'translate-x-full'}
        lg:translate-x-0`}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-start">
        <div className="flex items-center justify-between mb-6 w-full">
          <img
            src="/profile.png"
            alt="Sankha Banerjee"
            className="w-[100px] h-[100px] rounded-2xl max-lg:rounded-lg object-cover max-lg:w-10 max-lg:h-10"
          />
          <button className="lg:hidden" onClick={() => setOpen(false)} aria-label="Toggle sidebar">
            <XMarkIcon />
          </button>
        </div>
        <h1 className="title mb-2 text-xl tracking-normal">Sankha Banerjee</h1>
        <span className="mb-2">MIT-affiliated researcher</span>
        <span className="mb-6">Finance & Blockchain Expert</span>
        <p className="text-sm">
          My expertise centers around crafting sophisticated economic models, forging impactful
          strategic partnerships, and spearheading comprehensive go-to-market strategies for our
          diverse array of products.
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 lg:py-24">
        <ul className="space-y-3">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex gap-x-2 items-center rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#1A1A1A] '
                      : 'text-[#606060] [&>svg]:text-[#D1D1D1] hover:text-[#1A1A1A]'
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.Icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links & Footer */}
      <div className="mt-auto lg:pb-8">
        <div className="flex space-x-5 mb-6">
          <a
            href="https://www.linkedin.com/in/sankha-banerjee-8a04419"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://x.com/BanerjeSankha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <XIcon />
          </a>
          <a href="mailto:sankha80@gmail.com" aria-label="Email">
            <MessageIcon />
          </a>
        </div>
        <div className="text-[10px]">Sankha Banerjee © {currentYear}. All Rights Reserved</div>
      </div>
    </aside>
  );
};

export default Sidebar;
