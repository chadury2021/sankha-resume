import { motion } from 'framer-motion';

import InfoCard from '../../components/reusable/InfoCard.tsx';

const data = [
  {
    name: 'PhD in Applied Mathematics',
    description: 'Massachusetts Institute of Technology',
    icon: <img src="/External/mit.png" alt="mit" />,
    link: 'https://www.mit.edu/',
    linkTitle: 'mit.edu',
  },
  {
    name: 'MS in Computer Science',
    description: 'FAU, Germany',
    icon: <img src="/External/fau.png" alt="fau" />,
    link: 'https://www.fau.eu/',
    linkTitle: 'fau.eu',
  },
  {
    name: 'BE in Computer Science',
    description: 'TUM, Germany',
    icon: <img src="/External/tum.png" alt="tum" />,
    link: 'https://www.tum.de/en/',
    linkTitle: 'tum.de',
  },
];

const Education = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-sm">Education</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-y-8"
      >
        {data.map((item, index) => (
          <InfoCard
            key={index}
            type="link"
            link={item.link}
            linkTitle={item.linkTitle}
            title={item.name}
            description={item.description}
            index={index}
            Icon={item.icon}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
