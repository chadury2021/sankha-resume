import { motion } from 'framer-motion';

import { experiences } from './data.tsx';
import DateCard from '../../components/reusable/DateCard.tsx';

const Experience = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 lg:mb-20"
      >
        <h1 className="section-title">Professional Experience</h1>
        <p className="text-sm mb-6 lg:mb-8">
          Below is a concise, year-by-year timeline that integrates Dr. Sankha Banerjee’s academic
          milestones, professional transitions, and blockchain-related contributions.
        </p>
        <a
          href="/sankha_banerjee.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center h-9 px-3 rounded-lg text-white bg-gradient-to-b from-[#04D9D9] to-[#17A0BF]"
        >
          View extended resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-y-8"
      >
        {experiences.map(({ date, items }, index) => (
          <DateCard key={index} date={date} index={index} items={items} />
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
