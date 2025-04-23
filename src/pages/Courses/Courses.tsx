import { motion } from 'framer-motion';

const Courses = () => {
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="section-title text-center">Educational Involvement & Media</h1>
          <p className="section-subtitle text-center">Teaching, mentoring, and knowledge sharing</p>
        </motion.div>

        <div className="mt-12 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <p className="text-gray-700 mb-4">
              While at MIT, Sankha Banerjee was an active graduate researcher and occasionally
              engaged in teaching and mentorship. He served as a <b>Graduate Research Assistant</b>{' '}
              in MIT’s Viscous Flow Research Laboratory, where he collaborated with faculty and
              helped supervise fluid dynamics experiments and simulations. Though not a formal
              professor at MIT, he contributed to the academic community through mentorship of
              junior students and technical presentations. For example, during his studies in 2006
              he led a seminar session on <b>“How to Prepare the Abstract”</b> as part of a
              scientific writing workshop at the Technical University of Munich, sharing his
              insights on effectively communicating research.
            </p>
            <p className="text-gray-700">
              During his Sloan School tenure, Banerjee worked on interdisciplinary projects
              combining finance and engineering, which likely involved peer collaboration and group
              presentations (though specific courses taught by him are not publicly documented). He
              continues to engage in educational outreach by giving talks at conferences and writing
              about his expertise (via blogs and articles), thereby teaching broader audiences about
              topics at the intersection of technology and finance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Awards & Honors</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Elite Student Award (Bavaria, Germany)
                </h3>
                <p className="text-gray-700">
                  Dr. Banerjee was honored with Bavaria’s elite student award for his early research
                  accomplishments, specifically for publishing a novel mathematical proof that
                  provided a new mapping for turbulence phenomena. This award recognized his
                  outstanding academic performance during his university years in Germany.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Research Impact Recognition</h3>
                <p className="text-gray-700">
                  Banerjee’s Ph.D. research in turbulence earned notable recognition in the
                  scientific community. His findings on turbulence and fluid flow stability have
                  been cited in NASA’s scientific literature, indicating the high impact and
                  relevance of his work to ongoing research in aerodynamics and fluid mechanics. (In
                  addition) as a practitioner he gained informal distinction as one of the{' '}
                  <b>top market makers</b> on major crypto exchanges (reaching $1B+ weekly volume),
                  a testament to his expertise in quantitative trading (though this is a
                  professional achievement rather than a formal award).
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary mb-4">Media Appearances & Outreach</h2>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <p className="text-gray-700 mb-4">
                Dr. Banerjee’s work has been featured in media and he is active in sharing knowledge
                through interviews and talks. In <b>August 2024</b>, he was interviewed by{' '}
                <i>The Big Whale</i>, a digital finance publication, where he discussed Babylon’s
                vision for Bitcoin staking. In that interview, Banerjee explained how{' '}
                <b>Babylon allows Bitcoin holders to earn higher yields</b>(potentially 6–10%
                returns) by securing other blockchains, compared to the ~1% typical on traditional
                Bitcoin lending platforms. He articulated the idea of providing a new, relatively
                low-risk source of return for Bitcoin in DeFi, drawing parallels to Ethereum’s
                staking innovations.
              </p>
              <p className="text-gray-700 mb-4">
                Banerjee is also a <b>frequent speaker at blockchain and fintech conferences</b>. He
                has appeared on panels at events like <b>Token2049 (Dubai)</b>, where in 2024 he
                joined discussions with industry leaders on topics such as Bitcoin’s evolving role
                in DeFi. He has served as a panel <b>moderator</b> as well – for instance, at the{' '}
                <b>Bitcoin Renaissance 2024</b> summit in Korea, he moderated sessions on scaling
                Bitcoin and the intersection of Bitcoin with Proof-of-Stake systems. Earlier, in
                2023, he delivered a <b>keynote at “Bitcoin Unleashed 2023”</b>, highlighting
                strategies to connect Bitcoin’s security with decentralized finance opportunities .
                Through such engagements, Dr. Banerjee contributes to public discourse on
                cryptocurrency technology, helping both technical and general audiences understand
                the implications of blockchain innovations.
              </p>
              <p className="text-gray-700">
                In addition to conferences, Banerjee shares insights via online platforms. He has
                written articles on Medium and curates content on topics like coding and blockchain.
                He maintains an active presence on social media—on <b>X (Twitter)</b> he often
                comments on market trends and research, engaging with a following of over 2,400
                users. This blend of media activity and community engagement reflects his commitment
                to <b>outreach and knowledge dissemination</b> beyond academia and industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
