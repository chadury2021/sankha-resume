import { motion } from 'framer-motion';

import { ReactComponent as PdfIcon } from '../../assets/pdf.svg';
import DateCard, { IDateCardProps } from '../../components/reusable/DateCard';
import LinkText from '../../components/reusable/LinkText.tsx';

const data: { date: string; items: IDateCardProps['items'] }[] = [
  {
    date: '2025',
    items: [
      {
        title: 'Universal Liquidity Coordination Protocol For Agent-Based Market Making',
        descriptionsList: [
          {
            sectionTitle: 'Internal research',
            descriptions: [
              'A universal liquidity coordination protocol is proposed to unify fragmented liquidity in today’s multi-chain DeFi landscape. The protocol enables liquidity to be locked on a source chain while being made available for quoting and trading across multiple destination chains (L1s and L2s) in real time. Market making is carried out by a network of autonomous agents that compete to fill user trade intents\n' +
                'with optimal pricing. The design combines on-chain smart contracts and cross-chain messaging to coordinate swaps atomically across chains. Key features include an agent bonding and slashing mechanism for security, an optimistic cross-chain execution model for low latency, and measures for MEV mitigation such as off-chain order batching and Dutch auctions. We compare this approach\n' +
                'with UniswapX’s intent-based auctions, CoW Protocol’s batch solver system, and the LayerZero cross-chain infrastructure. Our protocol offers a modular, efficient, and secure universal liquidity layer that dramatically improves capital efficiency and user experience by allowing on-demand liquidity sharing across networks. We discuss the system architecture in detail – covering agent design, message passing, execution logic, hedging strategies, and security – and outline incentive\n' +
                'structures that encourage robust agent participation. The result is a multi-agent, on-chain/off-chain hybrid system for highly efficient and secure cross-chain market making, mitigating MEV and latency challenges while seamlessly routing liquidity wherever it’s needed.',
            ],
          },
        ],
        Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
        link: '/BitFrost_Final_Paper_Market-Making.pdf',
      },
    ],
  },
  {
    date: '2025',
    items: [
      {
        title:
          'Draft: A Continuous Decentralized Alignment and Monitoring Framework for Personal AI',
        descriptionsList: [
          {
            sectionTitle: 'Internal research',
            descriptions: [
              'The rapid evolution of artificial intelligence is reshaping economic and social landscapes, offering the promise of abundance and human flourishing while raising urgent concerns about misalignment. If left unchecked, AI systems may optimize for objectives irrelevant—or harmful—to humanity. Addressing this requires alignment mechanisms that are continuous, transparent, and human-centered.  A blockchain-based platform that enforces model-agnostic, privacy-preserving, decentralized, and scalable human oversight. By combining standardized model interaction protocols with cryptographic privacy guarantees and blockchain-mediated transparency creates a universal framework for monitoring AI behavior and incentivizing adherence to alignment standards at global scale.',
            ],
          },
        ],
        Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
        link: '/ML-5.pdf',
      },
    ],
  },
  // {
  //   date: '2025',
  //   items: [
  //     {
  //       title:
  //         'A Strategic Analysis of Corporate Bitcoin Adoption and Treasury Reserve Implementation',
  //       descriptionsList: [
  //         {
  //           sectionTitle: 'Lombard Internal Research',
  //           descriptions: [
  //             'This whitepaper examines the emerging trend of corporate Bitcoin (BTC) treasury adoption as a strategic\n' +
  //               'capital allocation framework for publicly traded companies. Through comprehensive analysis of pioneering\n' +
  //               'cases including MicroStrategy (NASDAQ: MSTR) and Metaplanet Inc. (TSE: 3350), we demonstrate\n' +
  //               'that disciplined Bitcoin treasury strategies can generate substantial equity value premiums beyond the\n' +
  //               'underlying cryptocurrency holdings. Our research reveals that companies implementing BTC allocations\n' +
  //               'of 5-15% of cash reserves have achieved share price performance improvements of +50% to +300% over\n' +
  //               '12-36 month periods, driven by market recognition of Bitcoin’s inflation hedge properties and scarcity\n' +
  //               'value.',
  //           ],
  //         },
  //       ],
  //       Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
  //       link: '/Lombard-Equity-Vehicle.pdf',
  //     },
  //   ],
  // },
  // {
  //   date: '2025',
  //   items: [
  //     {
  //       title: 'LBTC: Bringing Bitcoin Back to Its Roots as True Peer-to-Peer Cash',
  //       descriptionsList: [
  //         {
  //           sectionTitle: 'Internal research',
  //           descriptions: [
  //             'Bitcoin was originally envisioned by Satoshi Nakamoto as a peer-to-peer electronic cash system, yet over time it evolved primarily into “digital gold” due to scalability limits, high fees, and slow settlement. LBTC (Liquid Bitcoin Token) seeks to restore Bitcoin’s transactional utility by combining its scarcity and trust with speed, liquidity, and yield. Fully collateralized 1:1 with native BTC, LBTC enables Bitcoin to move seamlessly across multiple chains with low fees and fast settlement, while also earning staking rewards via the Babylon protocol. This makes Bitcoin both spendable and productive, positioning LBTC as a “stablecoin-like” medium of exchange for the crypto economy, without detaching from BTC’s value. By leveraging decentralized custody, automated proof-of-reserves, and integrations across DeFi, LBTC revives Bitcoin’s role as internet cash while maintaining Bitcoin as the ultimate settlement layer. In doing so, it modernizes Satoshi’s vision, allowing Bitcoin holders to participate fluidly in payments, smart contracts, and cross-chain finance, while preserving the assurance that 1 LBTC will always equal 1 BTC.',
  //           ],
  //         },
  //       ],
  //       Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
  //       link: '/LBTC_Bringing_Bitcoin_Back_to_Its_Roots_as_True_Peer_to_Peer_Cash.pdf',
  //     },
  //   ],
  // },
  {
    date: '2025',
    items: [
      {
        title:
          'BitFrost: A GG20-Based Threshold Signature Scheme for Secure Cross-Chain Native Token Transfers',
        descriptionsList: [
          {
            sectionTitle: 'Bitfrost',
            descriptions: [
              'This work presents BitFrost, a FROST-optimized threshold signature enhancement to Wormhole’s Native Token Transfers, enabling secure, scalable, and backward-compatible cross-chain transfers with 67% improved performance and strong Byzantine fault tolerance.',
            ],
          },
        ],
        Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
        link: '/BitFrost-Design.pdf',
      },
    ],
  },
  {
    date: '2025',
    items: [
      {
        title: 'A Game-Theoretic Model of Staking, Restaking, and Token Inflation',
        descriptionsList: [
          {
            sectionTitle: 'Internal research',
            descriptions: [
              'This whitepaper presents a stylized mathematical and game-theoretic model for large-scale staking (or “restaking”) of BTC/ETH into protocols that promise yield in their native tokens. We explore the tension that arises when real protocol revenue is insufficient to meet stakers’ yield demands. Continuous token inflation can lead to a self-perpetuating cycle of token price declines, prompting an eventual shrinkage or implosion of the ecosystem. We contextualize this with the scenario outlined in discussions about Babylon, EigenLayer, and other shared security solutions.',
            ],
          },
        ],
        Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
        link: '/Emissions.pdf',
      },
    ],
  },
  {
    date: '2024',
    items: [
      {
        title: 'Global Over-the-Counter (OTC) Market Overview: A Whitepaper',
        descriptionsList: [
          {
            sectionTitle: 'Internal research',
            descriptions: [
              'This whitepaper provides an overview of the global Over-the-Counter (OTC) market, which includes a wide range of financial securities traded directly between parties without a centralized exchange, as well as non-prescription pharmaceutical products. The scale, market size, and key trends of this diverse marketplace are highlighted.',
            ],
          },
        ],
        Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
        link: '/OTC_Market-Design.pdf',
      },
    ],
  },
  {
    date: '2024',
    items: [
      {
        title:
          'Delfi: Secondary Market Design For Enhancing Validator Liquidity And Reducing Exchange Risk',
        descriptionsList: [
          {
            sectionTitle: 'Delfi',
            descriptions: [
              'The current whitepaper presents a novel secondary market design aimed at addressing the exchange risk and liquidity challenges faced by validators within the Eigenlayer ecosystem and potentially similar protocols. Validators who prefer to hold assets in Ethereum (ETH) are exposed to significant exchange rate risks due to the long-term lock-in period of their stakes. Such allocation of risk is inefficient because of the lack of effective risk-sharing mechanisms within the current ecosystem, which adversely affects pricing and adoption of re-staking services. This proposal seeks to mitigate the existing inefficiency of risk sharing by creating a secondary market for forward contracts, thereby enhancing the scalability of protocols like Eigenlayer and Babylon. The paper discusses the problem statement, the proposed solution, and its implications for Total Value Locked (TVL) improvement.',
            ],
          },
        ],
        Icon: <PdfIcon className="min-w-12 w-12 h-12" />,
        link: '/DELFI_Whitepaper-2.pdf',
      },
    ],
  },
];

const Writings = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title text-sm">Writings</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col gap-y-10"
      >
        {data.map(({ date, items }, index) => (
          <DateCard type="link" key={index} date={date} index={index} items={items} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col mt-8"
      >
        <h1 className="section-title text-sm">Additional</h1>
        <p className="text-sm">
          Dr. Banerjee has <span className="highlighted-text">authored over</span>{' '}
          <LinkText
            title="10 peer-reviewed publications"
            url="https://scholar.google.com/citations?user=i_U5uG0AAAAJ"
          />{' '}
          in total. His research contributions span topics like turbulent{' '}
          <span className="highlighted-text">wake flows</span>, computational modeling of{' '}
          <span className="highlighted-text">fluid instabilities</span>, and applications of
          data-driven methods to classical mechanics.
        </p>
      </motion.div>
    </div>
  );
};

export default Writings;
