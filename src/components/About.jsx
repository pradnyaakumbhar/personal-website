import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { groups } from "../utils/constants"

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

function StackRow({ label, items }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <div ref={ref} className="grid grid-cols-12 gap-8 lg:gap-10 py-8 lg:py-10">
      {/* LEFT TITLE */}
      <motion.h3
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="col-span-12 lg:col-span-4 text-[32px] md:text-[44px] font-extrabold tracking-tight text-gray-100/70 leading-tight pr-6"
      >
        {label}
      </motion.h3>

      {/* RIGHT ICON GRID */}
      <motion.div
        className="col-span-12 lg:col-span-8"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
          {items.map(({ name, Icon, color }, idx) => (
            <motion.div
              key={name}
              variants={item}
              className="flex items-center gap-4"
            >
              {/* COLORED ICON */}
              <div
                className="text-2xl md:text-3xl drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]"
                style={{
                  color,
                  animation: `floatSoft ${6 + (idx % 3)}s ease-in-out infinite`,
                  willChange: "transform",
                }}
              >
                <Icon />
              </div>

              {/* LABEL */}
              <p className="text-base md:text-lg text-gray-100/80">{name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

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

      <div className="relative max-w-6xl mx-auto px-0 py-16">
        {/* INTRO */}
        <div className="border-b border-white/10 pb-12">

          <div className="mt-8 grid grid-cols-12 gap-8">
            <h2 className="col-span-12 lg:col-span-6 text-gray-100/85 text-4xl md:text-6xl font-light">
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
        <div className="pt-10">
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
