import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">About Me</h1>
          <p className="section-subtitle text-center">Biography & Academic Background</p>
        </motion.div>

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0 md:w-1/3">
                <img
                  className="h-48 w-full object-cover md:h-full"
                  src="src/assets/profile3.jpg"
                  alt="Profile"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold text-primary mb-4">Dr. Sankha Banerjee</h2>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">MIT-affiliated researcher</span> • Finance &
                  Blockchain Expert
                </p>
                <p className="text-gray-700 mb-6">
                  Ph.D. in Applied Mathematics from Massachusetts Institute of Technology with
                  expertise in quantitative finance, blockchain technology, and distributed systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Applied Mathematics
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Blockchain
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Quantitative Finance
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    DeFi
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-4">Biography</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-700 mb-4">
                  Dr. Sankha Banerjee is an MIT-affiliated researcher turned finance and blockchain
                  expert. He earned his <b>Ph.D. in Applied Mathematics</b> from the Massachusetts
                  Institute of Technology, where his doctoral work applied machine learning to
                  non-linear dynamical systems. He also completed a{' '}
                  <b>finance degree at MIT’s Sloan School of Management</b>, giving him a strong
                  foundation in quantitative finance. Prior to his time at MIT, Banerjee finished
                  his Bachelors and Masters in Computer Science at a technical university in
                  Germany, where he received the <b>Elite Student Award of Bavaria</b> for
                  publishing a novel mathematical proof related to turbulence mapping.
                </p>
                <p className="text-gray-700 mb-4">
                  During his Ph.D. at MIT, Banerjee leveraged advanced supercomputing facilities to
                  simulate complex fluid dynamics phenomena. Notably, he conducted one of the first
                  large-scale simulations of a three-dimensional fluttering flag to derive
                  analytical stability constraints. By the end of his doctoral research, he had
                  authored around <b>ten peer-reviewed papers</b> on turbulence and fluid mechanics,
                  with his findings influencing subsequent studies (including references by NASA
                  researchers).
                </p>
                <p className="text-gray-700 mb-4">
                  After completing his doctorate in 2013, Banerjee transitioned into the finance
                  industry and the burgeoning field of cryptocurrency. He initially worked as a
                  quantitative analyst and developer at <b>Castleton Commodities International</b>,
                  creating algorithmic trading models for energy, commodities, forex, and
                  derivatives markets. He then managed global macro portfolios as a quant trader at{' '}
                  <b>Blue Ridge Investments</b> and <b>EastMore Group</b>, achieving high
                  risk-adjusted returns (≈2.0 Sharpe with ~3% drawdown).
                </p>
                <p className="text-gray-700 mb-4">
                  In <b>2017</b>, Dr. Banerjee moved full-time into the crypto markets. He built and
                  executed high-frequency <b>market-making algorithms</b> for cryptocurrency
                  exchanges such as BitMEX and Binance, at one point handling about{' '}
                  <b>$1 billion in weekly trading volume</b> on perpetual futures markets.
                </p>
                <p className="text-gray-700 mb-4">
                  In <b>2020</b>, he became the CEO of <b>Credence Limited</b>, where he managed a
                  multi-million dollar fund investing in early-stage layer-1 blockchain protocols
                  with a focus on DeFi infrastructure. His investment strategy emphasized rigorous
                  codebase and infrastructure evaluation, particularly within the{' '}
                  <b>Cosmos blockchain</b> ecosystem. Banerjee was an early contributor and seed
                  investor in several prominent Cosmos-based DeFi projects – including{' '}
                  <b>Thorchain</b>, <b>Band Protocol</b>, <b>Kava</b>, and <b>Akash Network</b> –
                  and helped design cross-chain arbitrage frameworks (e.g., for Binance’s BEP-20
                  $RUNE token and the Thorchain network). He also served as the protocol architect
                  for <b>Nibiru</b>, a decentralized perpetuals exchange and stablecoin platform in
                  the Cosmos ecosystem.
                </p>
                <p className="text-gray-700">
                  As of 2023, Dr. Banerjee holds the position of <b>Chief Protocol Economist</b> at{' '}
                  <b>Babylon</b> (Babylon Chain), a blockchain project aimed at introducing Bitcoin
                  staking to Proof-of-Stake networks. In this role, he develops economic models that
                  leverage Bitcoin’s security to bolster other blockchains, allowing Bitcoin holders
                  to stake their BTC and earn yields on partner networks. Banerjee’s unique career
                  path – from academia to Wall Street to decentralized finance – reflects a blend of
                  deep scientific research and practical financial innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
