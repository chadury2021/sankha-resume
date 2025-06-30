import { motion } from 'framer-motion';

import {
  howDuraisamyData,
  nasaTurbulenceTableConfig,
  nutshellBarycentricMapTableConfig,
  whyTheMapEnduresData,
} from './data.tsx';
import InfoCard from '../../components/reusable/InfoCard.tsx';

const Achievements = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">Achievements</h1>
      </motion.div>

      <motion.div
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
        <p className="mb-8">
          Dr. Banerjee’s barycentric map has become NASA’s Rosetta Stone for turbulence
          anisotropy—translating raw Reynolds stresses into a language equally legible to
          physicists, CFD code developers, and machine-learning algorithms.
        </p>
        <img className="mb-8" src="/3c.png" alt="3c" />
        <p>
          Introduced a geometric framework (Barycentric map) to visualize and constrain Reynolds
          stress uncertainty in turbulence models, now widely adopted in data-driven RANS modeling.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 lg:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="section-title text-sm">Why the Map Endures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyTheMapEnduresData.map(({ title, description, Icon }) => (
            <InfoCard key={title} title={title} description={description} Icon={Icon} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10 lg:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h1 className="section-title">The Barycentric Map in a Nutshell</h1>
        <div className="rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#0C1618]">
              <tr className="text-white lowercase font-shuriken text-sm max-lg:text-[10px]">
                {nutshellBarycentricMapTableConfig.headers.map(header => (
                  <th
                    key={header}
                    className="max-md:px-3 px-6 py-3.5 border-b text-left font-normal"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nutshellBarycentricMapTableConfig.rows.map(row => (
                <tr key={row.element} className="text-sm dark-text max-lg:text-xs">
                  <td className="max-md:px-3 px-6 py-3 border-b align-top font-semibold">
                    {row.element}
                  </td>
                  <td className="max-md:px-3 px-6 py-3 border-b align-top">{row.keyPoints}</td>
                  <td className="max-md:px-3 px-6 py-3 border-b align-top">{row.whyItMatters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 lg:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h1 className="section-title text-sm">How Duraisamy et al. (2019) Use and Cite the Map</h1>
        <p className="text-sm mb-8">
          The Annual Review article positions the barycentric map as a{' '}
          <span className="highlighted-text">foundational diagnostic and modelling device</span> in
          three separate contexts:
        </p>

        <div className="grid grid-cols-1 gap-8">
          {howDuraisamyData.map(({ title, description, Icon }) => (
            <InfoCard key={title} title={title} description={description} Icon={Icon} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-10 lg:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <h1 className="section-title text-sm">Direct Impact on NASA Turbulence Programs</h1>

        <div className="text-sm mb-4">Dividends for NASA:</div>
        <ul className="text-sm list-disc ml-3 pl-3 space-y-1 marker:text-[#17A0BF] marker:text-xs">
          <li>
            <span className="highlighted-text">Credibility envelopes</span> on lift/drag and
            thermal-load predictions early in design.
          </li>
          <li>
            <span className="highlighted-text">Model-agnostic comparison metric</span> across FUN3D,
            USM3D, Kestrel, and external partner codes.
          </li>
          <li>
            <span className="highlighted-text">Feature set for ML closures</span> used in current
            NASA University Leadership Initiative (ULI) projects on ML-augmented CFD.
          </li>
        </ul>

        <div className="mt-8 rounded-lg overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#0C1618]">
              <tr className="text-white lowercase font-shuriken text-sm max-lg:text-[10px]">
                {nasaTurbulenceTableConfig.headers.map(header => (
                  <th
                    key={header}
                    className="max-md:px-3 px-6 py-3.5 border-b text-left font-normal"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nasaTurbulenceTableConfig.rows.map(row => (
                <tr key={row.activity} className="text-sm max-lg:text-xs dark-text">
                  <td className="max-md:px-3 px-6 py-3 border-b align-top font-semibold">
                    {row.activity}
                  </td>
                  <td className="max-md:px-3 px-6 py-3 border-b align-top">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;
