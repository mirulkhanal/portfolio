export const curatedProjects = [
  {
    id: 'mus-platform',
    title: 'MUs Multi-Tenant Platform',
    eyebrow: 'Platform architecture',
    year: '2025–2026',
    summary:
      'A multi-tenant SaaS ecosystem designed around flexible discovery, custom domains, and secure cross-tenant collaboration.',
    role: 'Backend architecture and full-stack delivery',
    contribution:
      'Designed dynamic tagging and global filtering, custom-domain routing, cross-tenant membership, granular RBAC, and MFA/OTP flows.',
    outcome:
      'Created a scalable foundation that makes tenant data easier to find while keeping access boundaries explicit.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'RBAC', 'MFA'],
    kind: 'Professional',
    access: 'Private client work',
    tone: 'teal',
    featured: true,
    image: '/projects/meetupspark.png',
  },
  {
    id: 'cyberport-ocr',
    title: 'Cyberport OCR Pipeline',
    eyebrow: 'Applied AI',
    year: '2025–2026',
    summary:
      'A document-intelligence pipeline that turns varied receipt images into structured key-value data.',
    role: 'AI pipeline and mobile integration',
    contribution:
      'Combined PaddleOCR and BERT for extraction, then deployed lightweight ONNX models on-device for offline processing.',
    outcome:
      'Reduced server dependency and latency while supporting inconsistent real-world receipt formats.',
    stack: ['PaddleOCR', 'BERT', 'ONNX', 'React Native', 'Python'],
    kind: 'Professional',
    access: 'Private client work',
    tone: 'blue',
    featured: true,
    image: '/projects/cyberport.png',
  },
  {
    id: 'tara-data',
    title: 'TARA Data Pipeline',
    eyebrow: 'Big-data engineering',
    year: '2023–2025',
    summary:
      'A high-volume ingestion workflow for Elasticsearch, rebuilt to process data more efficiently and reliably.',
    role: 'Performance optimization',
    contribution:
      'Re-engineered PySpark ingestion and tuned memory usage, indexing strategy, sharding, and cluster behavior.',
    outcome:
      'Improved throughput and operational stability for a large-scale search workload.',
    stack: ['PySpark', 'Elasticsearch', 'Python', 'Data pipelines'],
    kind: 'Professional',
    access: 'Private client work',
    tone: 'amber',
    featured: true,
  },
  {
    id: 'higi-kiosk',
    title: 'HIGI Health Kiosk',
    eyebrow: 'Health technology',
    year: '2023–2025',
    summary:
      'Frontend and analytics work for large-scale health kiosk deployments operating in controlled environments.',
    role: 'Frontend lead and analytics integration',
    contribution:
      'Led React development, integrated Amplitude events and LookerML reporting, and helped establish secure remote-update protocols.',
    outcome:
      'Made product behavior measurable and supported safer maintenance of remotely deployed systems.',
    stack: ['React', 'Amplitude', 'LookerML', 'CI/CD'],
    kind: 'Professional',
    access: 'Private client work',
    tone: 'violet',
    featured: true,
    image: '/projects/higi.png',
  },
  {
    id: 'valenz-health',
    title: 'Valenz Health Platform',
    eyebrow: 'Secure health technology',
    year: '2023–2025',
    summary:
      'Security and modern web engineering for a healthcare platform operating under strict privacy and compliance requirements.',
    role: 'Software engineer at Deerhold Technologies',
    contribution:
      'Implemented HIPAA-compliant security practices and developed high-performance product modules with FastAPI and Vue.js.',
    outcome:
      'Supported a secure, maintainable healthcare experience across modern frontend and backend services.',
    stack: ['FastAPI', 'Vue.js', 'Python', 'HIPAA', 'Security'],
    kind: 'Professional',
    access: 'Private client work',
    tone: 'teal',
    featured: true,
    image: '/projects/Valenz.png',
  },
  {
    id: 'gs-at-home',
    title: 'GS @ Home',
    eyebrow: 'Multi-service commerce',
    year: '2020–2021',
    summary:
      'A multi-service platform covering real estate, transport, home services, and local goods delivery.',
    role: 'Full-stack product delivery at TechTemple',
    contribution:
      'Delivered production features across the MERN stack as part of the team building the customer-facing marketplace.',
    outcome:
      'Brought several local service categories into a single browsing and ordering experience.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    kind: 'Professional',
    access: 'Legacy client project',
    tone: 'rose',
    featured: true,
    image: '/projects/gs-athome.svg',
  },
  {
    id: 'waymandu',
    title: 'Waymandu',
    eyebrow: 'Vehicle rental',
    year: '2020–2021',
    summary:
      'A vehicle-rental platform built to help customers find transport for different trips and occasions.',
    role: 'Full-stack product delivery at TechTemple',
    contribution:
      'Contributed production-ready features across the Laravel backend and React frontend.',
    outcome:
      'Created a clearer digital path for browsing available vehicles and rental options.',
    stack: ['Laravel', 'PHP', 'React', 'JavaScript'],
    kind: 'Professional',
    access: 'Legacy client project',
    tone: 'slate',
    featured: true,
    image: '/projects/waymandu.png',
  },
  {
    id: 'medicos-pdf',
    title: 'Medicos PDF',
    eyebrow: 'Mobile learning',
    year: '2020–2021',
    summary:
      'A mobile application for discovering and sharing academic resources for medical study.',
    role: 'React Native developer at TechTemple',
    contribution:
      'Delivered mobile features and helped shape a practical resource-sharing experience for medical students.',
    outcome:
      'Made study materials easier to access from a dedicated mobile application.',
    stack: ['React Native', 'JavaScript', 'Android'],
    kind: 'Professional',
    access: 'Legacy client project',
    tone: 'teal',
    featured: true,
    image: '/projects/medicos.jpg',
  },
  {
    id: 'butwal-rojgar',
    title: 'Butwal Rojgar',
    eyebrow: 'Employment platform',
    year: '2020–2022',
    summary:
      'An online job portal for the Butwal community, circulated by BSMC and BCCI.',
    role: 'Web product delivery at TechTemple',
    contribution:
      'Contributed to the job-listing and discovery experience and supported production delivery.',
    outcome:
      'Provided a focused online destination for local employers and job seekers.',
    stack: ['Web application', 'Responsive UI', 'Product delivery'],
    kind: 'Professional',
    access: 'Legacy client project',
    tone: 'blue',
    featured: true,
    image: '/projects/butwal_rojgar.png',
  },
  {
    id: 'bhumidev-furniture',
    title: 'Bhumidev Furniture',
    eyebrow: 'E-commerce',
    year: '2020–2022',
    summary:
      'An online storefront for a Nepalese furniture manufacturer and distributor.',
    role: 'Client web delivery at TechTemple',
    contribution:
      'Contributed to the product presentation and customer-facing e-commerce experience.',
    outcome:
      'Established an online catalogue and sales presence for the furniture business.',
    stack: ['E-commerce', 'Responsive UI', 'Web development'],
    kind: 'Professional',
    access: 'Legacy client project',
    tone: 'amber',
    featured: true,
    image: '/projects/bhumidev.png',
  },
  {
    id: 'doctor-story-nepal',
    title: 'Doctor Story Nepal',
    eyebrow: 'Client web platform',
    year: '2020–2022',
    summary:
      'A public-facing digital project delivered for Doctor Story Nepal.',
    role: 'Client web delivery at TechTemple',
    contribution:
      'Contributed frontend implementation and production delivery as part of the TechTemple team.',
    outcome:
      'Helped establish a responsive online presence for the organization.',
    stack: ['Web development', 'Responsive UI', 'Client delivery'],
    kind: 'Professional',
    access: 'Legacy client project',
    tone: 'violet',
    featured: true,
    image: '/projects/doctorstory.png',
  },
  {
    id: 'decagon-system',
    title: 'Decagon System',
    eyebrow: 'Business website',
    year: '2020–2022',
    summary:
      'A business website delivered for Decagon System in the United Kingdom.',
    role: 'Client web delivery at TechTemple',
    contribution:
      'Contributed to frontend implementation, responsive behavior, and production delivery.',
    outcome:
      'Created a clear public-facing web presence for the company.',
    stack: ['Web development', 'Responsive UI', 'Client delivery'],
    kind: 'Professional',
    access: 'Legacy client project',
    tone: 'rose',
    featured: true,
    image: '/projects/decagon.png',
  },
];

export const githubSettings = {
  username: 'mirulkhanal',
  excludedNames: [
    'portfolio',
    'mirulkhanal',
    'nvim',
    'my_astroconfig',
    'AstroConfig',
    'kickstart-modular.nvim',
  ],
  overrides: {
    FReeder: {
      displayName: 'FReeder',
      description:
        'A free Android ebook reader built with React Native and Readium.',
    },
    wrAuth: {
      displayName: 'wrAuth',
      description:
        'A self-hostable authentication backend designed for smooth client integration.',
    },
    m8: {
      displayName: 'm8',
      description: 'A real-time collaborative list powered by Socket.IO.',
    },
    'phoneauth-mono': {
      displayName: 'PhoneAuth Mono',
      description:
        'An authentication automation project built to make phone-based sign-in easier.',
    },
    'movie-ogranizer-go': {
      displayName: 'Movie Organizer',
      description:
        'A Go application used to organize media for a private Jellyfin server.',
    },
    automatockly: {
      displayName: 'Automatockly',
      description: 'A visual home-automation simulation built with Blockly.',
    },
    'rn-paddle-ocr': {
      displayName: 'React Native Paddle OCR',
      description:
        'Experiments and integration work for running PaddleOCR in React Native.',
    },
  },
};
