import { motion } from 'framer-motion';

import { publications } from './data.tsx';
import DateCard from '../../components/reusable/DateCard.tsx';

const ResearchInterests = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Research Interests & Specialization</h1>
      </motion.div>

      <motion.div
        className="text-sm"
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
        <p className="mb-4">
          Dr. Banerjee’s expertise spans{' '}
          <span className="highlighted-text">
            computational science, finance, and distributed systems
          </span>
          . In academia, his research focused on{' '}
          <span className="highlighted-text">fluid dynamics and turbulence</span>. He worked on
          fluid-structure interaction problems, using high-fidelity simulations and{' '}
          <span className="highlighted-text">invariant theory</span> to understand turbulence
          anisotropy. One of his specialty areas was the study of{' '}
          <span className="highlighted-text">non-linear dynamical systems</span> (for example, the
          flapping of flags in turbulent flow) and applying machine learning techniques to model and
          predict their behavior. His scholarly background is reflected in interests such as{' '}
          <i>machine learning, distributed systems, turbulence, and non-linear dynamics</i>.
        </p>
        <p>
          After transitioning to industry, Banerjee’s interests evolved toward{' '}
          <span className="highlighted-text">quantitative finance and blockchain technology</span>.
          He developed a specialization in{' '}
          <span className="highlighted-text">high-frequency trading (HFT)</span> and{' '}
          <span className="highlighted-text">market microstructure</span>, particularly in how order
          cancellations and latency affect market quality. He is passionate about designing{' '}
          <span className="highlighted-text">event-driven trading systems</span> for liquidity
          provision – essentially algorithms that react in microseconds to market events to provide
          continuous buy/sell quotes on exchanges. In the cryptocurrency realm, his focus areas
          include <span className="highlighted-text">decentralized finance (DeFi)</span> and{' '}
          <span className="highlighted-text">distributed ledger systems</span>. He has worked
          extensively on the Cosmos network and related protocols, designing strategies for
          cross-chain arbitrage and liquidity across decentralized exchanges. In his current role,
          he is exploring the intersection of Bitcoin and DeFi – for instance, creating mechanisms
          for <span className="highlighted-text">Bitcoin staking and restaking</span> to secure PoS
          blockchains (akin to Ethereum’s EigenLayer concept). This breadth of interests – from
          fluid mechanics to financial engineering – highlights Banerjee’s interdisciplinary
          approach to problem-solving.
        </p>
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-sm mb-8">Key Publications</h1>

        <div className="flex flex-col gap-y-10">
          {publications.map(({ date, items }, index) => (
            <DateCard type="link" key={index} date={date} index={index} items={items} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchInterests;
