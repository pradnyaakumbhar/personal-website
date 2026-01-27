import spotcareLogo from "../assets/logos/spotcareLogo.png"
import evogeniousLogo from "../assets/logos/evogeniousLogo.jpeg"
import classync from '../assets/projects/classync.jpg';
import mood from '../assets/projects/mood.jpg';
import ziptie from '../assets/projects/ziptie.jpeg';
import taskTracker from '../assets/projects/taskTracker.jpeg'
import {
  SiHtml5,
  SiCss3,
  SiPython,
  SiGo,
  SiGnubash,
  SiMui,
  SiNpm,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiRedis,
  SiJest,
  SiPostman,
  SiJira,
  SiJavascript,
  SiTypescript,SiReact,SiRedux,SiMongodb,SiPostgresql,SiMysql,SiAmazonwebservices,SiDocker,SiNodedotjs,
  SiExpress,SiNextdotjs,SiTailwindcss,SiSass,SiGit,SiPrisma,SiCplusplus
} from "react-icons/si"

export const links = {
  github: "https://github.com/pradnyaakumbhar",
  twitter: "https://twitter.com/",
  linkedin: "https://www.linkedin.com/in/pradnya-kumbhar/",
  email: "kumbharpradnyaa10@gmail.com",
}

export const groups = [
  {
    label: "PROGRAMMING & STYLING",
    items: [
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Go", Icon: SiGo, color: "#00ADD8" },
      { name: "Shell Script", Icon: SiGnubash, color: "#FFFFFF" },
    ],
  },
  {
    label: "FRAMEWORKS & LIBRARIES",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#E5E7EB" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "Material UI", Icon: SiMui, color: "#007FFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "SCSS", Icon: SiSass, color: "#CC6699" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
      { name: "NPM", Icon: SiNpm, color: "#CB3837" },
    ],
  },
  {
    label: "CLOUD & DEVOPS",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", Icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#FFFFFF" },
      { name: "Jenkins", Icon: SiJenkins, color: "#D24939" },
    ],
  },
  {
    label: "DATABASES",
    items: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Prisma", Icon: SiPrisma, color: "#E5E7EB" },
    ],
  },
  {
    label: "TESTING",
    items: [
      { name: "Jest", Icon: SiJest, color: "#C21325" },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Jira", Icon: SiJira, color: "#0052CC" },
    ],
  },
]

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