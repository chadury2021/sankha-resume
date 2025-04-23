import { motion } from 'framer-motion';

import { publications } from './data';

const ResearchInterests = () => {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">Research Interests & Specialization</h1>
          <p className="section-subtitle text-center">
            Exploring computational science, finance, and distributed systems
          </p>
        </motion.div>

        <motion.div
          className="mt-12 bg-white rounded-lg shadow-sm p-6"
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
          <p className="text-gray-700 mb-4">
            Dr. Banerjee’s expertise spans{' '}
            <b>computational science, finance, and distributed systems</b>. In academia, his
            research focused on <b>fluid dynamics and turbulence</b>. He worked on fluid-structure
            interaction problems, using high-fidelity simulations and <b>invariant theory</b> to
            understand turbulence anisotropy. One of his specialty areas was the study of{' '}
            <b>non-linear dynamical systems</b> (for example, the flapping of flags in turbulent
            flow) and applying machine learning techniques to model and predict their behavior. His
            scholarly background is reflected in interests such as{' '}
            <i>machine learning, distributed systems, turbulence, and non-linear dynamics</i>.
          </p>
          <p className="text-gray-700">
            After transitioning to industry, Banerjee’s interests evolved toward{' '}
            <b>quantitative finance and blockchain technology</b>. He developed a specialization in{' '}
            <b>high-frequency trading (HFT)</b> and <b>market microstructure</b>, particularly in
            how order cancellations and latency affect market quality. He is passionate about
            designing <b>event-driven trading systems</b> for liquidity provision – essentially
            algorithms that react in microseconds to market events to provide continuous buy/sell
            quotes on exchanges. In the cryptocurrency realm, his focus areas include{' '}
            <b>decentralized finance (DeFi)</b> and <b>distributed ledger systems</b>. He has worked
            extensively on the Cosmos network and related protocols, designing strategies for
            cross-chain arbitrage and liquidity across decentralized exchanges. In his current role,
            he is exploring the intersection of Bitcoin and DeFi – for instance, creating mechanisms
            for <b>Bitcoin staking and restaking</b> to secure PoS blockchains (akin to Ethereum’s
            EigenLayer concept). This breadth of interests – from fluid mechanics to financial
            engineering – highlights Banerjee’s interdisciplinary approach to problem-solving.
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Key Publications</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="divide-y divide-gray-200">
              {publications.map((pub, index) => (
                <div key={index} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-2 text-primary hover:text-secondary transition-colors">
                    <a href={pub.link}>{pub.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-2">{pub.journal}</p>
                  <p className="text-gray-800 mb-2">{pub.description}</p>
                  <p className="text-gray-700 mb-1">{pub.authors}</p>
                  <p className="text-gray-500 text-sm">{pub.year}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4">Additional</h2>
          <p className="text-gray-700">
            Dr. Banerjee has <b>authored over 10 peer-reviewed publications</b> in total. His
            research contributions span topics like turbulent <b>wake flows</b>, computational
            modeling of <b>fluid instabilities</b>, and applications of data-driven methods to
            classical mechanics.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchInterests;
