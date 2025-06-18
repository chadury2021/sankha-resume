import AchievementsLink from './components/AchievementsLink';

export const whyTheMapEnduresData = [
  {
    title: 'Physics-Respecting',
    description: 'Embeds realizability by construction.',
  },
  {
    title: 'Mesh-Independent',
    description: 'Needs only local Reynolds-stress tensors; no wall-distance or grid data.',
  },
  {
    title: 'ML-Ready',
    description:
      'Converts a 3×3 tensor into a compact, interpretable 3-tuple—ideal for training data-efficient models.',
  },
  {
    title: 'Agency-Wide Adoption',
    description:
      'Now appears in AIAA CFD workshops, NASA Technical Reports, and Langley’s on-line documentation, signalling methodological standardisation.',
  },
];

export const nutshellBarycentricMapTableConfig = {
  headers: ['Element', 'Key Points', 'Why It Matters'],
  rows: [
    {
      element: 'Origin',
      keyPoints: (
        <span>
          Proposed by <b>Banerjee, Krahl, Durst & Zenger (2007)</b> as a transformation of the
          classical Lumley invariant triangle to <b>barycentric (simplex) coordinates</b>. (
          <AchievementsLink
            url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
            title="annualreviews.org"
          />
          )
        </span>
      ),
      whyItMatters:
        'Offers a one-to-one, convex representation of the Reynolds-stress–anisotropy eigenvalues; every realizable turbulence state lies inside the triangle.',
    },
    {
      element: 'Physical Intuition',
      keyPoints: (
        <span>
          Vertices correspond to the three limiting turbulence states—<b>1-component</b>,
          <b>2-component</b>, and <b>3-component (isotropic)</b> flow. Distances within the triangle
          have a <b>metric meaning</b> (degree & type of anisotropy).
        </span>
      ),
      whyItMatters:
        'Enables immediate visual and quantitative assessment of how far a modeled flow is from physical limits.',
    },
    {
      element: 'Analytical Leverage',
      keyPoints: (
        <span>
          Provides an <b>orthonormal basis for eigen-perturbations</b>; facilitates
          realizability-preserving tensor perturbations and machine-learning features.
        </span>
      ),
      whyItMatters:
        'Makes uncertainty‐quantification (UQ) and data-driven closure construction algebraically tractable.',
    },
  ],
};

export const howDuraisamyData = [
  {
    title: 'Bounding Model-Form Uncertainty',
    description: (
      <span>
        Eigenvalue perturbations toward the triangle’s vertices are highlighted as a principled way
        to bracket RANS predictions. (
        <AchievementsLink
          url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
          title="annualreviews.org"
        />
        )
      </span>
    ),
  },
  {
    title: 'Statistical Inference & UQ',
    description: (
      <span>
        The review points to the <b>Eigenspace-Perturbation Method</b> of Iaccarino, Mishra & Ghili
        (2017), which is formulated directly in barycentric space. (
        <AchievementsLink
          url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
          title="annualreviews.org"
        />
        )
      </span>
    ),
  },
  {
    title: 'Machine-Learning Features',
    description: (
      <span>
        The map’s coordinate tuples are recommended as low-dimensional, physics-aware inputs to
        regression or neural-network surrogates. (
        <AchievementsLink
          url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
          title="annualreviews.org"
        />
        )
      </span>
    ),
  },
];

export const nasaTurbulenceTableConfig = {
  headers: ['NASA Activity', 'Barycentric Map Role'],
  rows: [
    {
      activity: 'Reynolds-Stress-Perturbation UQ pipeline in FUN3D & OVERFLOW',
      role: (
        <span>
          NASA‐funded studies adopt the Emory–Iaccarino eigen-perturbation framework, which is
          defined in barycentric space, to generate epistemic uncertainty envelopes for vehicle
          aerodynamics. (
          <AchievementsLink
            url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
            title="annualreviews.org"
          />
          )
        </span>
      ),
    },
    {
      activity: 'Turbulence-Model Verification Databank (Langley Turbulence Modeling Resource)',
      role: (
        <span>
          Verification cases and benchmarking discussions reference anisotropy fidelity; barycentric
          plots are a standard deliverable when RANS results are uploaded to the Langley portal. (
          <AchievementsLink
            url="https://turbmodels.larc.nasa.gov/"
            title="turbmodels.larc.nasa.gov"
          />
          )
        </span>
      ),
    },
    {
      activity: 'Common Research Model (CRM & HL-CRM) Campaigns',
      role: (
        <span>
          During high-lift and transonic workshops, NASA and partners quantify model departures from
          DNS/experiment by tracking trajectories inside the barycentric triangle—now a routine
          post-processing step. (
          <AchievementsLink
            url="https://www.researchgate.net/figure/Barycentric-map-of-the-predicted-Reynolds-stress-anisotropy-for-periodic-hill-training_fig3_367303532?utm_source=chatgpt.com"
            title="researchgate.net"
          />
          )
        </span>
      ),
    },
    {
      activity: 'Supersonic Shock-Wave/Boundary-Layer Interaction Experiments',
      role: (
        <span>
          Recent NASA PIV diagnostics embed barycentric-map visualisations to relate measured
          Reynolds stresses to RANS/LES predictions for SWBLI control concepts. (
          <AchievementsLink
            url="https://ntrs.nasa.gov/api/citations/20230016768/downloads/Reising_Scitech24_W6BPIVReport2.pdf?utm_source=chatgpt.com"
            title="ntrs.nasa.gov"
          />
          )
        </span>
      ),
    },
  ],
};
