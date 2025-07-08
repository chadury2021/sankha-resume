import { ReactComponent as BuildingIcon } from '../../assets/building-library.svg';
import { ReactComponent as ChartBarIcon } from '../../assets/chart-bar.svg';
import { ReactComponent as CodeBracketLineIcon } from '../../assets/code-bracket-square.svg';
import { ReactComponent as LinkIcon } from '../../assets/link.svg';
import { ReactComponent as ChartLineIcon } from '../../assets/presentation-chart-line.svg';
import { ReactComponent as ScaleIcon } from '../../assets/scale.svg';
import { ReactComponent as ShieldExclamationIcon } from '../../assets/shield-exclamation.svg';
import LinkText from '../../components/reusable/LinkText.tsx';

export const whyTheMapEnduresData = [
  {
    title: 'Physics-Respecting',
    description: 'Embeds realizability by construction.',
    Icon: <ScaleIcon />,
  },
  {
    title: 'ML-Ready',
    description:
      'Converts a 3×3 tensor into a compact, interpretable 3-tuple—ideal for training data-efficient models.',
    Icon: <ChartBarIcon />,
  },
  {
    title: 'Mesh-Independent',
    description: 'Needs only local Reynolds-stress tensors; no wall-distance or grid data.',
    Icon: <LinkIcon />,
  },
  {
    title: 'Agency-Wide Adoption',
    description:
      'Now appears in AIAA CFD workshops, NASA Technical Reports, and Langley’s on-line documentation, signalling methodological standardisation.',
    Icon: <BuildingIcon />,
  },
];

export const nutshellBarycentricMapTableConfig = {
  headers: ['Element', 'Key Points', 'Why It Matters'],
  rows: [
    {
      element: 'Origin',
      keyPoints: (
        <span>
          Proposed by{' '}
          <span className="highlighted-text">Banerjee, Krahl, Durst & Zenger (2007)</span> as a
          transformation of the classical Lumley invariant triangle to{' '}
          <span className="highlighted-text">barycentric (simplex) coordinates</span>. (
          <LinkText
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
          Vertices correspond to the three limiting turbulence states—
          <span className="highlighted-text">1-component</span>,
          <span className="highlighted-text">2-component</span>, and{' '}
          <span className="highlighted-text">3-component (isotropic)</span> flow. Distances within
          the triangle have a <span className="highlighted-text">metric meaning</span> (degree &
          type of anisotropy).
        </span>
      ),
      whyItMatters:
        'Enables immediate visual and quantitative assessment of how far a modeled flow is from physical limits.',
    },
    {
      element: 'Analytical Leverage',
      keyPoints: (
        <span>
          Provides an{' '}
          <span className="highlighted-text">orthonormal basis for eigen-perturbations</span>;
          facilitates realizability-preserving tensor perturbations and machine-learning features.
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
        <LinkText
          url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
          title="annualreviews.org"
        />
        )
      </span>
    ),
    Icon: <ShieldExclamationIcon />,
  },
  {
    title: 'Statistical Inference & UQ',
    description: (
      <span>
        The review points to the{' '}
        <span className="highlighted-text">Eigenspace-Perturbation Method</span> of Iaccarino,
        Mishra & Ghili (2017), which is formulated directly in barycentric space. (
        <LinkText
          url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
          title="annualreviews.org"
        />
        )
      </span>
    ),
    Icon: <ChartLineIcon />,
  },
  {
    title: 'Machine-Learning Features',
    description: (
      <span>
        The map’s coordinate tuples are recommended as low-dimensional, physics-aware inputs to
        regression or neural-network surrogates. (
        <LinkText
          url="https://www.annualreviews.org/content/journals/10.1146/annurev-fluid-010518-040547"
          title="annualreviews.org"
        />
        )
      </span>
    ),
    Icon: <CodeBracketLineIcon />,
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
          <LinkText
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
          <LinkText url="https://turbmodels.larc.nasa.gov/" title="turbmodels.larc.nasa.gov" />)
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
          <LinkText
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
          <LinkText
            url="https://ntrs.nasa.gov/api/citations/20230016768/downloads/Reising_Scitech24_W6BPIVReport2.pdf?utm_source=chatgpt.com"
            title="ntrs.nasa.gov"
          />
          )
        </span>
      ),
    },
  ],
};
