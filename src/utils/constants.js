import indiseaLogo from '../assets/logos/indisea.png';
import naturalMindsLogo from '../assets/logos/naturalMinds.jpg';
import classync from '../assets/projects/classync.jpg';
import mood from '../assets/projects/mood.jpg';
import ziptie from '../assets/projects/ziptie.jpeg';
import taskTracker from '../assets/projects/taskTracker.jpeg';

export const links = {
  github: 'https://github.com/pradnyaakumbhar',
  linkedin: 'https://www.linkedin.com/in/pradnya-kumbhar/',
  email: 'pradnyakumbhar.dev@gmail.com',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export const footerLinks = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// Layers in the hero diagram, top to bottom. `focus` marks where most of the time goes.
export const layers = [
  { name: 'Interface', tech: 'React · Next.js · Tailwind', focus: false },
  { name: 'API', tech: 'Node.js · Express · Go', focus: true },
  { name: 'Cache', tech: 'Redis', focus: true },
  { name: 'Data', tech: 'PostgreSQL · MySQL · MongoDB', focus: true },
  { name: 'Infra', tech: 'AWS · Docker · Terraform · CI/CD', focus: true },
];

export const heroFacts = [
  { label: 'Currently', value: 'Software Developer at Indisea Software' },
  { label: 'Based', value: 'Pune, India · Remote' },
  { label: 'Open to', value: 'good opportunities & collaborations' },
];

export const about = {
  lead: 'A hands-on software developer who enjoys building scalable systems, improving performance across applications and optimizing infrastructure.',
  tail: 'Currently focused on backend engineering, cloud and DevOps, and enjoying work close to the system.',
};

export const groups = [
  { label: 'Programming & styling', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Python', 'Go', 'Shell Script'] },
  { label: 'Frameworks & libraries', items: ['React', 'Next.js', 'Redux', 'Material UI', 'Tailwind CSS', 'SCSS', 'Express.js', 'Node.js', '.NET', 'NPM'] },
  { label: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'GitHub Actions', 'Jenkins'] },
  { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma'] },
  { label: 'Testing', items: ['Jest'] },
  { label: 'Tools', items: ['Postman', 'Git', 'Jira'] },
];

export const experiences = [
  {
    title: 'Software Developer',
    company: 'Indisea Software',
    location: 'Remote',
    period: 'Dec 2025 – Present',
    achievements: [
      'Built tax calculation connectors for Shopware and Rillet, automating tax calculation across e-commerce and accounting workflows.',
      'Handled end-to-end deployment of the connectors to UAT and production using CI/CD pipelines, Terraform and AWS ECS.',
      'Built and deployed a Python-based log analysis system on AWS Lambda, automating monthly user reports using Terraform-managed infrastructure.',
    ],
    stack: ['.NET', 'C#', 'AWS', 'ECS', 'Docker', 'Terraform', 'GitHub Actions', 'Python'],
    logo: indiseaLogo,
  },
  {
    title: 'Software Developer',
    company: 'Natural Minds Digital Systems',
    location: 'Remote',
    period: 'Jun 2025 – Nov 2025',
    achievements: [
      'Built teleconsultation modules with real-time video, appointments, and patient history; improved workflow efficiency by 40%.',
      'Developed lab and pharmacy dashboards for test tracking, result management, and medicine dispensing.',
      'Collaborated with backend, design, and QA teams for integrated product releases.',
    ],
    stack: ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'React', 'Tailwind CSS', 'AWS'],
    logo: naturalMindsLogo,
  },
  {
    title: 'Software Developer Intern',
    company: 'Natural Minds Digital Systems',
    location: 'Remote',
    period: 'Dec 2024 – May 2025',
    achievements: [
      'Enhanced admin panel with React.js & Node.js, adding real-time dashboards and server monitoring; reduced manual oversight by 50%.',
      'Developed scalable backend services using Node.js & MySQL with secure APIs and AWS CloudWatch alerts.',
      'Delivered mobile-first, SEO-optimized landing page increasing engagement by 40%.',
    ],
    stack: ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'React', 'Tailwind CSS'],
    logo: naturalMindsLogo,
  },
];

export const projects = [
  {
    title: 'Ziptie',
    desc: 'URL Shortening Platform',
    github_url: 'https://github.com/stars/pradnyaakumbhar/lists/ziptie',
    live_url: 'https://ziptie-frontend-beta.vercel.app',
    image: ziptie,
    techStack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Prisma'],
    points: [
      'Built a scalable and secure microservice based URL shortening platform with high-performance redirects, customize domains, and collision-resistant short-link generation.',
      'Implemented dual authentication using session tokens and cryptographic key-based access strengthening API security.',
      'Added automatic link expiration, caching, and validation workflows to ensure consistent high-availability.',
    ],
  },
  {
    title: 'Task Tracker',
    desc: 'Team Collaboration Tool',
    github_url: 'https://github.com/stars/pradnyaakumbhar/lists/task-tracker',
    live_url: '',
    image: taskTracker,
    techStack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Prisma'],
    points: [
      'Built a collaborative task management platform with hierarchical workspaces to streamline team workflows.',
      'Implemented secure authentication, role-based access, and invitation-based onboarding for team collaboration.',
      'Added task versioning with full audit trails to improve transparency and accountability.',
    ],
  },
  {
    title: 'Mood',
    desc: 'AI Journaling App',
    github_url: 'https://github.com/pradnyaakumbhar/mood',
    live_url: 'https://mood-beige.vercel.app/',
    image: mood,
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    points: [
      'Built a journaling app allowing users to write daily entries and receive AI-driven insights such as summaries, mood evaluations, and tone analysis.',
      'Developed a graph-based history feature to visualize mood trends, enabling users to track emotional patterns and improve self-awareness.',
      'Integrated OpenAI’s API for natural language processing, analyzing user entries and providing feedback on mood and tone, enhancing user insights by 40%.',
    ],
  },
  {
    title: 'Classync',
    desc: 'Scalable Automated Academic Management Platform',
    github_url: 'https://github.com/ProjectStreamline/classync',
    live_url: 'https://classync.onrender.com/',
    image: classync,
    techStack: ['React', 'JavaScript', 'Tailwind', 'PostgreSQL', 'Supabase'],
    points: [
      'Designed ERP system with portals for students, faculty and advisors streamlining registration, attendance and grading.',
      'Implemented faculty tools for creating evaluations, managing attendance, setting grade cutoffs, and automating CGPA calculations, with graphical insights into 100% student performance data.',
      'Developed faculty advisor features like course creation, backlog management, floating registration forms, and student communication through notices, improving workflow efficiency by 40%.',
    ],
  },
];
