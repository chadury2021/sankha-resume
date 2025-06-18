import { motion } from 'framer-motion';

import { whyTheMapEnduresData } from './data';

const Achievements = () => {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">Achievements</h1>
          <p className="section-subtitle text-center">Explore Achievements</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-sm p-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-700">
            <b>
              Dr. Banerjee’s barycentric map has become NASA’s Rosetta Stone for turbulence
              anisotropy—translating raw Reynolds stresses into a language equally legible to
              physicists, CFD code developers, and machine-learning algorithms.
            </b>
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Why the Map Endures</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="list-decimal pl-6 space-y-2">
              {whyTheMapEnduresData.map(({ title, description }) => (
                <li key={title}>
                  <b>{title}: </b>
                  <span>{description}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
