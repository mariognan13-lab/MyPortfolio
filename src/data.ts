import { ResearchPaper, Project, Milestone, KnowledgeNode, KnowledgeLink } from './types';

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'cert-1',
    title: 'Cisco Python Essentials 1 & 2',
    domain: 'Python Programming',
    venue: 'Cisco Networking Academy',
    abstract: 'A comprehensive certification verifying proficiency in Python fundamentals, object-oriented concepts, and advanced scripting constructs. It covers variable scoping, loops, sequences, data collections, custom functions, modules, packages, exception handling, and physical file I/O operations.',
    keyFindings: [
      'Mastered procedural coding paradigms: conditional logic branches, iterations, and recursive functions.',
      'Designed and engineered object-oriented hierarchies leveraging class models, inheritance structures, polymorphism, and encapsulated namespaces.',
      'Developed modular packages and libraries using standard imports and custom modules.',
      'Implemented robust exception-handling frameworks to control runtime errors and manage file system operations safely.'
    ],
    technologies: ['Python', 'Object-Oriented Programming', 'Modules & Packages', 'File System operations', 'Exception Handling'],
    date: 'January 2026',
    credentialUrl: 'https://www.credly.com/badges/57ed4973-b3d8-4146-9f0a-0e64b34975a5/public_url',
    impactMetrics: {
      citations: 0,
      stars: 5,
      downloadCount: 0
    }
  },
  {
    id: 'cert-2',
    title: 'Infosys Python Foundation',
    domain: 'Software Development',
    venue: 'Infosys Springboard Academy',
    abstract: 'A foundational software development program focusing on coding logic, problem-solving methodologies, algorithm design, and data representation models using Python. Explores modular programming, data flow control, debugging, and computational logic structure design.',
    keyFindings: [
      'Built algorithmic problem-solving templates and structured logic paradigms.',
      'Investigated core software engineering design principles, including code decomposition, complexity analysis, and modularity.',
      'Acquired skills in debugging strategies, tracing logic flows, and verifying edge-case stability.',
      'Developed data processing tools for parsing, formatting, and storing records.'
    ],
    technologies: ['Python', 'Computational Logic', 'Algorithm Design', 'Debugging', 'Data Structures'],
    date: 'October 2025',
    impactMetrics: {
      citations: 0,
      stars: 4,
      downloadCount: 0
    }
  },
  {
    id: 'cert-3',
    title: 'Responsive Web Design',
    domain: 'Frontend Engineering',
    venue: 'freeCodeCamp Developer Academy',
    abstract: 'A rigorous hands-on frontend developer program validating mastery of responsive layouts, semantic markup, and visual aesthetics. Focuses on advanced CSS styling techniques, responsive grid layouts, flexbox alignments, custom media queries, and typography.',
    keyFindings: [
      'Constructed fluid layouts that automatically adapt and scale across diverse viewport breakpoints (mobile, tablet, desktop).',
      'Designed complex grid alignments and two-dimensional flexbox layouts to ensure ergonomic content structure.',
      'Applied semantic HTML5 tags to guarantee markup clarity, search engine visibility (SEO), and screen-reader accessibility.',
      'Created custom visual styles with linear gradients, hover transitions, and fluid micro-animations.'
    ],
    technologies: ['HTML5', 'CSS3', 'Flexbox & CSS Grid', 'Responsive Media Queries', 'SEO & Accessibility'],
    date: 'December 2023',
    credentialUrl: 'https://www.freecodecamp.org/certification/mario-01/responsive-web-design',
    impactMetrics: {
      citations: 0,
      stars: 8,
      downloadCount: 0
    }
  },
  {
    id: 'cert-4',
    title: 'Infosys Machine Learning Foundation',
    domain: 'Machine Learning',
    venue: 'Infosys Springboard Academy',
    abstract: 'A foundational machine learning program covering the end-to-end workflow: preparing data, training supervised and unsupervised models, and evaluating results with Python.',
    keyFindings: [
      'Studied regression and classification algorithms and when each is appropriate.',
      'Prepared and cleaned datasets before training models.',
      'Evaluated model performance and compared results across approaches.'
    ],
    technologies: ['Python', 'Machine Learning', 'scikit-learn', 'pandas', 'Model Evaluation'],
    date: 'Completed'
  },
  {
    id: 'cert-5',
    title: 'Cloud Virtual Internship',
    domain: 'Cloud & Systems',
    venue: 'Eduskills Foundation',
    abstract: 'A virtual internship introducing cloud computing service models, virtualization, deployment options, and the shared responsibility model for cloud security.',
    keyFindings: [
      'Compared IaaS, PaaS, and SaaS service models and their use cases.',
      'Explored virtualization, deployment models, and cloud security fundamentals.',
      'Worked through guided cloud exercises and assessments.'
    ],
    technologies: ['Cloud Computing', 'Virtualization', 'IaaS / PaaS / SaaS', 'Cloud Security', 'Deployment'],
    date: 'Completed',
    credentialUrl: 'https://certificate.eduskillsfoundation.org/verify/493dbf6d1219f2f15641/493dbf6d1219f2f15641'
  },
  {
    id: 'cert-6',
    title: 'AWS Academy Graduate - Cloud Architecting',
    domain: 'Cloud & Systems',
    venue: 'AWS Academy',
    abstract: 'AWS Academy training badge covering architectural best practices for designing resilient, high-performing, and cost-optimized workloads on AWS.',
    keyFindings: [
      'Designed highly available architectures across multiple availability zones.',
      'Worked with VPC networking, IAM, and decoupled application components.',
      'Applied security, reliability, and cost-optimization guidance to designs.'
    ],
    technologies: ['Amazon EC2', 'Amazon S3', 'Amazon VPC', 'IAM', 'Cloud Architecture'],
    date: 'Completed',
    credentialUrl: 'https://www.credly.com/badges/766083af-e63e-4ac9-857b-73d8bbff9ae1/public_url'
  },
  {
    id: 'cert-7',
    title: 'AWS Academy Graduate - Cloud Foundations',
    domain: 'Cloud & Systems',
    venue: 'AWS Academy',
    abstract: 'AWS Academy training badge covering core AWS services, cloud economics, security concepts, and the AWS shared responsibility model.',
    keyFindings: [
      'Learned core AWS services including compute, storage, networking, and databases.',
      'Studied identity and access management and the shared responsibility model.',
      'Covered AWS pricing, billing, and support plans.'
    ],
    technologies: ['AWS Core Services', 'IAM', 'Amazon S3', 'Amazon EC2', 'Billing & Pricing'],
    date: 'Completed',
    credentialUrl: 'https://www.credly.com/badges/599fb937-d57d-41b1-b33b-639b95aa714a/public_url'
  },
  {
    id: 'cert-8',
    title: 'Red Hat System Administration I (RH124 - RHA), Ver. 8.2',
    domain: 'Systems Administration',
    venue: 'Red Hat Academy',
    abstract: 'Hands-on administration of Red Hat Enterprise Linux 8, covering users and groups, permissions, services, networking, storage, and software management.',
    keyFindings: [
      'Managed users, groups, file permissions, and access controls on RHEL 8.',
      'Administered systemd services, networking, and local storage.',
      'Installed and managed software packages with the Red Hat tooling.'
    ],
    technologies: ['Red Hat Enterprise Linux 8', 'Linux Administration', 'systemd', 'Networking', 'Storage & Permissions'],
    date: 'Completed',
    credentialUrl: 'https://www.credly.com/badges/8a244b4c-67a8-43a0-9b23-e9224f71478e/public_url'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p-1',
    title: 'Crime Reporting Web App',
    description: 'A responsive web interface for reporting crimes, with in-browser image and video capture to speed up dispatches.',
    longDescription: 'Built for rapid reporting during emergencies. The interface uses the browser MediaDevices API to open a live camera feed, capture snapshots, and record video evidence without leaving the page. Frontend built with HTML, CSS, JavaScript, and Bootstrap.',
    category: 'Web Development',
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap', 'MediaDevices API'],
    github: 'https://github.com/mariognan13-lab/Capstone-project',
    demoUrl: '',
    highlighted: true
  },
  {
    id: 'p-2',
    title: 'Rice Yield Predictor',
    description: 'A machine learning project that predicts rice yield from agricultural data and presents results through a Streamlit interface.',
    longDescription: 'Explores agricultural data, trains regression models to estimate rice quantity, and exposes predictions in an interactive Streamlit web app. Uses Python with pandas and scikit-learn for data preparation and modeling.',
    category: 'Data Science',
    techStack: ['Python', 'Streamlit', 'Machine Learning', 'pandas', 'scikit-learn'],
    github: 'https://github.com/mariognan13-lab/Rice-yield-predictor',
    demoUrl: '',
    highlighted: true
  },
  {
    id: 'p-3',
    title: 'Interactive Portfolio Website',
    description: 'The portfolio you are viewing: certifications, projects, an interactive skills graph, timeline, and contact.',
    longDescription: 'Built with React, TypeScript, Vite, and Tailwind CSS. Includes a draggable knowledge graph, a Ctrl+K command palette, dark mode, and scroll-driven animations.',
    category: 'Web Development',
    techStack: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/mariognan13-lab/MyPortfolio',
    demoUrl: ''
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'm-1',
    title: 'Computer Science Diploma',
    date: '2022 - 2025',
    subtitle: 'A.A.N.M & V.V.R.S.R Polytechnic, Gudlavalleru',
    description: 'Studied computer science fundamentals with a focus on programming logic, data structures, databases, and operating systems.',
    highlights: [
      'Built a foundation in C++ procedural programming, arrays, and data structures.',
      'Studied database schemas and core operating system concepts.',
      'Graduated with an overall percentage of 93.14%.'
    ]
  },
  {
    id: 'm-2',
    title: 'Frontend Web Engineering Focus',
    date: '2023',
    subtitle: 'Responsive Layouts & freeCodeCamp',
    description: 'Moved into frontend development, learning responsive layout systems and building interfaces with HTML, CSS, and JavaScript.',
    highlights: [
      'Earned the Responsive Web Design certification from freeCodeCamp.',
      'Worked with CSS Flexbox, Grid, media queries, and responsive breakpoints.',
      'Built UI templates using semantic HTML5.'
    ]
  },
  {
    id: 'm-3',
    title: 'Algorithmic Problem-Solving Ascent',
    date: '2024',
    subtitle: 'Online Judges & Competitive Coding',
    description: 'Started solving problems regularly on global judges to strengthen data structures, algorithms, and implementation speed.',
    highlights: [
      'Active on LeetCode (1383), CodeChef (1172), and Codeforces (636).',
      'Earned a 5-star problem-solving badge on HackerRank.',
      'Practised stacks, queues, trees, graph traversal, sorting, and complexity analysis in C++.'
    ]
  },
  {
    id: 'm-4',
    title: 'B.Tech in Computer Science',
    date: '2025 - 2028 (Expected)',
    subtitle: 'Prasad V. Potluri Siddhartha Institute of Technology',
    description: 'Enrolled in B.Tech Computer Science at PVPSIT, continuing coursework in algorithms, systems, databases, and networks.',
    highlights: [
      'Maintaining a current CGPA of 8.5, with graduation expected in 2028.',
      'Participated in the 24-hour VVIT 2K25 hackathon and the 36-hour Mission Schrödinger\'s Cat hackathon at SRM University-AP.',
      'Took part in Digital Campus 2.0 on Google Cloud and YARIN - Build A Better Tomorrow, organised by the ISTE Student Chapter at PVPSIT.'
    ]
  },
  {
    id: 'm-5',
    title: 'Certifications & Applied Projects',
    date: '2026',
    subtitle: 'AWS, Red Hat, Cisco & Infosys',
    description: 'Added cloud, Linux administration, and machine learning credentials, and applied them alongside frontend project work.',
    highlights: [
      'Completed AWS Academy Cloud Foundations and Cloud Architecting, Red Hat System Administration I (RH124), Cisco Python Essentials 1 & 2, and Infosys Python and Machine Learning Foundation programs.',
      'Built the Crime Reporting Web App frontend with in-browser image and video capture.',
      'Built the Rice Yield Predictor with Python, scikit-learn, and a Streamlit interface.'
    ]
  },
  {
    id: 'm-6',
    title: 'Future Professional Goals',
    date: '2028 & Beyond',
    subtitle: 'Entry-Level Software Developer',
    description: 'Seeking an entry-level software development opportunity after graduation, with a focus on building reliable, user-facing systems.',
    highlights: [
      'Applying data structures, algorithms, and web development skills to production problems.',
      'Deepening backend API, cloud, and database design experience.',
      'Contributing to software that delivers measurable user impact.'
    ]
  }
];

