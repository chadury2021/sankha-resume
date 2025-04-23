import { motion } from 'framer-motion';

import { experiences, futureRole } from './data';

const Experience = () => {
  return (
    <div className="py-12">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">Professional Experience</h1>
          <p className="section-subtitle text-center text-balance">
            Below is a concise, year-by-year timeline that integrates Dr. Sankha Banerjee’s academic
            milestones, professional transitions, and blockchain-related contributions.
          </p>
        </motion.div>

        {/* Timeline for medium-large screens */}
        <div className="mt-12 max-w-5xl mx-auto hidden md:block">
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative z-10 mb-20 flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline bullet */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white z-20"></div>

                {/* Year bubble - positioned outside the card */}
                <div
                  className={`absolute left-1/2 transform ${
                    index % 2 === 0 ? '-translate-x-[calc(100%+20px)]' : 'translate-x-[20px]'
                  } top-0 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full z-20 whitespace-nowrap`}
                >
                  {exp.period}
                </div>

                {/* Content card */}
                <div className={`w-[45%] ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    {exp.topics.map((topic, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-bold text-primary mb-1 mt-3">{topic.title}</h3>
                        <div className="space-y-2 mb-4">
                          {topic.descriptions.map((item, i) => (
                            <p key={i} className="text-gray-600 text-sm flex items-start">
                              <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                              <span>{item}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Future Position */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: experiences.length * 0.2, duration: 0.6 }}
              className="relative z-10 mb-20 flex items-center flex-row"
            >
              {/* Timeline bullet */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-secondary border-4 border-white z-20"></div>

              {/* Date bubble */}
              <div className="absolute left-1/2 transform -translate-x-[calc(100%+20px)] top-0 bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full z-20 whitespace-nowrap">
                {futureRole.period}
              </div>

              {/* Content card */}
              <div className="w-[45%] mr-auto pr-8">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-2 border-secondary/20">
                  <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full mb-2">
                    Future Role
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-1">{futureRole.title}</h3>
                  <div className="space-y-2">
                    {futureRole.description.map((item, i) => (
                      <p key={i} className="text-gray-600 text-sm flex items-start">
                        <span className="text-secondary mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile timeline view */}
        <div className="mt-12 max-w-md mx-auto md:hidden">
          <div className="relative">
            {/* Timeline left line */}
            <div className="absolute left-4 top-0 h-full w-1 bg-primary/20"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative z-10 mb-10 pl-16"
              >
                {/* Timeline bullet */}
                <div className="absolute left-4 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white z-20"></div>

                {/* Year bubble - positioned left of the card */}
                <div className="absolute left-10 top-0 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full z-20">
                  {exp.period}
                </div>

                {/* Content card */}
                <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow mt-10">
                  {exp.topics.map((topic, index) => (
                    <div className="mt-3" key={index}>
                      <h3 className="text-lg font-bold text-primary mb-1">{topic.title}</h3>
                      <div className="space-y-2">
                        {topic.descriptions.map((item, i) => (
                          <p key={i} className="text-gray-600 text-xs flex items-start">
                            <span className="text-primary mr-2 mt-0.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Future Position - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: experiences.length * 0.2, duration: 0.6 }}
              className="relative z-10 mb-10 pl-16"
            >
              {/* Timeline bullet */}
              <div className="absolute left-4 transform -translate-x-1/2 w-5 h-5 rounded-full bg-secondary border-4 border-white z-20"></div>

              {/* Date bubble */}
              <div className="absolute left-10 top-0 bg-secondary text-white text-sm font-medium px-3 py-1 rounded-full z-20">
                {futureRole.period}
              </div>

              {/* Content card */}
              <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border-2 border-secondary/20 mt-10">
                <div className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-xs rounded-full mb-2 mt-4">
                  Future Role
                </div>
                <h3 className="text-lg font-bold text-secondary mb-1">{futureRole.title}</h3>
                <div className="space-y-2">
                  {futureRole.description.map((item, i) => (
                    <p key={i} className="text-gray-600 text-xs flex items-start">
                      <span className="text-secondary mr-2 mt-0.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/*<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">*/}
        {/*  <motion.div*/}
        {/*    initial={{ opacity: 0, x: -30 }}*/}
        {/*    animate={{ opacity: 1, x: 0 }}*/}
        {/*    transition={{ delay: 0.8, duration: 0.6 }}*/}
        {/*    className="bg-white rounded-lg shadow-md p-6"*/}
        {/*  >*/}
        {/*    <h2 className="text-2xl font-bold text-primary mb-6">Key Academic Publications</h2>*/}
        {/*    <div className="space-y-4">*/}
        {/*      {publications.map((pub, index) => (*/}
        {/*        <div key={index} className="pb-4 border-b border-gray-100 last:border-0">*/}
        {/*          <h3 className="text-lg font-semibold text-gray-800 mb-1">{pub.title}</h3>*/}
        {/*          <p className="text-gray-600 text-sm mb-1">{pub.journal}</p>*/}
        {/*          <p className="text-gray-600 text-sm mb-1">{pub.coauthors}</p>*/}
        {/*          <p className="text-gray-500 text-sm">{pub.year}</p>*/}
        {/*        </div>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </motion.div>*/}

        {/*  <motion.div*/}
        {/*    initial={{ opacity: 0, x: 30 }}*/}
        {/*    animate={{ opacity: 1, x: 0 }}*/}
        {/*    transition={{ delay: 0.8, duration: 0.6 }}*/}
        {/*    className="bg-white rounded-lg shadow-md p-6"*/}
        {/*  >*/}
        {/*    <h2 className="text-2xl font-bold text-primary mb-6">Career Trajectory</h2>*/}
        {/*    <p className="text-gray-700 mb-4">*/}
        {/*      Dr. Banerjee has crafted a unique career path that spans academic research,*/}
        {/*      quantitative finance, and blockchain technology. His journey demonstrates how rigorous*/}
        {/*      mathematical training can be applied to emerging financial technologies.*/}
        {/*    </p>*/}
        {/*    <p className="text-gray-700 mb-4">*/}
        {/*      From his early work in fluid dynamics at MIT to his current role developing economic*/}
        {/*      models for Bitcoin staking, Dr. Banerjee has consistently worked at the intersection*/}
        {/*      of complex systems and practical applications.*/}
        {/*    </p>*/}
        {/*    <p className="text-gray-700">*/}
        {/*      Throughout his career, Dr. Banerjee has maintained connections to the academic*/}
        {/*      community while bringing research-grade rigor to industry applications in finance and*/}
        {/*      blockchain technology.*/}
        {/*    </p>*/}
        {/*  </motion.div>*/}
        {/*</div>*/}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            View Extended Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
