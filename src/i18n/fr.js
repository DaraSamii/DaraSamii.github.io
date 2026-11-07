// French overlay for src/data. Same shape as the English data, only the text that changes.
// Arrays of {slug|id} items are keyed by slug/id; plain arrays are matched by index. Missing text falls back to English.
// Paper and talk titles stay in their original English.
export default {
  // profile.js
  profile: {
    role: 'Doctorant · Mécanique des fluides numérique',
    jobTitle: 'Doctorant en mécanique des fluides numérique (CFD)',
    headline: 'Je simule des écoulements rapides, chauds et réactifs.',
    intro: 'Futur doctorant à l’Université McGill (laboratoire ASEC), sur la simulation DNS/LES de flammes hydrogène–méthane. Je développe des solveurs OpenFOAM pour des jets supersoniques chargés de particules, je dirige la CFD des fusées supersoniques de Space Concordia, j’accélère les solveurs avec des réseaux de neurones sur graphes, et j’enseigne la mécanique des fluides.',
    location: 'Montréal, Canada',
  },
  coffee: { label: 'Offrez-moi un café' },
  stats: [
    { label: 'Accélération par GNN par rapport au solveur CFD' },
    { value: 'Mach 1,54', label: 'Étage supérieur de CR26, apogée de 47 991 pi' },
    { value: '1 200+', label: 'Heures d’auxiliaire d’enseignement, prix d’excellence' },
    { label: 'Fuséonautique de haute puissance (Association canadienne de fuséonautique)' },
  ],

  // cv.js
  researchInterests: [
    'Mécanique des fluides numérique',
    'Écoulements compressibles et supersoniques',
    'Simulation d’écoulements réactifs (DNS/LES)',
    'Écoulements multiphasiques et particulaires',
    'Modélisation de la turbulence',
    'Aéroacoustique',
    'Réseaux de neurones sur graphes (maillages)',
    'Apprentissage automatique scientifique',
    'Calcul haute performance',
  ],
  skills: [
    { title: 'Simulation', items: ['OpenFOAM (solveurs maison)'] },
    { title: 'CAO et maillage' },
    { title: 'Programmation' },
    { title: 'Apprentissage automatique' },
    { title: 'Calcul haute performance et outils' },
  ],
  education: [
    {
      school: 'Université McGill',
      degree: 'Doctorat (Ph.D.) en génie mécanique',
      date: 'janv. 2027 — déc. 2030 (prévu)',
      badges: ['À venir'],
      details: [['Directeur', undefined], ['Recherche', 'DNS/LES de flammes hydrogène–méthane']],
    },
    {
      school: 'Université Concordia',
      degree: 'Maîtrise (M.A.Sc.) en génie mécanique',
      date: 'sept. 2023 — juin 2026',
      badges: ['MPC : 4,23/4,3', 'Mémoire : Exceptionnel'],
      details: [['Directeur', undefined], ['Mémoire', 'Simulation thermofluide des procédés de projection thermique']],
    },
    {
      school: 'Université de Téhéran',
      degree: 'Maîtrise (M.Sc.) en génie chimique',
      location: 'Téhéran, Iran',
      details: [['Spécialisation', 'Conception et simulation de procédés']],
    },
    {
      school: 'Université iranienne des sciences et technologies',
      degree: 'Baccalauréat (B.Sc.) en génie chimique',
      location: 'Téhéran, Iran',
      badges: ['MPC : 3,58/4'],
      details: [['Directeur', undefined], ['Projet de fin d’études', 'Conception et fabrication d’un rotamètre à gaz par CFD']],
    },
  ],
  experience: [
    {
      title: 'Doctorant (à venir)',
      org: 'Université McGill · laboratoire ASEC',
      date: 'janv. 2027 —',
      points: [
        'DNS/LES de flammes hydrogène–méthane avec le Pr Hendrik Nicolai',
        'Initiation aux écoulements réactifs : Cantera 0D → 1D → 3D (flammes H₂/air et CH₄/air)',
      ],
    },
    {
      title: 'Responsable CFD',
      org: 'Space Concordia, équipe de fusées à propergol solide',
      date: 'déc. 2024 — aujourd’hui',
      points: [
        'Simulations OpenFOAM pour CR25 et CR26 (Icarus et Daedalus)',
        'Calcul de la traînée, de la portance, du centre de pression, de la stabilité et des charges thermiques de Mach 0,8 à 2,5',
        'Extrapolation de Richardson ; validation par des données expérimentales',
        'Participation à la fabrication et aux opérations de Launch Canada 2025',
      ],
    },
    {
      title: 'Assistant de recherche et auxiliaire d’enseignement',
      org: 'Université Concordia',
      date: 'sept. 2023 — juin 2026',
      points: [
        'Assistant de recherche au Multiphase Thermofluid Learning Lab',
        'Simulation de la projection à froid à 35–65 bar et 707–807 K par CFD haute fidélité',
        'Chaînes de calcul RANS → DDES sur grappe de calcul (plus de 400 cœurs)',
        'Extension de sonicFoam en sonicDPMFoam avec suivi lagrangien des particules',
        'Plus de 1 200 heures d’auxiliariat : mécanique des fluides, transfert de chaleur, CFD',
        'Prix d’excellence en enseignement pour les auxiliaires d’enseignement (mai 2026)',
      ],
    },
    {
      title: 'Stagiaire de recherche à distance',
      date: 'oct. 2021 — janv. 2022',
      points: [
        'Étude des solveurs multiphasiques d’OpenFOAM',
        'Collaboration avec une équipe internationale sur l’étalonnage comparatif de solveurs',
      ],
    },
    {
      title: 'Stagiaire en ingénierie',
      date: 'juin 2021 — oct. 2021',
      points: [
        'Conception d’un système de mélange avec COMSOL Multiphysics',
        'Développement d’une application de simulation paramétrique avec COMSOL Application Builder',
      ],
    },
  ],
  awards: [
    { title: 'Prix d’excellence en enseignement pour les auxiliaires d’enseignement', text: 'École de génie et d’informatique Gina-Cody, Université Concordia — Excellence in Teaching by a Teaching Assistant 2025–2026' },
    { title: 'Bourse de recherche Mitacs Globalink', text: '6 000 $ CA pour une collaboration de recherche internationale (France–Canada)' },
    { title: 'Bourse de conférence de Concordia', text: '750 $ CA d’aide au déplacement pour CSME/CSCFD 2024' },
    { title: 'Bourse de mérite de Concordia', text: '5 000 $ CA pour l’excellence académique' },
    { title: '8e place — Olympiade de génie chimique', text: '27e Olympiade nationale de génie chimique (Iran)' },
    { title: 'Admission directe à la maîtrise', text: '10 % supérieurs de la cohorte 2018 ; examen d’entrée exempté' },
    { title: '2e place — Concours d’affiches de stage', text: 'Parmi 80 participants' },
    { title: '1re place — Concours national Rahneshan', text: 'Modélisation CFD de la cristallisation de particules (chef d’équipe)' },
  ],
  certifications: [
    { title: 'Certification de fuséonautique L3', org: 'Association canadienne de fuséonautique', date: 'mai 2026', rocket: 'Lord Cyrus Modified' },
    { title: 'Certification de fuséonautique L2', org: 'Association canadienne de fuséonautique', date: 'oct. 2025' },
    { title: 'Certification de fuséonautique L1', org: 'Association canadienne de fuséonautique', date: 'mai 2025' },
    { title: 'Apprentissage automatique (Machine Learning)' },
    { title: 'Spécialisation en apprentissage profond' },
    { title: 'Fondements de l’apprentissage par renforcement' },
    { title: 'Théorie des jeux' },
    { title: 'De Nand à Tetris (From Nand to Tetris)' },
  ],

  // research.js
  publications: [{ type: 'Prépublication' }, { type: 'Revue' }, { type: 'Revue' }],
  conferences: [{ date: 'mars 2026' }, { date: 'mai 2025' }, { date: 'mai 2024' }],
  themes: {
    reacting: {
      kicker: 'Doctorat · McGill · dès janvier 2027',
      title: 'Flammes hydrogène–méthane',
      text: 'Simulation numérique directe et simulation des grandes échelles de flammes de méthane enrichies en hydrogène, au laboratoire ASEC avec le Pr Hendrik Nicolai : comment l’ajout d’hydrogène modifie la structure de la flamme, sa stabilité et l’interaction turbulence–chimie. Travail préparatoire : une étude Cantera, des réacteurs 0D aux flammes 1D prémélangées et non prémélangées H₂/air et CH₄/air.',
      tags: ['DNS', 'LES', 'Combustion', 'Cantera'],
      links: [{ label: 'Étude Cantera des écoulements réactifs' }],
    },
    supersonic: {
      kicker: 'Mémoire de maîtrise · Concordia',
      title: 'Jets supersoniques chargés de particules et aéroacoustique',
      text: 'La projection thermique et la projection à froid accélèrent de la poudre dans des tuyères supersoniques à 35–65 bar et 707–807 K. J’ai étendu sonicFoam d’OpenFOAM en sonicDPMFoam (particules lagrangiennes à couplage bidirectionnel), mené des calculs RANS → DDES sur plus de 400 cœurs, vérifié la cascade de Kolmogorov et utilisé l’analogie de Ffowcs Williams–Hawkings pour relier la signature acoustique du jet à la distribution des particules.',
    },
    sciml: {
      kicker: 'Apprentissage automatique scientifique',
      title: 'Réseaux de neurones sur graphes comme substituts de la CFD',
      text: 'Des GNN sur maillage qui lisent un polyMesh OpenFOAM comme un graphe et prédisent l’écoulement thermique de Homann 100 fois plus vite que le solveur (IEEE Access, 2025).',
    },
    'flow-metering': {
      kicker: 'Projet de fin d’études · IUST',
      title: 'Conception de rotamètres à gaz par CFD',
      text: 'Conception et fabrication d’un rotamètre à gaz par CFD transitoire à maillage dynamique sous ANSYS Fluent : le flotteur se déplace avec l’écoulement, le maillage se déforme avec lui, et la position prédite du flotteur a été validée expérimentalement. Publié dans Flow Measurement and Instrumentation (2023).',
      tags: ['ANSYS Fluent', 'Maillage dynamique', 'Transitoire', 'Validation'],
    },
    'rocket-aero': {
      kicker: 'Aérodynamique appliquée',
      title: 'Aérodynamique des fusées supersoniques',
      text: 'Coefficients aérodynamiques, centre de pression, échauffement de l’ogive et charges réparties pour les fusées CR25 et CR26 (à deux étages) de Space Concordia (Mach 0,8–2,5), validés par RASAero, OpenRocket et la télémétrie de vol.',
      more: { label: 'CR25 et CR26 sur la page Fuséonautique' },
    },
  },

  // projects.js
  categories: {
    all: { label: 'Tout' }, ml: { label: 'Apprentissage automatique' }, rocketry: { label: 'Fuséonautique' },
    software: { label: 'Logiciels et applications' }, engineering: { label: 'Montages d’ingénierie' },
  },
  projects: {
    'mesh-gnn': {
      title: 'GNN sur maillage pour accélérer la CFD',
      summary: '<strong>Accélération de 100×</strong> par rapport aux solveurs classiques en convertissant le polyMesh d’OpenFOAM en graphe et en entraînant des réseaux de neurones sur graphes pour prédire l’écoulement thermique de Homann. Publié dans IEEE Access.',
      details: 'Création d’un grand jeu de données CFD par CAO paramétrique, maillage et simulation OpenFOAM. Conversion du <code>polyMesh</code> en graphes ; optimisation des architectures GNN avec Optuna.',
      links: [undefined, { label: 'Article' }],
    },
    'cr26-cfd': {
      title: 'Space Concordia CR26 — fusée supersonique à deux étages',
      summary: 'CFD OpenFOAM + cfMesh de l’ensemble propulseur + étage supérieur et de l’étage supérieur seul, balayée en géométrie × Mach × incidence sur Slurm, puis confrontée au vol. Lancée à Launch Canada le <strong>19 août 2026</strong> : apogée de l’étage supérieur à <strong>47 991 pi</strong>, à <strong>Mach 1,54</strong>.',
      details: 'Étude de maillage avec extrapolation de Richardson, progression des <code>fvSchemes</code> du stable vers le précis, coefficients aérodynamiques, centre de pression, température de l’ogive et efforts répartis, validés par RASAero et OpenRocket. Après le vol, analyse de la télémétrie GPS/LoRa des deux étages (apogée du propulseur : 14 364 pi ; étage supérieur : 14 628 m au-dessus du sol à T+51,6 s).',
    },
    'cr25-cfd': {
      title: 'Space Concordia CR25 — analyse CFD',
      summary: 'Simulations aérodynamiques OpenFOAM de CR25 : traînée, portance, centre de pression, stabilité, charges thermiques et moments de flexion de Mach 0,8 à 2,5 et à ±5° d’incidence.',
      details: 'Extrapolation de Richardson pour la sensibilité au maillage ; <code>fvSchemes</code> en plusieurs étapes (upwind → linearUpwind). Géométries simplifiées et maquettes imprimées en 3D ; validation par des données expérimentales. Collaboration avec les équipes Performance de vol et Structures ; documentation de revue de conception préliminaire (PDR) pour CR26.',
      links: [undefined, { label: 'Rapport' }],
    },
    'thermal-spray': {
      title: 'Simulation CFD aéroacoustique de la projection thermique (mémoire de maîtrise)',
      summary: 'Extension de <code>sonicFoam</code> en <a href="https://github.com/DaraSamii/sonicDPMFoam" target="_blank" rel="noopener"><code>sonicDPMFoam</code></a>, un solveur OpenFOAM libre pour les écoulements supersoniques avec particules lagrangiennes à couplage bidirectionnel. Chaînes RANS → DDES ; turbulence vérifiée par la cascade de Kolmogorov ; aéroacoustique par Ffowcs Williams–Hawkings (libAcoustics).',
      details: 'sonicDPMFoam ajoute à <code>sonicFoam</code> les forces de traînée, de gradient de pression et de masse ajoutée, l’interaction avec les parois et des collisions DEM optionnelles ; laminaire, RANS, LES et DES ; en série ou en parallèle MPI. Simulation de la projection à froid à 35–65 bar et 707–807 K. Modèle analytique pour une analyse aéroacoustique préliminaire. Validation de l’interaction particules–choc et des prédictions acoustiques par la littérature. Post-traitement en Python/PyVista ; calculs sur Calcul Canada (plus de 400 cœurs).',
    },
    openrocket: {
      title: 'OpenRocket — export CAO, flottement des ailerons et Monte-Carlo',
      summary: 'Contributions au simulateur de fusées libre. La <a href="https://github.com/openrocket/openrocket/pull/3396" target="_blank" rel="noopener">PR #3396</a> exporte les ailerons et les bagues de centrage en <strong>DXF, STEP, STL et 3MF</strong> à l’échelle réelle, avec une vérification des cotes par relecture du fichier, pour que Space Concordia envoie les pièces directement à la découpe laser.',
      details: 'En développement sur ma divergence (fork) : vitesse et marge de flottement des ailerons tout au long du vol (vérifiées avec le calculateur de Bennett) ; lignes d’angle de Mach sur la figure de la fusée ; scénarios de récupération, carte OpenStreetMap des atterrissages, statistiques de progression en direct et nombre de fils pour l’analyse Monte-Carlo ; outils de forme pour les ailerons libres ; export STL/STEP/3MF de la surface extérieure fermée de la fusée.',
      links: [undefined, { label: 'Fork' }],
    },
    rocketcalculator: {
      title: 'RocketCalculator — 27 calculateurs pour fusées-sondes',
      summary: 'Reconstruction libre des rapports d’ingénierie de C. P. Hoult sous forme de site interactif : centre de pression, traînée, flottement des ailerons, modes de flexion, trajectoire, récupération et plus, chacun avec un verdict, un dessin à l’échelle et la théorie associée.',
      details: 'Mes contributions : l’animation de vol de la page d’accueil, la visite guidée, les correctifs tactiles et mobiles, le référencement, les fichiers communautaires libres et l’intégration continue. Je rédige aussi le premier article de recherche de RocketCalculator (en préparation) : le centre de pression subsonique des fusées à ailerons (équations de Barrowman dérivées, vérifiées à 1e-10 par quadrature et soumises à une analyse de sensibilité).',
      links: [{ label: 'Site en ligne' }],
    },
    rotameter: {
      title: 'Conception d’un rotamètre à gaz par CFD',
      summary: 'Simulations transitoires ANSYS Fluent à maillage dynamique, validées par des données expérimentales. Publié dans Flow Measurement and Instrumentation.',
      details: 'Comparaison des schémas de déformation de maillage triangulaire et quadrilatère. Travail réalisé dans le cadre de mon projet de fin d’études à l’Université iranienne des sciences et technologies.',
      links: [{ label: 'Article' }],
    },
    'pid-ball': {
      title: 'Balancier à balle PID sur Arduino',
      summary: 'Système de régulation PID imprimé en 3D avec un Arduino Uno ; réglage des gains PID pour stabiliser une balle de ping-pong à l’aide de capteurs à ultrasons et d’un plateau piloté par servomoteur.',
      details: 'Mise en pratique de la commande des systèmes avec des pièces imprimées en 3D sur mesure.',
    },
    'py-distillation': {
      summary: 'Bibliothèque Python de calcul de colonnes de distillation par les méthodes de Ponchon-Savarit et de McCabe-Thiele, en plusieurs configurations.',
      details: 'Prend en charge l’injection directe de vapeur, les alimentations multiples et les soutirages latéraux. Utile pour la conception et la simulation de procédés en génie chimique.',
    },
    'ai-ducation': {
      summary: 'Fusion des jeux de données FER2013 et FER+ ; réseaux convolutifs de reconnaissance des émotions faciales ; validation croisée et analyse des biais selon le genre et l’âge.',
      details: 'Ce projet explore la rencontre de l’IA et des technologies éducatives à travers la reconnaissance des émotions faciales.',
    },
    'ear-training': {
      title: 'Ear Training With Fun',
      summary: 'Application web d’entraînement de l’oreille à la Duolingo : cours, plus de 18 jeux, révision espacée et séries quotidiennes. React + Firebase.',
      links: [{ label: 'Application en ligne' }],
    },
    'kde-plasma': {
      title: 'Lanceur et widgets pour KDE Plasma',
      summary: 'DaraLauncher, un lanceur d’applications plein écran rapide, et DaraPlasmoids, un widget météo animé multi-villes, pour KDE Plasma 6.',
    },
  },

  // teaching.js
  teachingRoles: [
    {
      role: 'Auxiliaire d’enseignement',
      org: 'Université Concordia · Génie mécanique, industriel et aérospatial',
      date: 'sept. 2023 — juin 2026',
      highlight: 'Prix d’excellence en enseignement pour les auxiliaires d’enseignement, mai 2026',
      points: [
        'Plus de 1 200 heures d’auxiliariat en deux ans, en laboratoire et en tutorat',
        'Laboratoires de mécanique des fluides, de transfert de chaleur et de thermodynamique',
        'Tutorats de CFD pour le génie aérospatial, programmation C++/Arduino, statique et calcul avancé',
      ],
    },
    {
      role: 'Auxiliaire d’enseignement',
      org: 'Université iranienne des sciences et technologies · Génie chimique',
      date: 'févr. 2022 — juil. 2022',
      points: ['Tutorats hebdomadaires et correction pour la mécanique des fluides au premier cycle (environ 30 étudiants)'],
    },
    {
      role: 'Tuteur privé',
      org: 'Travailleur autonome',
      date: '2020 — aujourd’hui',
      points: ['Équations différentielles ordinaires, transformées, mécanique des fluides et programmation C++'],
    },
  ],
  courses: [
    { name: 'Mécanique des fluides', kind: 'Laboratoire · Tutorat' },
    { name: 'CFD pour le génie aérospatial', kind: 'Tutorat' },
    { name: 'Transfert de chaleur', kind: 'Laboratoire' },
    { name: 'Thermodynamique', kind: 'Laboratoire' },
    { name: 'Programmation C++ / Arduino', kind: 'Tutorat' },
    { name: 'Statique', kind: 'Tutorat' },
    { name: 'Calcul avancé', kind: 'Tutorat' },
    { name: 'Équations différentielles', kind: 'Cours particuliers' },
  ],
  materials: [
    {
      kind: 'Manuel · 143 pages · en anglais',
      text: 'Un guide d’étude pour la certification en fuséonautique de haute puissance au Canada, construit autour du programme de l’Association canadienne de fuséonautique (CAR/ACF) avec des renvois à Tripoli : la réglementation de Transports Canada avec l’examen pratique et son corrigé ; la théorie du vol (stabilité, ogives, ailerons, Barrowman, parachutes) avec des problèmes résolus et l’examen pratique de l’ACF ; les performances de vol, de la sortie du rail à l’apogée ; la construction ; le pliage du parachute étape par étape ; et le déroulement du jour de la certification.',
      chapters: ['Organismes et classification', 'Réglementation', 'Théorie du vol', 'Fabrication', 'Pliage du parachute', 'Jour de la certification'],
    },
    {
      title: 'Atelier Ciel d’Octobre 2026',
      kind: 'Diapositives · 52 pages · en anglais · Space Concordia Solid Rocketry',
      text: 'Atelier de deux jours (29 et 30 septembre 2026) qui mène les membres de Space Concordia de zéro jusqu’à un vol de certification à Ciel d’Octobre (17 et 18 octobre) : adhésion, examen, conception d’une fusée dans OpenRocket, achats et fabrication, et jour du lancement.',
      chapters: ['Adhésion', 'Examen', 'Conception avec OpenRocket', 'Achats et fabrication', 'Jour du lancement'],
    },
  ],
};
