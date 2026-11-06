export const teachingRoles = [
  {
    role: 'Teaching Assistant',
    org: 'Concordia University · Mechanical, Industrial & Aerospace Engineering',
    date: 'Sep 2023 — Jun 2026',
    highlight: 'Teaching Excellence Award for Teaching Assistants, May 2026',
    points: [
      '1,200+ TA hours over two years, as lab demonstrator and tutorial leader',
      'Lab sessions in Fluid Mechanics, Heat Transfer and Thermodynamics',
      'Tutorials in CFD for Aerospace Engineering, C++/Arduino Programming, Statics and Advanced Calculus',
    ],
  },
  {
    role: 'Teaching Assistant',
    org: 'Iran University of Science and Technology · Chemical Engineering',
    date: 'Feb 2022 — Jul 2022',
    points: ['Weekly tutorials and grading for undergraduate Fluid Mechanics (~30 students)'],
  },
  {
    role: 'Private Tutor',
    org: 'Independent',
    date: '2020 — Present',
    points: ['Ordinary Differential Equations, Transform Calculus, Fluid Mechanics and C++ Programming'],
  },
];

export const courses = [
  { name: 'Fluid Mechanics', kind: 'Lab · Tutorial', icon: 'fas fa-water' },
  { name: 'CFD for Aerospace Engineering', kind: 'Tutorial', icon: 'fas fa-plane' },
  { name: 'Heat Transfer', kind: 'Lab', icon: 'fas fa-temperature-high' },
  { name: 'Thermodynamics', kind: 'Lab', icon: 'fas fa-fire-alt' },
  { name: 'C++ / Arduino Programming', kind: 'Tutorial', icon: 'fas fa-microchip' },
  { name: 'Statics', kind: 'Tutorial', icon: 'fas fa-balance-scale' },
  { name: 'Advanced Calculus', kind: 'Tutorial', icon: 'fas fa-square-root-alt' },
  { name: 'Differential Equations', kind: 'Tutoring', icon: 'fas fa-infinity' },
];

// Teaching materials (PDFs in public/teaching/).
export const materials = [
  {
    title: 'High-Power Rocketry Certification: A Study Companion',
    kind: 'Handbook · 143 pages',
    cover: '/assets/images/teaching/hpr-book-cover.jpg',
    href: '/teaching/hpr-certification-study-companion.pdf',
    text: 'A study companion for HPR certification in Canada, written around the Canadian Association of Rocketry (CAR/ACF) programme with references to Tripoli: Transport Canada rules with the practice exam and answer key, flight theory (stability, nose cones, fins, Barrowman, parachutes) with worked problems and the CAR/ACF practice exam, flight performance from rail exit to apogee, construction, step-by-step parachute packing, and what to expect on certification day.',
    chapters: ['Organizations & classification', 'Regulations', 'Flight theory', 'Manufacturing', 'Parachute packing', 'Day of certification'],
  },
  {
    title: 'Ciel d’Octobre 2026 Workshop',
    kind: 'Slides · 52 pages · Space Concordia Solid Rocketry',
    cover: '/assets/images/teaching/ciel-slides-cover.jpg',
    href: '/teaching/ciel-doctobre-2026-workshop-slides.pdf',
    text: 'Two-day workshop (September 29–30, 2026) taking Space Concordia members from zero to a certification flight at Ciel d’Octobre (October 17–18): membership, the exam, designing a rocket in OpenRocket, purchasing and manufacturing, and launch day.',
    chapters: ['Membership', 'Exam', 'Design with OpenRocket', 'Purchasing & manufacturing', 'Launch day'],
  },
];
