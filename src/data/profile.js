// Single source for identity, links and navigation. Edit here, every page follows.
export const profile = {
  name: 'Dara Rahmat Samii',
  shortName: 'Dara Samii',
  initials: 'DRS',
  role: 'PhD Researcher · Computational Fluid Dynamics',
  jobTitle: 'PhD Researcher in Computational Fluid Dynamics',
  headline: 'I simulate fast, hot and reacting flows.',
  intro:
    'Incoming Ph.D. researcher at McGill University (ASEC Lab) working on DNS/LES of hydrogen–methane flames. I build OpenFOAM solvers for supersonic particle-laden jets, lead CFD for Space Concordia’s supersonic rockets, accelerate solvers with graph neural networks, and teach fluid mechanics.',
  location: 'Montréal, Canada',
  email: 'dara.rahmatsamii@mail.mcgill.ca',
  emailOld: 'dara.rahmatsamii@mail.concordia.ca',
  site: 'https://darasamii.com',
};

export const socials = [
  { label: 'LinkedIn', icon: 'fab fa-linkedin-in', color: '#0a66c2', href: 'https://www.linkedin.com/in/dara-samii' },
  { label: 'GitHub', icon: 'fab fa-github', color: '#6e5494', href: 'https://github.com/DaraSamii' },
  { label: 'Google Scholar', icon: 'fas fa-graduation-cap', color: '#4285f4', href: 'https://scholar.google.com/citations?user=n3bdfeUAAAAJ&hl=en' },
  { label: 'YouTube', icon: 'fab fa-youtube', color: '#ff0000', href: 'https://www.youtube.com/@dara_samii' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'Rocketry', href: '/rocketry/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'Fun Projects', href: '/projects/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Piano', href: '/piano/' },
  { label: 'World', href: '/world/' },
];

export const cvHref = '/CV/cv.pdf';
export const coffee = { label: 'Buy me a coffee', href: 'https://buymeacoffee.com/darasamii' };

export const profilePhotos = Array.from({ length: 10 }, (_, i) => `/assets/images/profile/${i + 1}.jpg`);

export const stats = [
  { value: '100×', label: 'GNN speed-up over the CFD solver' },
  { value: 'Mach 1.54', label: 'CR26 sustainer, 47,991 ft apogee' },
  { value: '1,200+', label: 'TA hours, Teaching Excellence Award' },
  { value: 'L3', label: 'High-power rocketry (Canadian Association of Rocketry)' },
];
