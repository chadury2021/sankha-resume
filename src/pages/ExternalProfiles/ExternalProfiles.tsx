import { motion } from 'framer-motion';

import { profiles } from './data';

const ExternalProfiles = () => {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">External Professional Profiles</h1>
          <p className="section-subtitle text-center">
            For more information, you can find Dr. Sankha Banerjee on several professional and
            academic platforms:
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4">{profile.icon}</div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                </div>
                <p className="text-gray-700 mb-6">{profile.description}</p>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block w-full text-center bg-primary text-white py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Visit Profile
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 bg-gray-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Professional Engagement</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Dr. Banerjee actively engages with the academic and professional communities through
            various platforms. His presence spans from academic profiles highlighting his MIT
            research to professional networks where he shares insights on blockchain technology and
            financial innovation.
          </p>
          <a href="mailto:todo" className="btn btn-primary">
            Contact Dr. Banerjee
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ExternalProfiles;
