import { ReactComponent as LinkedinWhiteIcon } from '../../assets/linkedin-white.svg';
import { ReactComponent as XWhiteIcon } from '../../assets/x-white.svg';

export const profiles = [
  {
    name: 'Personal Website',
    icon: <img src="/External/personal.png" alt="personal" />,
    description:
      'Personal profile and blog (includes biography, project updates, and contact information).',
    link: 'https://sankhabanerjee.info',
  },
  {
    name: 'MIT Alumni Profile',
    icon: <img src="/External/mit.png" alt="mit" />,
    description: 'Academic profile listing his affiliations and publications.',
    link: 'https://mit.academia.edu/SankhaBanerjee',
  },
  {
    name: 'Google Scholar',
    icon: <img src="/External/gscholar.png" alt="google-scholar" />,
    description: 'Citation profile with a list of publications and research metrics.',
    link: 'https://scholar.google.com/citations?user=i_U5uG0AAAAJ',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinWhiteIcon />,
    description:
      'Professional resume including his industry experience in finance and blockchain (MIT Sloan and MIT alum).',
    link: 'https://www.linkedin.com/in/sankha-banerjee-8a04419',
  },
  {
    name: 'Medium',
    icon: <img src="/External/medium.png" alt="medium" />,
    description:
      'Long-form essays and technical articles on technology, finance, and research topics.',
    link: 'https://medium.com/@sankha80',
  },
  {
    name: 'Substack',
    icon: <img src="/External/substack.png" alt="substack" />,
    description:
      'Newsletter platform for regular updates, insights, and commentary on current research and industry trends.',
    link: 'https://substack.com/@sankhabanerjee',
  },
  {
    name: 'Twitter/X',
    icon: <XWhiteIcon />,
    description:
      'Social media presence where he shares commentary on technology, finance, and crypto.',
    link: 'https://x.com/BanerjeSankha',
  },
  {
    name: 'Babylon Project Profile',
    icon: <img src="/Experience/babylon.webp" alt="babylon" />,
    description:
      'Features updates and articles where Banerjee’s role and insights (as Chief Protocol Economist) are frequently mentioned.',
    link: 'https://babylonlabs.io/blog',
  },
];
