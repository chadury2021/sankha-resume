import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Biography</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-sm"
      >
        <p className=" mb-4">
          Dr. Sankha Banerjee is an MIT-affiliated researcher turned finance and blockchain expert.
          He earned his <span className="highlighted-text">Ph.D. in Applied Mathematics</span> from
          the Massachusetts Institute of Technology, where his doctoral work applied machine
          learning to non-linear dynamical systems. He also completed a{' '}
          <span className="highlighted-text">
            finance degree at MIT’s Sloan School of Management
          </span>
          , giving him a strong foundation in quantitative finance. Prior to his time at MIT,
          Banerjee finished his Bachelors and Masters in Computer Science at a technical university
          in Germany, where he received the{' '}
          <span className="highlighted-text">Elite Student Award of Bavaria</span> for publishing a
          novel mathematical proof related to turbulence mapping.
        </p>
        <p className=" mb-4">
          During his Ph.D. at MIT, Banerjee leveraged advanced supercomputing facilities to simulate
          complex fluid dynamics phenomena. Notably, he conducted one of the first large-scale
          simulations of a three-dimensional fluttering flag to derive analytical stability
          constraints. By the end of his doctoral research, he had authored around{' '}
          <span className="highlighted-text">ten peer-reviewed papers</span> on turbulence and fluid
          mechanics, with his findings influencing subsequent studies (including references by NASA
          researchers).
        </p>
        <p className=" mb-4">
          After completing his doctorate in 2013, Banerjee transitioned into the finance industry
          and the burgeoning field of cryptocurrency. He initially worked as a quantitative analyst
          and developer at{' '}
          <span className="highlighted-text">Castleton Commodities International</span>, creating
          algorithmic trading models for energy, commodities, forex, and derivatives markets. He
          then managed global macro portfolios as a quant trader at{' '}
          <span className="highlighted-text">Blue Ridge Investments</span> and{' '}
          <span className="highlighted-text">EastMore Group</span>, achieving high risk-adjusted
          returns (≈2.0 Sharpe with ~3% drawdown).
        </p>
        <p className=" mb-4">
          In <span className="highlighted-text">2017</span>, Dr. Banerjee moved full-time into the
          crypto markets. He built and executed high-frequency{' '}
          <span className="highlighted-text">market-making algorithms</span> for cryptocurrency
          exchanges such as BitMEX and Binance, at one point handling about{' '}
          <span className="highlighted-text">$1 billion in weekly trading volume</span> on perpetual
          futures markets.
        </p>
        <p className=" mb-4">
          In <span className="highlighted-text">2020</span>, he became the CEO of{' '}
          <span className="highlighted-text">Multi-Strategy Family Office</span>, where he managed a
          multi-million dollar fund investing in early-stage layer-1 blockchain protocols with a
          focus on DeFi infrastructure. His investment strategy emphasized rigorous codebase and
          infrastructure evaluation, particularly within the{' '}
          <span className="highlighted-text">Cosmos blockchain</span> ecosystem. Banerjee was an
          early contributor and seed investor in several prominent Cosmos-based DeFi projects –
          including <span className="highlighted-text">Thorchain</span>,{' '}
          <span className="highlighted-text">Band Protocol</span>,{' '}
          <span className="highlighted-text">Kava</span>, and{' '}
          <span className="highlighted-text">Akash Network</span> – and helped design cross-chain
          arbitrage frameworks (e.g., for Binance’s BEP-20 $RUNE token and the Thorchain network).
          He also served as the protocol architect for{' '}
          <span className="highlighted-text">Nibiru</span>, a decentralized perpetuals exchange and
          stablecoin platform in the Cosmos ecosystem.
        </p>
        <p>
          As of 2023, Dr. Banerjee holds the position of{' '}
          <span className="highlighted-text">Chief Protocol Economist</span> at{' '}
          <span className="highlighted-text">Babylon</span> (Babylon Chain), a blockchain project
          aimed at introducing Bitcoin staking to Proof-of-Stake networks. In this role, he develops
          economic models that leverage Bitcoin’s security to bolster other blockchains, allowing
          Bitcoin holders to stake their BTC and earn yields on partner networks. Banerjee’s unique
          career path – from academia to Wall Street to decentralized finance – reflects a blend of
          deep scientific research and practical financial innovation.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
