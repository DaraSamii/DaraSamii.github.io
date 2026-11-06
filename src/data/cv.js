// Content mirrored from the academic CV (CV/main.tex) and the previous site.

export const researchInterests = [
  'Computational Fluid Dynamics',
  'Compressible & Supersonic Flow',
  'Reacting Flow Simulation (DNS/LES)',
  'Multiphase & Particle Flow',
  'Turbulence Modelling',
  'Aeroacoustics',
  'Mesh-Based Graph Neural Networks',
  'Scientific Machine Learning',
  'High Performance Computing',
];

export const skills = [
  { title: 'Simulation', icon: 'fas fa-cube', items: ['OpenFOAM (custom solvers)', 'ANSYS Fluent', 'COMSOL', 'Cantera', 'ParaView'] },
  { title: 'CAD & Meshing', icon: 'fas fa-draw-polygon', items: ['cfMesh', 'Salome', 'SpaceClaim', 'Onshape', 'SolidWorks', 'FreeCAD'] },
  { title: 'Programming', icon: 'fas fa-code', items: ['Python', 'C++', 'MATLAB', 'Bash', 'Java'] },
  { title: 'ML / DL', icon: 'fas fa-brain', items: ['PyTorch', 'PyTorch Geometric', 'scikit-learn', 'Optuna'] },
  { title: 'HPC & Tools', icon: 'fas fa-server', items: ['Slurm', 'Compute Canada', 'Linux', 'Git', 'Docker', 'LaTeX', 'Manim'] },
];

export const education = [
  {
    school: 'McGill University',
    logo: '/assets/images/logos/mcgill-crest.png',
    degree: 'Ph.D. in Mechanical Engineering',
    location: 'Montréal, Canada',
    date: 'Jan 2027 — Dec 2030 (expected)',
    badges: ['Incoming'],
    details: [
      ['Advisor', '<a href="https://www.mcgill.ca/mecheng/hendrik-nicolai" target="_blank" rel="noopener">Prof. Hendrik Nicolai</a> · ASEC Lab'],
      ['Research', 'DNS/LES of Hydrogen–Methane Flames'],
    ],
  },
  {
    school: 'Concordia University',
    logo: '/assets/images/logos/concordia-logo.png',
    degree: 'M.A.Sc. in Mechanical Engineering',
    location: 'Montréal, Canada',
    date: 'Sep 2023 — Jun 2026',
    badges: ['GPA: 4.23/4.3', 'Thesis: Outstanding'],
    details: [
      ['Advisor', '<a href="https://www.concordia.ca/faculty/moussa-tembely.html" target="_blank" rel="noopener">Prof. Moussa Tembely</a>'],
      ['Thesis', 'Thermofluid Simulation of Thermal Spray Processes'],
    ],
  },
  {
    school: 'University of Tehran',
    logo: '/assets/images/logos/ut-logo.png',
    degree: 'M.Sc. in Chemical Engineering',
    location: 'Tehran, Iran',
    date: '2022 — 2023',
    badges: [],
    details: [['Focus', 'Process Design and Simulation']],
  },
  {
    school: 'Iran University of Science and Technology',
    logo: '/assets/images/logos/iust-logo.png',
    degree: 'B.Sc. in Chemical Engineering',
    location: 'Tehran, Iran',
    date: '2018 — 2022',
    badges: ['GPA: 3.58/4'],
    details: [
      ['Advisor', 'Prof. S.H. HashemAbadi'],
      ['Thesis', 'Design and Manufacturing of a Gas Rotameter Using CFD'],
    ],
  },
];

export const experience = [
  {
    title: 'Ph.D. Researcher (incoming)',
    org: 'McGill University · ASEC Lab',
    date: 'Jan 2027 —',
    icon: 'fas fa-fire',
    points: [
      'DNS/LES of hydrogen–methane flames with Prof. Hendrik Nicolai',
      'Reactive-flow onboarding: Cantera 0D → 1D → 3D (H₂/air and CH₄/air flames)',
    ],
  },
  {
    title: 'CFD Team Lead',
    org: 'Space Concordia, Solid Rocketry Team',
    date: 'Dec 2024 — Present',
    icon: 'fas fa-rocket',
    points: [
      'Executed OpenFOAM simulations for CR25 and CR26 (Icarus & Daedalus)',
      'Computed drag, lift, CoP, stability, thermal loads across Mach 0.8–2.5',
      'Performed Richardson extrapolation; validated against experimental data',
      'Contributed to manufacturing and Launch Canada 2025 operations',
    ],
  },
  {
    title: 'Research Assistant & Teaching Assistant',
    org: 'Concordia University',
    date: 'Sep 2023 — Jun 2026',
    icon: 'fas fa-chalkboard-teacher',
    points: [
      'Research Assistant at Multiphase Thermofluid Learning Lab',
      'Simulated cold spray at 35–65 bar and 707–807 K with high-fidelity CFD',
      'Executed RANS → DDES workflows on HPC (400+ cores)',
      'Extended sonicFoam to sonicDPMFoam with Lagrangian tracking',
      'Accumulated 1,200+ TA hours: Fluid Mechanics, Heat Transfer, CFD',
      'Teaching Excellence Award for Teaching Assistants (May 2026)',
    ],
  },
  {
    title: 'Remote Research Intern',
    org: 'JSPM Imperial College of Engineering',
    date: 'Oct 2021 — Jan 2022',
    icon: 'fas fa-globe',
    points: [
      'Investigated multiphase solvers in OpenFOAM',
      'Collaborated with international research team on solver benchmarking',
    ],
  },
  {
    title: 'Engineering Intern',
    org: 'Partian Battery',
    date: 'Jun 2021 — Oct 2021',
    icon: 'fas fa-battery-full',
    points: [
      'Designed mixing system using COMSOL Multiphysics',
      'Developed parametric simulation app with COMSOL Application Builder',
    ],
  },
];

