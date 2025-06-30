import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-between h-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="w-min pl-20"
      >
        <h1 className="font-shuriken text-[2.5rem] mb-6 whitespace-nowrap">DR. sankha banerjee</h1>
        <p className="mb-3">Crypto‑economic architect and engineering leader who:</p>
        <p className="mb-3">
          Built and ran $1B+ weekly trading & market‑making systems on BitMEX and Binance.
        </p>
        <p className="mb-8">
          Bridged Citadel‑level quantitative finance with DeFi, designing Bitcoin staking (Babylon)
          and cross‑chain liquidity models at Thorchain. Currently heading research at Lombard.
        </p>
        <Link
          to="/experience"
          className="inline-flex items-center h-9 px-3 rounded-lg text-white bg-gradient-to-b from-[#04D9D9] to-[#17A0BF]"
        >
          AI & Crypto Systems Architect
        </Link>
      </motion.div>

      <img
        className="h-full object-cover w-[600px]"
        src="/profile2.png"
        alt="Dr. Sankha Banerjee"
      />
    </div>
  );
};

export default Home;
