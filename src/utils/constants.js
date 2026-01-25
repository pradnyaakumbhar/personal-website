import spotcareLogo from "../assets/logos/spotcareLogo.png"
import evogeniousLogo from "../assets/logos/evogeniousLogo.jpeg"
import classync from '../assets/projects/classync.jpg';
import mood from '../assets/projects/mood.jpg';
import ziptie from '../assets/projects/ziptie.jpeg';
import taskTracker from '../assets/projects/taskTracker.jpeg'
export const experiences = [
  {
    title: "Software Developer",
    company: "Evogenious Tech",
    location: "Remote",
    period: "Dec 2025 – Present",
    achievements: [
      "Built and deployed a Python-based log analysis system on AWS Lambda, automating monthly user reports using Terraform-managed infrastructure.",
      "Deployed a containerized service to dev using Docker, setting up a CI/CD pipeline to enable automated builds, testing, and deployments."
    ],
    stack: ["AWS", "Docker", "Terraform", "Github Actions", "Python"],
    logo: evogeniousLogo,
  },
  {
    title: "Software Developer",
    company: "Spotcare",
    location: "Remote",
    period: "Jun 2025 – Nov 2025",
    achievements: [
      "Built teleconsultation modules with real-time video, appointments, and patient history; improved workflow efficiency by 40%.",
      "Developed lab and pharmacy dashboards for test tracking, result management, and medicine dispensing.",
      "Collaborated with backend, design, and QA teams for integrated product releases.",
    ],
    stack: ["Typescript", "Javascript", "Node.js", "Express.js", "MySQL", "React", "Tailwind CSS", "AWS"],
    logo: spotcareLogo,
  },
  {
    title: "Software Developer Intern",
    company: "Spotcare",
    location: "Remote",
    period: "Dec 2024 – May 2025",
    achievements: [
      "Enhanced admin panel with React.js & Node.js, adding real-time dashboards and server monitoring; reduced manual oversight by 50%.",
      "Developed scalable backend services using Node.js & MySQL with secure APIs and AWS CloudWatch alerts.",
      "Delivered mobile-first, SEO-optimized landing page increasing engagement by 40%.",
    ],
    stack: ["Typescript", "Javascript", "Node.js", "Express.js", "MySQL", "React", "Tailwind CSS"],
    logo: spotcareLogo,
  },
]

export const projects = [
    {
        title: 'Ziptie',
        desc: 'URL Shortning Platform',
        github_url: 'https://github.com/stars/pradnyaakumbhar/lists/ziptie',
        live_url: 'https://ziptie-frontend-beta.vercel.app',
        image: ziptie,
        techStack: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Prisma'],
        points: [
          'Built a scalable and secure microservice based URL shortening platform with high-performance redirects, customize domains, and collision-resistant short-link generation.',
          'Implemented dual authentication using session tokens and cryptographic key-based access strengthening API security.',
          'AAdded automatic link expiration, caching, and validation workflows to ensure consistent high-availability.',
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
        ' Integrated OpenAI’s API for natural language processing, analyzing user entries and providing feedback on mood and tone, enhancing user insights by 40%.',
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