export const awards = [
  { title: 'Teaching Excellence Award for Teaching Assistants', text: 'Gina Cody School of Engineering and Computer Science, Concordia University — Excellence in Teaching by a Teaching Assistant 2025–2026', year: '2026', icon: 'fas fa-chalkboard-teacher', href: '/teaching/#award' },
  { title: 'Mitacs Globalink Research Award', text: 'CAD $6,000 for international research collaboration (France–Canada)', year: '2025', icon: 'fas fa-globe-americas' },
  { title: 'Concordia Conference Scholarship', text: 'CAD $750 travel support for CSME/CSCFD 2024', year: '2024', icon: 'fas fa-plane' },
  { title: 'Concordia Merit Scholarship', text: 'CAD $5,000 for academic excellence', year: '2023', icon: 'fas fa-award' },
  { title: '8th Place — Chemical Engineering Olympiad', text: '27th National Chemical Engineering Olympiad (Iran)', year: '2022', icon: 'fas fa-medal' },
  { title: 'Direct M.Sc. Admission Qualification', text: 'Top 10% of the 2018 cohort; entrance exam waived', year: '2022', icon: 'fas fa-star' },
  { title: '2nd Place — Internship Poster Competition', text: 'Among 80 participants', year: '2021', icon: 'fas fa-image' },
  { title: '1st Place — Rahneshan National Competition', text: 'CFD modeling of particle crystallization (Team Lead)', year: '2021', icon: 'fas fa-trophy' },
];

export const certifications = [
  {
    title: 'L3 Rocketry Certificate', level: 'L3', rocket: 'Lord Cyrus Modified', org: 'Canadian Association of Rocketry', date: 'May 2026', icon: 'fas fa-rocket',
    images: [
      { src: '/assets/images/rocketry/l3/lord-cyrus-modified.jpg', alt: 'Dara holding Lord Cyrus Modified, his L3 certification rocket' },
      { src: '/assets/images/rocketry/l3/on-the-pad.jpg', alt: 'Lord Cyrus Modified on the launch rail' },
    ],
  },
  {
    title: 'L2 Rocketry Certificate', level: 'L2', rocket: 'Lord Cyrus', org: 'Canadian Association of Rocketry', date: 'Oct 2025', icon: 'fas fa-rocket',
    images: [
      { src: '/assets/images/rocketry/l2/lord-cyrus.jpg', alt: 'Dara holding Lord Cyrus, his L2 certification rocket' },
      { src: '/assets/images/rocketry/l2/on-the-pad.jpg', alt: 'Lord Cyrus on the launch rail in autumn' },
    ],
  },
  {
    title: 'L1 Rocketry Certificate', level: 'L1', rocket: 'Darius', org: 'Canadian Association of Rocketry', date: 'May 2025', icon: 'fas fa-rocket',
    images: [
      { src: '/assets/images/rocketry/l1/darius.jpg', alt: 'Dara with Darius, his L1 certification rocket' },
      { src: '/assets/images/rocketry/l1/team.jpg', alt: 'Launch-day crew after the L1 flights' },
    ],
  },
  { title: 'Machine Learning', org: 'Stanford Online', href: 'https://www.coursera.org/account/accomplishments/certificate/38UU5AV64VLG', icon: 'fas fa-brain' },
  { title: 'Deep Learning Specialization', org: 'DeepLearning.AI', href: 'https://www.coursera.org/account/accomplishments/specialization/certificate/L3XB7S5DBMVY', icon: 'fas fa-network-wired' },
  { title: 'Fundamentals of Reinforcement Learning', org: 'University of Alberta', href: 'https://www.coursera.org/account/accomplishments/certificate/BYSCEMT3P6UD', icon: 'fas fa-robot' },
  { title: 'Game Theory', org: 'Stanford & UBC', href: 'https://www.coursera.org/account/accomplishments/verify/MW46ANCDCZM7', icon: 'fas fa-chess' },
  { title: 'From Nand to Tetris', org: 'Hebrew University of Jerusalem', href: 'https://coursera.org/share/08d088ec9315828c1b1836a717962446', icon: 'fas fa-microchip' },
];
