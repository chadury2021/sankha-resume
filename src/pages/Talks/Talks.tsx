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
    <div className="flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Talks and Media</h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[8.5rem] gap-y-10">
        {talks.map((talk, index) => (
          <motion.button
            key={talk.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            onClick={() => handleVideoClick(talk.youtubeUrl)}
            aria-label={`Watch video: ${talk.title}`}
            onKeyDown={e => handleKeyPress(e, talk.youtubeUrl)}
            className="rounded-lg flex w-full text-left gap-x-4 bg-white overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <div className="relative flex icon-box-wrapper rounded-lg">
              <img src={talk.thumbnailUrl} alt="thumbnail" className="w-full h-full object-cover" />
              <div className="absolute w-full h-full flex items-center justify-center">
                <svg
                  className="w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.5 4.8 a1 1 0 0 1 1.55-.83 l10.7 6.7 a1 1 0 0 1 0 1.66 l-10.7 6.7 a1 1 0 0 1-1.55-.83 V4.8z" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="highlighted-text text-xs">{talk.date}</span>
              <span className="text-sm dark-text">{talk.title}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Talks;
