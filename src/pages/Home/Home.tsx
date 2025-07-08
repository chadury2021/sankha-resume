import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import LinkText from '../../components/reusable/LinkText.tsx';

const Home = () => {
  return (
    <div className="max-lg:pt-20 max-lg:gap-y-8 flex flex-col items-start justify-between h-screen relative  lg:flex-row lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="lg:w-min px-6 lg:pr-0 lg:pl-20 max-lg:leading-none"
      >
        <h1 className="font-shuriken text-2xl lg:text-[2.5rem] mb-6 whitespace-nowrap lg:pl-0 lg:pr-32 2xl:px-0">
          DR. sankha <br className="max-lg:hidden 2xl:hidden" />
          banerjee
        </h1>
        <p className="mb-3 highlighted-text font-medium">
          Technical Leader bridging quantitative finance with decentralized protocols.
        </p>
        <p className="mb-3 text-sm">
          Expertise spans distributed systems architecture, quantitative modeling, and protocol
          design.
        </p>
        <p className="mb-3 text-sm">
          Built and scaled $1B+ weekly trading infrastructure across BitMEX and Binance.
        </p>
        <p className="mb-8 text-sm">
          Currently driving protocol research at{' '}
          <LinkText url="https://www.lombard.finance/" title="Lombard" /> while pioneering
          cross-chain financial primitives—Bitcoin staking (
          <LinkText url="https://babylonlabs.io/" title="Babylon protocol" />) to liquidity
          optimization models (<LinkText url="https://thorchain.org/" title="Thorchain" />
          ).
        </p>
        <Link
          to="/experience"
          className="text-sm font-medium inline-flex items-center h-9 px-3 rounded-lg text-white bg-gradient-to-b from-[#04D9D9] to-[#17A0BF]"
        >
          AI & Crypto Systems Architect
        </Link>
      </motion.div>

      <img
        className="lg:h-full object-cover w-full 2xl:w-[600px] lg:w-[480px]"
        src="/profile2.png"
        alt="Dr. Sankha Banerjee"
      />
    </div>
  );
};

export default Home;
