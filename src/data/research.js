export const publications = [
  {
    year: 2026,
    title: 'Investigation of Aeroacoustics and In-flight Particle Transport in Thermal Spray Supersonic Jets',
    authors: '<strong>D. Rahmat Samii</strong>, M. Tembely',
    venue: 'arXiv preprint',
    type: 'Preprint',
    links: [
      { label: 'arXiv', icon: 'fas fa-external-link-alt', href: 'https://doi.org/10.48550/arXiv.2603.05547' },
      { label: 'Code', icon: 'fab fa-github', href: 'https://github.com/DaraSamii/sonicDPMFoam' },
    ],
  },
  {
    year: 2025,
    title: 'Accelerating Thermal Homann Flow Simulation With Mesh-Based Graph Neural Networks',
    authors: '<strong>D. Rahmat Samii</strong>, M. Tembely',
    venue: 'IEEE Access',
    type: 'Journal',
    links: [
      { label: 'DOI', icon: 'fas fa-external-link-alt', href: 'https://ieeexplore.ieee.org/document/11025840' },
      { label: 'Code', icon: 'fab fa-github', href: 'https://github.com/DaraSamii/MeshGraphNet_Homann_results' },
    ],
  },
  {
    year: 2023,
    title: 'CFD Based Design Gas Rotameters: Dynamic Mesh Transient Simulation',
    authors: '<strong>D. Rahmat Samii</strong>, S. H. HashemAbadi, P. Margan',
    venue: 'Flow Measurement and Instrumentation',
    type: 'Journal',
    links: [{ label: 'DOI', icon: 'fas fa-external-link-alt', href: 'https://doi.org/10.1016/j.flowmeasinst.2023.102513' }],
  },
];

export const conferences = [
  {
    date: 'Mar 2026',
    title: 'Computational Fluid Dynamics (CFD) Analysis of a Supersonic Rocket',
    venue: 'Conférence annuelle de fuséologie d’Oronos 2026 · Polytechnique Montréal',
  },
  {
    date: 'May 2025',
    title: 'Numerical Simulation and Prediction of Particle Distribution Based on Aeroacoustic Signals Emitted by the HVAF Process',
    venue: '32nd Annual CSME–CFDSC–CSR 2025 · ÉTS Montréal',
    href: 'https://event.fourwaves.com/csme2025/abstracts/0ca33bd5-ed4b-421e-98dc-8b7ee176ac0e',
  },
  {
    date: 'May 2024',
    title: 'Accelerating Simulations of Plasma Flow and Substrate Interaction in Thermal Spray',
    venue: '31st Annual CSME/CFD 2024 · University of Toronto',
    href: 'https://event.fourwaves.com/csme-cfd2024/abstracts/db54d97f-6ff5-41f7-9fc0-198242c41d8c',
  },
];

// Research directions, newest first. `projects` are slugs from projects.js.
export const themes = [
  {
    id: 'reacting',
    color: '#e4572e',
    kicker: 'Ph.D. · McGill · from Jan 2027',
    title: 'Hydrogen–methane flames',
    icon: 'fas fa-fire',
    text: 'Direct numerical and large-eddy simulation of hydrogen-enriched methane flames in the ASEC Lab with Prof. Hendrik Nicolai: how hydrogen blending changes flame structure, stability and turbulence–chemistry interaction. Groundwork so far: a Cantera study from 0D reactors to 1D premixed and non-premixed H₂/air and CH₄/air flames.',
    tags: ['DNS', 'LES', 'Combustion', 'Cantera'],
    links: [{ label: 'Cantera reactive-flow study', icon: 'fab fa-github', href: 'https://github.com/DaraSamii/cantera' }],
  },
  {
    id: 'supersonic',
    color: '#0064e0',
    kicker: 'M.A.Sc. thesis · Concordia',
    title: 'Supersonic particle-laden jets & aeroacoustics',
    icon: 'fas fa-wind',
    text: 'Thermal and cold spray accelerate powder through supersonic nozzles at 35–65 bar and 707–807 K. I extended OpenFOAM’s sonicFoam into sonicDPMFoam (two-way coupled Lagrangian particles), ran RANS → DDES on 400+ cores, verified the Kolmogorov cascade, and used the FW-H analogy to link the jet’s acoustic signature to particle distribution.',
    tags: ['OpenFOAM', 'DDES', 'DPM', 'FW-H', 'HPC'],
    projects: ['thermal-spray'],
  },
  {
    id: 'sciml',
    color: '#a121ce',
    kicker: 'Scientific machine learning',
    title: 'Graph neural networks as CFD surrogates',
    icon: 'fas fa-project-diagram',
    text: 'Mesh-based GNNs that read an OpenFOAM polyMesh as a graph and predict thermal Homann flow 100× faster than the solver (IEEE Access 2025).',
    tags: ['PyTorch Geometric', 'MeshGraphNet', 'Optuna'],
    projects: ['mesh-gnn'],
  },
  {
    id: 'rotameter',
    color: '#f2a918',
    kicker: 'B.Sc. thesis · IUST',
    title: 'CFD-driven design of gas rotameters',
    icon: 'fas fa-tachometer-alt',
    text: 'Designing and manufacturing a gas rotameter with transient dynamic-mesh CFD in ANSYS Fluent: the float moves with the flow, the mesh deforms with it, and the predicted float position was validated against experiments. Published in Flow Measurement and Instrumentation (2023).',
    tags: ['ANSYS Fluent', 'Dynamic mesh', 'Transient', 'Validation'],
    projects: ['rotameter'],
  },
  {
    id: 'rocket-aero',
    color: '#31a24c',
    kicker: 'Applied aerodynamics',
    title: 'Supersonic rocket aerodynamics',
    icon: 'fas fa-rocket',
    text: 'Aerodynamic coefficients, centre of pressure, nose-tip heating and distributed loads for Space Concordia’s CR25 and two-stage CR26 rockets (Mach 0.8–2.5), validated against RASAero, OpenRocket and flight telemetry.',
    tags: ['OpenFOAM', 'cfMesh', 'rhoSimpleFoam', 'Validation'],
    more: { label: 'CR25 & CR26 on the Rocketry page', href: '/rocketry/#projects' },
  },
];
