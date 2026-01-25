import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiPython,
  SiGo,
  SiGnubash,
  SiReactrouter,
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
  SiNodemon,
  SiJavascript,
  SiTypescript,SiReact,SiRedux,SiMongodb,SiPostgresql,SiMysql,SiAmazonwebservices,SiDocker,SiNodedotjs,
  SiExpress,SiNextdotjs,SiTailwindcss,SiSass,SiGit,SiPrisma,SiCplusplus
} from "react-icons/si"


/* ================= STACK DATA ================= */
const groups = [
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
      { name: "React Router", Icon: SiReactrouter, color: "#CA4245" },
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
      { name: "Nodemon", Icon: SiNodemon, color: "#76D04B" },
    ],
  },
]


/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

/* ================= STACK ROW ================= */

function StackRow({ label, items }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <div ref={ref} className="grid grid-cols-12 gap-10 lg:gap-14 py-10 lg:py-14">
      {/* LEFT TITLE */}
      <motion.h3
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="col-span-12 lg:col-span-5 text-[40px] md:text-[60px] font-extrabold tracking-tight text-gray-100/70 leading-tight pr-8"
      >
        {label}
      </motion.h3>

      {/* RIGHT ICON GRID */}
      <motion.div
        className="col-span-12 lg:col-span-7"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
          {items.map(({ name, Icon, color }, idx) => (
            <motion.div
              key={name}
              variants={item}
              className="flex items-center gap-4"
            >
              {/* COLORED ICON */}
              <div
                className="text-3xl md:text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]"
                style={{
                  color,
                  animation: `floatSoft ${6 + (idx % 3)}s ease-in-out infinite`,
                  willChange: "transform",
                }}
              >
                <Icon />
              </div>

              {/* LABEL */}
              <p className="text-lg md:text-xl text-gray-100/80">{name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

/* ================= MAIN ABOUT SECTION ================= */

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black rounded-t-[48px] relative z-20 overflow-hidden text-gray-100"
    >
      {/* DOT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-0 py-20">
        {/* INTRO */}
        <div className="border-b border-white/10 pb-14">

          <div className="mt-10 grid grid-cols-12 gap-10">
            <h2 className="col-span-12 lg:col-span-6 text-gray-100/85 text-5xl md:text-7xl font-light">
              Hi, I&apos;m <span className="text-gray-100">Pradnya.</span>
            </h2>

            <div className="col-span-12 lg:col-span-6 space-y-6 text-gray-100/70 text-lg leading-relaxed">
              <p>
              A hands-on software developer who enjoys building scalable systems and improving performance across applications and optimize infrastructure.
              </p>
              <p>
              Currently focused on backend engineering, cloud and DevOps—enjoying work close to the system.
              </p>
            </div>
          </div>
        </div>

        {/* MY STACK */}
        <div className="pt-14">
          <div className="flex items-center gap-3 text-gray-100/70 mb-6">
            <span className="text-2xl">✳</span>
            <p className="uppercase tracking-[0.2em] text-sm">Technologies I've worked with</p>
          </div>

          {groups.map((group) => (
            <StackRow
              key={group.label}
              label={group.label}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
