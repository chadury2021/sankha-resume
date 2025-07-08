import { motion } from 'framer-motion';

import { ReactComponent as DocumentIcon } from '../../assets/document.svg';
import { ReactComponent as PdfIcon } from '../../assets/pdf.svg';
import DateCard, { IDateCardProps } from '../../components/reusable/DateCard';

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
        type: 'link',
      },
    ],
  },
  {
    date: '2015',
    items: [
      {
        title: 'Three-dimensional Effects on Flag Flapping Dynamics',
        descriptionsList: [
          {
            sectionTitle: 'Journal of Fluid Mechanics, 783:103–136',
            descriptions: [
              'This paper examines how 3D structural and flow effects influence the fluttering behavior of a flexible flag in a uniform stream.',
              '(Co-authored with B. S. H. Connell and Prof. Dick K. P. Yue at MIT)',
            ],
          },
        ],
        Icon: <DocumentIcon />,
      },
    ],
  },
  {
    date: '2007',
    items: [
      {
        title:
          'Presentation of Anisotropy Properties of Turbulence (Invariants vs Eigenvalue Approaches)',
        descriptionsList: [
          {
            sectionTitle:
              'Proceedings of the 13th WSEAS International Conference on Applied Mathematics',
            descriptions: [
              'This work presents a framework using invariant theory to characterize the anisotropy of turbulent flows, comparing classical invariant maps with eigenvalue methods',
              '(Co-authored with Ö. Ertunç and F. Durst during Banerjee’s time in Germany)',
            ],
          },
        ],
        Icon: <DocumentIcon />,
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
          Dr. Banerjee has{' '}
          <span className="highlighted-text">authored over 10 peer-reviewed publications</span> in
          total. His research contributions span topics like turbulent{' '}
          <span className="highlighted-text">wake flows</span>, computational modeling of{' '}
          <span className="highlighted-text">fluid instabilities</span>, and applications of
          data-driven methods to classical mechanics.
        </p>
      </motion.div>
    </div>
  );
};

export default Writings;
