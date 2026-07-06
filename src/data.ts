import { ResearchPaper, Project, BlogPost, Milestone, ReadItem, KnowledgeNode, KnowledgeLink } from './types';

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
    impactMetrics: {
      citations: 0,
      stars: 8,
      downloadCount: 0
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p-1',
    title: 'Crime Reporting Web App (Frontend)',
    description: 'A responsive frontend web interface featuring in-browser image and video capturing controls to streamline crime report dispatches.',
    longDescription: 'Developed an intuitive user interface tailored for rapid reporting during emergencies. It integrates direct access to browser MediaDevices API for real-time camera feeds, enabling capturing live snapshots and recording video evidence directly inside the application. Crafted with Bootstrap grids, custom CSS animations, and native JavaScript for clean execution.',
    category: 'Web Development',
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap', 'MediaDevices API'],
    github: 'https://github.com/mariognan13/crime-reporting-app',
    demoUrl: '#demo-crime-app',
    highlighted: true
  },
  {
    id: 'p-2',
    title: 'Competitive Programming Archive',
    description: 'A structured repository of optimal solutions for 600+ problems across LeetCode, CodeChef, and Codeforces.',
    longDescription: 'Contains verified, high-performance implementations of classic and advanced algorithms. Features optimal templates for Segment Trees, dynamic programming matrices, disjoint-set unions, graph traversals, and mathematical modular arithmetic. Built to maintain zero-copy operations and O(log N) or O(N) constraints.',
    category: 'Algorithms',
    techStack: ['C++', 'Java', 'Data Structures', 'Algorithms Optimization', 'Git'],
    github: 'https://github.com/mariognan13/competitive-programming',
    demoUrl: '#demo-cp',
    highlighted: true
  },
  {
    id: 'p-3',
    title: 'Interactive Portfolio Website',
    description: 'A premium personal portfolio website featuring interactive node graphs, animations, and coding telemetry.',
    longDescription: 'Built using React and TypeScript on Vite compiler backends. Incorporates custom layout designs, responsive tailwind utility grids, and Motion keyframe animations. Renders an interactive coordinate node graph showing key technical competencies and links them dynamically.',
    category: 'Web Development',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Motion', 'Vite'],
    github: 'https://github.com/mariognan13/portfolio-website',
    demoUrl: '#demo-portfolio'
  }
];

export const MILESTONES: Milestone[] = [
  {
    id: 'm-1',
    title: 'Began Programming & Computer Science Diploma',
    date: '2022',
    subtitle: 'A.A.N.M & V.V.R.S.R Polytechnic',
    description: 'Began deep academic dive into computing. Focused on core programming languages, software syntax rules, and logical scripting.',
    highlights: [
      'Mastered procedural logic, variable allocations, array processing, and looping mechanisms in C++.',
      'Studied foundational data systems, database schemas, and simple filesystems.',
      'Maintained academic excellence, graduating with an outstanding cumulative percentage of 93.14%.'
    ]
  },
  {
    id: 'm-2',
    title: 'Frontend Web Engineering Focus',
    date: '2023',
    subtitle: 'Responsive Layouts & freeCodeCamp',
    description: 'Shifted focus to frontend technologies, crafting dynamic layouts and learning custom CSS structures.',
    highlights: [
      'Earned the Responsive Web Design certification from freeCodeCamp.',
      'Mastered styling tools: CSS Flexbox, Grid systems, responsive breakpoints, and media layouts.',
      'Built a collection of interactive UI templates using semantic HTML5 code.'
    ]
  },
  {
    id: 'm-3',
    title: 'Algorithmic Problem-Solving Ascent',
    date: '2024',
    subtitle: 'Online Judges & Competitive Coding',
    description: 'Began solving problems on global competitive programming platforms to test problem-solving and optimization boundaries.',
    highlights: [
      'Solved 600+ problems across LeetCode, CodeChef, and Codeforces.',
      'Mastered stacks, queues, trees, search queries, sorting algorithms, and complexity analysis.',
      'Optimized memory usage and runtimes in competitive C++ submissions.'
    ]
  },
  {
    id: 'm-4',
    title: 'Academic Progress (B.Tech Transition)',
    date: '2025',
    subtitle: 'PVPSIT Computer Science Degree',
    description: 'Enrolled in B.Tech in Computer Science at Prasad V. Potluri Siddhartha Institute of Technology to deepen engineering knowledge.',
    highlights: [
      'Maintained academic focus, achieving a current CGPA of 8.8.',
      'Participated in the 24-hour Hackathon VVIT 2K25, building real-world software prototype integrations.',
      'Elected to student technical chapters and local coding clubs.'
    ]
  },
  {
    id: 'm-5',
    title: 'Industry Certifications & Crime Web App',
    date: '2026',
    subtitle: 'Cisco & Infosys Developer Certifications',
    description: 'Acquired professional credentials verifying advanced Python skills and deployed the Crime Reporting Web App frontend.',
    highlights: [
      'Certified in Cisco Python Essentials 1 & 2.',
      'Completed Infosys Python Foundation training program.',
      'Built and demonstrated the frontend of the Crime Reporting Web App with in-browser image/video capture capabilities.'
    ]
  },
  {
    id: 'm-6',
    title: 'Future Professional Goals',
    date: '2027 & Beyond',
    subtitle: 'Entry-Level Software Developer',
    description: 'Seeking to join an active technology team as an entry-level Software Developer to build high-performance systems.',
    highlights: [
      'Seeking to apply strong data structures, algorithms, and frontend engineering skills to business challenges.',
      'Expanding technical knowledge into backend API systems, cloud scaling, and database design.',
      'Aiming to collaborate on production-grade software stacks that deliver meaningful user impact.'
    ]
  }
];

