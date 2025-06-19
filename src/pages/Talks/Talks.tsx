import { motion } from 'framer-motion';
import { KeyboardEvent } from 'react';

import { talks } from './data';

const Talks = () => {
  const handleVideoClick = (url: string) => {
    window.open(url, '_blank');
  };

  const handleKeyPress = (event: KeyboardEvent, url: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleVideoClick(url);
    }
  };

  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">Talks & Media</h1>
          <p className="section-subtitle text-center">Explore presentations and discussions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group"
            >
              <button
                className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                onClick={() => handleVideoClick(talk.youtubeUrl)}
                onKeyDown={e => handleKeyPress(e, talk.youtubeUrl)}
                aria-label={`Watch video: ${talk.title}`}
              >
                <div className="relative aspect-video">
                  <img src={talk.thumbnailUrl} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-8 h-8 text-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                    {talk.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {talk.title}
                  </h3>
                  {!!talk.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">{talk.description}</p>
                  )}
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talks;
