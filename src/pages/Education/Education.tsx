import { motion } from 'framer-motion';

import DateCard from '../../components/reusable/DateCard';

const data = [
  {
    date: '2007-2012',
    items: [
      {
        title: 'PhD in Applied Mathematics',
        description: 'Massachusetts Institute of Technology',
        Icon: <img src="/External/mit.png" alt="mit" />,
        link: 'https://www.mit.edu/',
      },
      {
        title: 'MS in Computer Science',
        description: 'FAU, Germany',
        Icon: <img src="/External/fau.png" alt="fau" />,
        link: 'https://www.fau.eu/',
      },
    ],
  },
  {
    date: '2007-2012',
    items: [
      {
        title: 'BE in Computer Science',
        description: 'TUM, Germany',
        Icon: <img src="/External/tum.png" alt="tum" />,
        link: 'https://www.tum.de/en/',
      },
    ],
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
        {data.map(({ date, items }, index) => (
          <DateCard key={index} date={date} index={index} items={items} equalCols />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-y-8"
      >
        {data.map(({ date, items }, index) => (
          <DateCard key={index} date={date} index={index} items={items} equalCols type="link" />
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
