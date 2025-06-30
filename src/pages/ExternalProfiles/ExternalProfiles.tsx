import { motion } from 'framer-motion';

import { profiles } from './data';
import InfoCard from '../../components/reusable/InfoCard';

const ExternalProfiles = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">External Professional Profiles</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {profiles.map((profile, index) => (
          <InfoCard
            key={profile.name}
            type="link"
            link={profile.link}
            title={profile.name}
            description={profile.description}
            index={index}
            Icon={profile.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ExternalProfiles;
