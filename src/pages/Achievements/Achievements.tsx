import { motion } from 'framer-motion';

import AchievementsLink from './components/AchievementsLink';
import {
  howDuraisamyData,
  nasaTurbulenceTableConfig,
  nutshellBarycentricMapTableConfig,
  whyTheMapEnduresData,
} from './data.tsx';

const Achievements = () => {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">Achievements</h1>
          <p className="section-subtitle text-center">Explore Achievements</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-sm p-6"
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
          <p className="text-gray-700">
            <b>
              Dr. Banerjee’s barycentric map has become NASA’s Rosetta Stone for turbulence
              anisotropy—translating raw Reynolds stresses into a language equally legible to
              physicists, CFD code developers, and machine-learning algorithms.
            </b>
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Why the Map Endures</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="list-decimal pl-4 space-y-2">
              {whyTheMapEnduresData.map(({ title, description }) => (
                <li key={title}>
                  <b>{title}: </b>
                  <span>{description}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            The Barycentric Map in a Nutshell
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  {nutshellBarycentricMapTableConfig.headers.map(header => (
                    <th key={header} className="px-4 py-2 border-b text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nutshellBarycentricMapTableConfig.rows.map((row, idx) => (
                  <tr key={row.element} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 border-b align-top font-semibold">{row.element}</td>
                    <td className="px-4 py-2 border-b align-top">{row.keyPoints}</td>
                    <td className="px-4 py-2 border-b align-top">{row.whyItMatters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            How Duraisamy et al. (2019) Use and Cite the Map
          </h2>
          <p className="text-lg section-subtitle text-center mb-8">
            The Annual Review article positions the barycentric map as a{' '}
            <b>foundational diagnostic and modelling device</b> in three separate contexts:
          </p>

          <div className="bg-white rounded-lg shadow-md p-6">
            <ol className="list-decimal pl-4 space-y-2">
              {howDuraisamyData.map(({ title, description }) => (
                <li key={title}>
                  <b>{title}: </b>
                  <span>{description}</span>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Direct Impact on NASA Turbulence Programs
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-primary mb-4 text-left">Dividends for NASA:</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li>
                <b>Credibility envelopes</b> on lift/drag and thermal-load predictions early in
                design.
              </li>
              <li>
                <b>Model-agnostic comparison metric</b> across FUN3D, USM3D, Kestrel, and external
                partner codes.
              </li>
              <li>
                <b>Feature set for ML closures</b> used in current NASA University Leadership
                Initiative (ULI) projects on ML-augmented CFD.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  {nasaTurbulenceTableConfig.headers.map(header => (
                    <th key={header} className="px-4 py-2 border-b text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nasaTurbulenceTableConfig.rows.map((row, idx) => (
                  <tr key={row.activity} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 border-b align-top font-semibold">{row.activity}</td>
                    <td className="px-4 py-2 border-b align-top">{row.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-primary mb-4 text-center">
            Selected Bibliography (abridged)
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc pl-4 space-y-2">
              <li>
                Banerjee, S. <b>et al</b>. “Presentation of anisotropy properties of
                turbulence—Invariants versus eigenvalue approaches.” <i>J. Turbulence 8</i> :N32
                (2007). (
                <AchievementsLink
                  title="annualreviews.org"
                  url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
                />
                )
              </li>
              <li>
                Duraisamy, K., Iaccarino, G., Xiao, H. “Turbulence Modeling in the Age of Data.”
                <i>Annu. Rev. Fluid Mech</i>. 51: 357-377 (2019). (
                <AchievementsLink
                  title="annualreviews.org"
                  url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
                />
                )
              </li>
              <li>
                Emory, M., Larsson, J., Iaccarino, G. “Modeling of structural uncertainties in RANS
                closures.” <i>Phys. Fluids</i> 25: 110822 (2013). (
                <AchievementsLink
                  title="annualreviews.org"
                  url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
                />
                )
              </li>
              <li>
                Iaccarino, G., Mishra, A., Ghili, S. “Eigenspace perturbations for uncertainty
                estimation of single-point turbulence closures.” <i>Phys. Rev. Fluids</i> 2: 024605
                (2017). (
                <AchievementsLink
                  title="annualreviews.org"
                  url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
                />
                )
              </li>
              <li>
                NASA Langley Research Center. <b>Turbulence Modeling Resource</b> (accessed 15 Jun
                2025). (
                <AchievementsLink
                  title="turbmodels.larc.nasa.gov"
                  url="https://turbmodels.larc.nasa.gov/"
                />
                )
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
