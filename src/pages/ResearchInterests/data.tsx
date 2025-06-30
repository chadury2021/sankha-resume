import { ReactComponent as DocumentIcon } from '../../assets/document.svg';

export const publications = [
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