export const READ_ITEMS: ReadItem[] = [
  {
    id: 'ri-1',
    type: 'book',
    title: 'Introduction to Algorithms (CLRS)',
    creator: 'Cormen, Leiserson, Rivest & Stein',
    dateFinished: 'August 2024',
    summary: 'The definitive guide detailing the mathematical foundations and design of algorithms, including sorting, dynamic programming, greed, and graph traversals.',
    keyInsights: [
      'Detailed exploration of search trees, red-black structures, hash maps, and heap priority systems.',
      'Formulation of dynamic programming models, memoization tables, and greedy choice properties.',
      'In-depth study of graph topologies, shortest-path algorithms (Dijkstra), and minimum spanning trees.'
    ],
    rating: 5,
    notes: 'An invaluable book. It completely shaped how I approach problem solving and optimized competitive coding algorithms.',
    category: 'Algorithms'
  },
  {
    id: 'ri-2',
    type: 'book',
    title: 'Responsive Web Design with HTML5 and CSS3',
    creator: 'Ben Frain',
    dateFinished: 'December 2023',
    summary: 'A comprehensive handbook explaining fluid layout grids, flexible typography, media queries, flexbox alignments, CSS Grid layouts, and user-centric accessibility guidelines.',
    keyInsights: [
      'Formulation of responsive grid components that scale fluidly across mobile and desktop viewports.',
      'Practical designs utilizing flexbox and CSS grid structures for content grids.',
      'Standardizing semantic tags and meta values to optimize search indexing (SEO) and web accessibility.'
    ],
    rating: 5,
    notes: 'Incredible book. It gave me the skills required to create responsive layouts and build my Crime Reporting UI.',
    category: 'Web Development'
  },
  {
    id: 'ri-3',
    type: 'book',
    title: 'Operating System Concepts',
    creator: 'Silberschatz, Galvin & Gagne',
    dateFinished: 'May 2025',
    summary: 'An academic reference detailing process synchronization, thread scheduling queues, CPU allocations, memory page replacements, virtual memory structures, and deadlock management.',
    keyInsights: [
      'Analyzed CPU scheduling algorithms including Round Robin, Shortest Job First, and Priority scheduling.',
      'Studied virtual memory architectures, page table walks, page faults, and allocation strategies.',
      'Explored synchronization primitives: semaphores, mutex structures, and deadlock prevention algorithms.'
    ],
    rating: 5,
    notes: 'A foundational book that helped me understand the mechanical boundaries between software execution and CPU/Memory hardware.',
    category: 'Operating Systems'
  },
  {
    id: 'ri-4',
    type: 'book',
    title: 'Python Crash Course',
    creator: 'Eric Matthes',
    dateFinished: 'January 2026',
    summary: 'A fast-paced guide to programming with Python, covering standard syntax, lists, dictionaries, custom object classes, unit tests, and data files processing.',
    keyInsights: [
      'Mastered pythonic collections, list comprehensions, conditional loops, and custom function parameters.',
      'Designed clean object classes, constructors, methods inheritance, and modular imports.',
      'Built test suites using Python unittest module to verify class stability.'
    ],
    rating: 5,
    notes: 'Excellent preparation for the Cisco Python Essentials credential. Formed my Python coding logic.',
    category: 'Languages'
  },
  {
    id: 'ri-5',
    type: 'book',
    title: 'Database System Concepts',
    creator: 'Silberschatz, Korth & Sudarshan',
    dateFinished: 'November 2025',
    summary: 'A detailed study of relational database architectures, normalization schemes (1NF to BCNF), transaction safety (ACID), SQL query structures, and indexing metrics.',
    keyInsights: [
      'Formulated complex SQL statements with inner/outer joins, nested queries, and aggregations.',
      'Designed normalized schemas to minimize redundancy and prevent data insertion/deletion anomalies.',
      'Analyzed concurrency control, database transaction recovery, and index B-tree layouts.'
    ],
    rating: 5,
    notes: 'Crucial for database design. Showed me how tables should be structured to support user interfaces.',
    category: 'Database Systems'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'bp-1',
    title: 'Cracking the 1400 Rating on LeetCode: Strategies for Consistent Problem Solving',
    category: 'Algorithms',
    date: 'June 12, 2026',
    readingTime: '6 min read',
    summary: 'How I grew my analytical skills by systematically breaking down competitive programming problems and implementing optimal solutions.',
    content: `## The Algorithmic Climbing Curve
Competitive programming is not just about writing syntax; it is about pattern recognition, mental flexibility, and strict optimization constraints. Transitioning to a rating of 1401 on LeetCode required changing my approach from brute-force experimentation to structured logical analysis.

### The 3-Step Problem Solving Framework
1. **Identify the Constraints**: Before writing any code, calculate the maximum operations allowed by the input bounds. An input of $N = 10^5$ immediately rules out $O(N^2)$ brute force, pointing toward $O(N \log N)$ sorting or $O(N)$ hash-map passes.
2. **Abstract the Core Pattern**: Is it a sliding window, a two-pointer scenario, or a tree traversal? Stripping away the problem's thematic text reveals the raw mathematical model underneath.
3. **Dry Run on Edge Cases**: Check for empty inputs, single element limits, or negative bounds to avoid debugging under time pressure.

### Key Algorithmic Patterns to Master
- **Sliding Window**: Ideal for finding maximum or minimum sub-arrays matching specific conditions in linear time.
- **Binary Search**: Excellent not just for searching sorted arrays, but for finding thresholds (binary search on answers).
- **Dynamic Programming**: Storing computed sub-problems prevents exponential time complexities, caching calculations for immediate reuse.`,
    featuredImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-2',
    title: 'Integrating Browser Camera APIs in Frontend Layouts: A Crime Reporting Application Case Study',
    category: 'Web Development',
    date: 'April 20, 2026',
    readingTime: '8 min read',
    summary: 'A technical breakdown of integrating media capture tools and responsive UI components using JavaScript and Bootstrap.',
    content: `## The Importance of Accessibility in Reporting Tools
A Crime Reporting application needs to be fast, responsive, and intuitive. In stressful situations, users cannot navigate complex forms. I built a frontend prototype featuring direct image and video capturing interfaces to streamline the report dispatch process.

### Harnessing the MediaDevices API
Modern browsers provide the \`navigator.mediaDevices\` interface to access camera and microphone inputs directly. Here is a simplified code module for starting the stream:

\`\`\`javascript
async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    const videoElement = document.getElementById('camera-preview');
    videoElement.srcObject = stream;
    videoElement.play();
  } catch (error) {
    console.error("Camera access denied:", error);
  }
}
\`\`\`

### Challenges in Image Capture
One primary challenge was canvas rendering. To grab a frame:
1. Draw the active video stream frame onto an offscreen HTML5 \`<canvas>\` element.
2. Export the canvas pixels as a lightweight Base64 string or JPEG Blob.
3. Bind the preview image to the form element ready for transmission.

This implementation allows users to immediately capture evidence without leaving the application.`,
    featuredImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bp-3',
    title: 'Mastering Python OOP: Insights from the Cisco Python Essentials Certification',
    category: 'Software Engineering',
    date: 'March 5, 2026',
    readingTime: '5 min read',
    summary: 'Exploring encapsulation, inheritance, custom exceptions, and file processing constructs in Python.',
    content: `## Transitioning from Scripting to Software Design
While scripting is excellent for automation, writing robust software applications requires the structured approach of Object-Oriented Programming (OOP). Completing the Cisco Python Essentials curriculum clarified how Python structures classes, modules, and error-handling blocks.

### The Power of Encapsulation and Property Decorators
Python does not use private access modifiers like Java (\`private\`). Instead, we prefix internal properties with an underscore \`_\` or double underscores \`__\` (triggering name mangling). 

Using the \`@property\` decorator allows us to expose custom getters and setters cleanly:

\`\`\`python
class Account:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private property

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, value):
        if value < 0:
            raise ValueError("Balance cannot be negative")
        self.__balance = value
\`\`\`

### Custom Exception Pipelines
Handling faults gracefully is a requirement for production software. Defining custom exception layers helps separate system-level errors from business logic exceptions:

\`\`\`python
class InsufficientFundsError(Exception):
    pass
\`\`\`

This structure makes error tracking straightforward and maintains clean execution loops.`,
    featuredImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80'
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
      'B.Tech student with strong theoretical foundations.',
      'Studying asymptotic notation, algorithms complexity, and system boundaries.'
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
      'Active competitive programmer on LeetCode and CodeChef.',
      'Tuning space/time complexities for optimal runtimes.'
    ]
  },
  {
    id: 'webdev',
    label: 'Web Development',
    category: 'core',
    description: 'Building responsive user-interfaces. Experienced with HTML5, CSS3, JavaScript (ES6), and Bootstrap templates.',
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
      'LeetCode rating 1401, CodeChef rating 1255, Codeforces rating 847.',
      'Mastery of standard template library (STL) structures, arrays, and algorithms.'
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
      'Completed Infosys Python Foundation training.'
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
      'Maintaining public repositories for projects and CP solutions.',
      'Using Git for file revisions and deployment.'
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
  { source: 'networks', target: 'webdev' }
];