export const KNOWLEDGE_NODES: KnowledgeNode[] = [
  {
    id: 'cs',
    label: 'Computer Science',
    category: 'core',
    description: 'The academic foundation of data representation, computational logic, and software design principles.',
    x: 400,
    y: 250,
    details: [
      'B.Tech Computer Science student at PVPSIT (expected 2028, CGPA 8.5).',
      'Studying asymptotic notation, algorithm complexity, and system boundaries.'
    ]
  },
  {
    id: 'dsa',
    label: 'Data Structures & DSA',
    category: 'algorithms',
    description: 'Storing and processing data efficiently. Mastery of stacks, queues, trees, graphs, sorting algorithms, and binary searches.',
    x: 250,
    y: 150,
    details: [
      'Active on LeetCode, CodeChef, Codeforces, and HackerRank.',
      'Tuning space/time complexities for optimal runtimes.'
    ]
  },
  {
    id: 'webdev',
    label: 'Web Development',
    category: 'core',
    description: 'Building responsive user-interfaces with HTML5, CSS3, JavaScript, PHP, and Bootstrap templates.',
    x: 180,
    y: 250,
    details: [
      'Developed frontend of Crime Reporting Web App.',
      'Certified in Responsive Web Design from freeCodeCamp.'
    ]
  },
  {
    id: 'os',
    label: 'Operating Systems',
    category: 'systems',
    description: 'Core concepts of process scheduling, virtual memory management, deadlocks, and system allocations.',
    x: 550,
    y: 150,
    details: [
      'Studying process coordination, scheduling queues, and memory paging.',
      'Familiar with multithreaded resource locks.'
    ]
  },
  {
    id: 'networks',
    label: 'Computer Networks',
    category: 'systems',
    description: 'Network communication topologies. Understanding TCP/IP protocol suite, DNS routing, and socket streams.',
    x: 650,
    y: 220,
    details: [
      'Studying network protocol stacks, data routing, and secure connections.',
      'Familiar with web sockets and local services connectivity.'
    ]
  },
  {
    id: 'dbms',
    label: 'Database Systems (DBMS)',
    category: 'systems',
    description: 'Relational database designs. Creating schemas, indexes, SQL query scripts, and table normalization forms.',
    x: 400,
    y: 400,
    details: [
      'Formulating clean SQL queries and joins.',
      'Studying transaction ACID properties and database normalization.'
    ]
  },
  {
    id: 'cpp',
    label: 'C++',
    category: 'languages',
    description: 'High-performance coding language used as primary tool for competitive programming and online contest solutions.',
    x: 260,
    y: 350,
    details: [
      'LeetCode rating 1383, CodeChef 1172, Codeforces 636, HackerRank 5-star problem solving.',
      'Comfortable with standard template library (STL) structures, arrays, and algorithms.'
    ]
  },
  {
    id: 'python',
    label: 'Python',
    category: 'languages',
    description: 'Rapid scripting and object classes development. Experienced in functional logic and scripting pipelines.',
    x: 530,
    y: 320,
    details: [
      'Certified in Cisco Python Essentials 1 & 2.',
      'Completed Infosys Python and Machine Learning Foundation programs.',
      'Used Python and scikit-learn in the Rice Yield Predictor project.'
    ]
  },
  {
    id: 'java',
    label: 'Java',
    category: 'languages',
    description: 'Object-oriented programming language. Solid understanding of classes, packages, interfaces, and exception bounds.',
    x: 120,
    y: 160,
    details: [
      'Implementing object-oriented assignable structures.',
      'Used for student assignments and algorithm submissions.'
    ]
  },
  {
    id: 'git',
    label: 'Git & GitHub',
    category: 'languages',
    description: 'Version control workflows: managing branches, tracking code commits, and coordinating collaborative source repositories.',
    x: 500,
    y: 480,
    details: [
      'Maintaining public repositories for projects and competitive programming solutions.',
      'Using Git and Neovim for development and version control.'
    ]
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    category: 'ai-ml',
    description: 'Applying supervised learning to real datasets: data preparation, regression and classification, and model evaluation with Python.',
    x: 650,
    y: 400,
    details: [
      'Completed the Infosys Machine Learning Foundation program.',
      'Built the Rice Yield Predictor with pandas, scikit-learn, and Streamlit.'
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & Linux',
    category: 'systems',
    description: 'AWS cloud fundamentals and architecture, plus hands-on Red Hat Enterprise Linux 8 system administration.',
    x: 680,
    y: 520,
    details: [
      'AWS Academy Graduate in Cloud Foundations and Cloud Architecting.',
      'Completed Red Hat System Administration I (RH124) and a Cloud Virtual Internship.'
    ]
  }
];

export const KNOWLEDGE_LINKS: KnowledgeLink[] = [
  { source: 'cs', target: 'dsa' },
  { source: 'cs', target: 'webdev' },
  { source: 'cs', target: 'os' },
  { source: 'cs', target: 'dbms' },
  { source: 'dsa', target: 'cpp' },
  { source: 'dsa', target: 'java' },
  { source: 'webdev', target: 'git' },
  { source: 'os', target: 'networks' },
  { source: 'python', target: 'git' },
  { source: 'java', target: 'git' },
  { source: 'dbms', target: 'webdev' },
  { source: 'networks', target: 'webdev' },
  { source: 'python', target: 'ml' },
  { source: 'dbms', target: 'ml' },
  { source: 'networks', target: 'cloud' },
  { source: 'git', target: 'cloud' }
];
