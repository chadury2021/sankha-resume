import { ReactComponent as AcademicCapIcon } from '../../assets/academic-cap.svg';
import { ReactComponent as DocumentSolidIcon } from '../../assets/document-solid.svg';
import { ReactComponent as SparklesSolidIcon } from '../../assets/sparkles-solid.svg';
import { ReactComponent as TrophyIcon } from '../../assets/trophy.svg';
import { IDateCardProps } from '../../components/reusable/DateCard.tsx';

export const experiences: { date: string; items: IDateCardProps['items'] }[] = [
  {
    date: '2025 (Future Role)',
    items: [
      {
        title: 'Head of Research at Lombard',
        descriptionsList: [
          {
            sectionTitle: 'Lombard',
            descriptions: [
              'Expected to take on a leadership role as Head of Research at Lombard.',
              'Will likely direct advanced R&D efforts in decentralized finance, algorithmic trading, and possibly next-generation distributed systems (building on a decade of experience).',
              'May focus on institutional-grade solutions for blockchain technology, bridging traditional finance with emerging digital asset ecosystems.',
            ],
          },
        ],
        Icon: <img src="/Experience/lombard.png" alt="lombard" />,
      },
    ],
  },
  {
    date: '2023 - 2024',
    items: [
      {
        title: 'Chief Protocol Architect',
        descriptionsList: [
          {
            sectionTitle: 'BabylonChain',
            descriptions: [
              'Transitioned to Babylon, a project bringing Bitcoin staking to Proof-of-Stake networks.',
              'Designed economic models for integrating Bitcoin into other blockchain ecosystems, enabling BTC holders to earn yields while securing PoS chains.',
              'Contributed to bridging the gap between Bitcoin’s security model and broader DeFi applications, parallel to developments in Ethereum restaking initiatives.',
            ],
          },
        ],
        Icon: <img src="/Experience/babylon.webp" alt="babylon" />,
      },
      {
        title: 'Research & Thought Leadership',
        descriptionsList: [
          {
            sectionTitle: 'Bitcoin',
            descriptions: [
              'Delivered keynotes and attended conferences (e.g., Token2049, Bitcoin Renaissance) discussing how Bitcoin’s security can be leveraged to protect and incentivize new protocols.',
              'Continued to expand his influence as a thought leader on cross-chain interoperability and crypto-economic design.',
            ],
          },
        ],
        Icon: <img width={31.5} height={31.5} src="/Experience/bitcoin.webp" alt="bitcoin" />,
      },
    ],
  },
  {
    date: '2019 - 2022',
    items: [
      {
        title: 'Core Team Member at Thorchain',
        descriptionsList: [
          {
            sectionTitle: 'Thorchain',
            descriptions: [
              'Joined the Thorchain project (a cross-chain liquidity protocol) as part of the core team.',
              'Contributed to protocol economics and system architecture, particularly designing cross-chain liquidity pools for non-wrapped assets (BTC, ETH, BNB, etc.).',
              'Focus on supporting decentralized exchange (DEX) solutions and enabling cross-chain swaps without centralized custodians.',
            ],
          },
          {
            sectionTitle: 'Key Accomplishments',
            descriptions: [
              'Helped streamline the protocol’s continuous liquidity pool concept, reinforcing Thorchain’s role as a pioneer in cross-chain DeFi.',
              'Engaged in community and developer advocacy, sharing technical insights and guiding governance discussions.',
            ],
          },
        ],
        Icon: <img width={38} height={38} src="/Experience/thorchain.png" alt="thorchain" />,
      },
    ],
  },
  {
    date: '2018',
    items: [
      {
        title: 'Y Combinator & Stellar-based Real Estate Platform',
        descriptionsList: [
          {
            sectionTitle: 'Y Combinator',
            descriptions: [
              'Participated in Y Combinator, the prominent startup accelerator, to develop a real estate tokenization platform leveraging the Stellar blockchain.',
              'Spearheaded product design that aimed to tokenize real estate assets for fractional ownership and global accessibility.',
              'Focused on smart contracts, compliance solutions, and cross-border payment infrastructure.',
            ],
          },
        ],
        Icon: (
          <img
            className="rounded-lg"
            width={28}
            height={28}
            src="/Experience/y_combinator.png"
            alt="y_combinator"
          />
        ),
      },
      {
        title: 'Public Engagement',
        descriptionsList: [
          {
            sectionTitle: 'Articles & Seminars',
            descriptions: [
              'Continued to publish occasional articles and gave seminars on the intersection of blockchain technology, finance, and distributed systems, building on his MIT research background.',
            ],
          },
        ],
        Icon: <DocumentSolidIcon />,
      },
    ],
  },
  {
    date: '2017',
    items: [
      {
        title: 'Market-Making Desk',
        descriptionsList: [
          {
            sectionTitle: 'Cryptocurrency',
            descriptions: [
              'Shifted from traditional finance to the growing cryptocurrency market.',
              'Established a market-making operation on leading exchanges BitMEX and Binance, focusing on perpetual futures contracts and spot trading.',
              'Engineered high-frequency trading bots, achieving significant weekly trading volume (reportedly around $1 billion) through sophisticated liquidity provision strategies.',
            ],
          },
          {
            sectionTitle: 'Notable Impact',
            descriptions: [
              'Helped shape early crypto market microstructure by bringing institutional-grade algorithms and risk management to nascent digital asset exchanges.',
            ],
          },
        ],
        Icon: <SparklesSolidIcon />,
      },
    ],
  },
  {
    date: '2014 - 2017',
    items: [
      {
        title: 'Quantitative Finance',
        descriptionsList: [
          {
            sectionTitle: 'Citadel & BlueRidge Capital',
            descriptions: [
              'Moved into quantitative finance immediately after completing MIT research.',
              'Joined Citadel (one of the world’s largest hedge funds) as a quantitative researcher, focusing on algorithmic trading, risk modeling, and high-frequency data analysis.',
              'Transitioned to BlueRidge Capital to develop portfolio management strategies, leveraging advanced statistical models for equities, commodities, and derivatives.',
            ],
          },
          {
            sectionTitle: 'Key Achievements',
            descriptions: [
              'Contributed to high-performance trading infrastructure.',
              'Applied academic knowledge of complex systems to reduce latency, optimize liquidity, and manage risk across multiple asset classes.',
            ],
          },
        ],
        Icon: <img src="/Experience/quantitative.png" alt="quantitative" />,
      },
    ],
  },
  {
    date: '2014',
    items: [
      {
        title: 'Academic & Research Focus',
        descriptionsList: [
          {
            sectionTitle: '',
            descriptions: [
              'Completed final stages of Ph.D. research at MIT (Applied Mathematics & Distributed Systems)',
              'Engaged in research on Distributed Systems with an MIT group (inspired by what later became Algorand). This work included exploring consensus mechanisms and cryptographic proofs for decentralized networks.',
            ],
          },
        ],
        Icon: <AcademicCapIcon />,
      },
      {
        title: 'Professional Transition',
        descriptionsList: [
          {
            sectionTitle: '',
            descriptions: [
              'Took on advisory or preliminary research roles (part-time) related to cryptography and distributed ledger technology at MIT.',
            ],
          },
        ],
        Icon: <TrophyIcon />,
      },
    ],
  },
];
