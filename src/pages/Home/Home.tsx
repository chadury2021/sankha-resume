import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="transition-colors duration-300">
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-md"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Dr. Sankha Banerjee
              </h1>
              <p className="text-xl mb-8">
                MIT-affiliated researcher | Finance & Blockchain Expert | Chief Protocol Economist
                at Babylon
              </p>
              <Link
                to="/about"
                className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg inline-block"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-xs md:max-w-sm"
            >
              <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-2 shadow-xl">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Dr. Sankha Banerjee"
                  className="w-full h-auto rounded-xl object-cover aspect-[3/4]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 transition-colors duration-300">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Professional Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {`From academic research in fluid dynamics to pioneering work in blockchain economics,
              explore Dr. Banerjee's journey at the intersection of mathematics, finance and
              technology`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} className="card animate-fade-in">
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998a12.078 12.078 0 00-.665-6.479L12 14z"></path>
                  </svg>
                </div>
                <h3 className="card-title">Academic Background</h3>
                <p className="card-text mb-4">
                  Ph.D. in Applied Mathematics from MIT with expertise in computational fluid
                  dynamics and machine learning applications to non-linear systems.
                </p>
                <Link to="/about" className="text-secondary font-medium hover:underline">
                  View Details &rarr;
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                  </svg>
                </div>
                <h3 className="card-title">Research & Expertise</h3>
                <p className="card-text mb-4">
                  Specialized in blockchain economics, DeFi infrastructure, quantitative finance,
                  and high-frequency trading systems with institutional-grade approaches.
                </p>
                <Link to="/research" className="text-secondary font-medium hover:underline">
                  View Details &rarr;
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="card animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="card-body">
                <div className="text-primary mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 11h-4a1 1 0 00-1 1v7a1 1 0 001 1h4a1 1 0 001-1v-7a1 1 0 00-1-1zM7 5H6a2 2 0 00-2 2v.12l1.027.871a1.306 1.306 0 010 1.818L4 10.88V11h2a1 1 0 001-1V6a1 1 0 00-1-1z"></path>
                    <path d="M18 5h-1a1 1 0 00-1 1v4a1 1 0 001 1h2v-.12l-1.027-.871a1.306 1.306 0 010-1.818L19 7.12V7a2 2 0 00-1-2z"></path>
                    <path d="M13.5 17.5L14.5 16H14a1 1 0 01-1-1v-2.8l-2 2.4V15a1 1 0 01-1 1h-.5l1 1.5 1 1.5zM13.5 11.5L12 8l-1.5 3.5 1.5 1.5 1.5-1.5z"></path>
                  </svg>
                </div>
                <h3 className="card-title">Career Evolution</h3>
                <p className="card-text mb-4">
                  Traced a unique path from MIT academic research to Wall Street quantitative
                  finance to blockchain technology leadership at Thorchain and Babylon.
                </p>
                <Link to="/experience" className="text-secondary font-medium hover:underline">
                  View Details &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 transition-colors duration-300">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Current Role</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {`As Chief Protocol Economist at Babylon Chain, Dr. Banerjee is working on innovative
              economic models that leverage Bitcoin's security to bolster Proof-of-Stake networks,
              allowing Bitcoin holders to stake their BTC and earn yields on partner networks.`}
            </p>
          </div>

          <div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  alt="Bitcoin on networks"
                  className="rounded-lg w-full h-auto shadow-sm"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-primary mb-3">Bitcoin Staking Innovation</h3>
                <p className="text-gray-600 mb-4">
                  {`Dr. Banerjee's work focuses on creating mechanisms that allow Bitcoin holders to
                  earn higher yields (potentially 6–10% returns) by securing other blockchains,
                  compared to the ~1% typical on traditional Bitcoin lending platforms.`}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-all duration-300">
                    Bitcoin
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-all duration-300">
                    DeFi
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-all duration-300">
                    Staking
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm transition-all duration-300">
                    Blockchain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
