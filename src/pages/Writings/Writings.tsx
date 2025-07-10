import { motion } from 'framer-motion';

import { ReactComponent as PdfIcon } from '../../assets/pdf.svg';
import DateCard, { IDateCardProps } from '../../components/reusable/DateCard';
import LinkText from '../../components/reusable/LinkText.tsx';

const data: { date: string; items: IDateCardProps['items'] }[] = [
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
