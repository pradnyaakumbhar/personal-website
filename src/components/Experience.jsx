import React, { useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  FiMapPin,
  FiBriefcase,
  FiCalendar,
  FiAward,
} from "react-icons/fi"

import spotcareLogo from "../assets/logos/spotcareLogo.png"
import evogeniousLogo from "../assets/logos/evogeniousLogo.jpeg"

const experiences = [
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

const Experience = () => {
  const sectionRef = useRef(null)
  const lineWrapRef = useRef(null)
  const [lineHeight, setLineHeight] = useState(0)

  // Measure total height so dot travels exact distance
  useLayoutEffect(() => {
    if (!lineWrapRef.current) return

    const el = lineWrapRef.current
    const measure = () => setLineHeight(el.getBoundingClientRect().height)

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)

    return () => ro.disconnect()
  }, [])

  // Scroll progress within section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.25"],
  })

  // Dot Y position
  const dotY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.max(lineHeight, 1)]
  )

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-gray-100 py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">
          Experience
        </h2>

        <div className="relative" ref={lineWrapRef}>
          {/* BASE STATIC LINE */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-200" />

          {/* SCROLL TRAIL (dark near dot, fades upward) */}
          <motion.div
            className="absolute left-6 top-0 w-[2px]"
            style={{
              height: dotY,
              background: "rgba(17,24,39,0.9)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, #000 65%, #000 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, #000 65%, #000 100%)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-16">
                {/* LOGO NODE */}
                <div className="absolute left-6 top-4 -translate-x-1/2">
                  <div className="h-16 w-16 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-[0_8px_18px_rgba(15,23,42,0.18)]">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="h-11 w-11 object-contain"
                    />
                  </div>
                </div>

                {/* CARD */}
                <div className="rounded-2xl border border-gray-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600">
                          <span className="inline-flex items-center gap-2">
                            <FiBriefcase className="text-gray-500" />
                            <span className="font-medium">{exp.company}</span>
                          </span>

                          <span className="inline-flex items-center gap-2">
                            <FiMapPin className="text-gray-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex md:flex-col items-start md:items-end gap-2">
                        <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 text-sm">
                          <FiCalendar />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center gap-2 text-gray-900 font-semibold">
                        <FiAward className="text-gray-500" />
                        Key Achievements
                      </div>

                      <ul className="mt-3 space-y-2 text-gray-600">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-[6px] h-2 w-2 rounded-full bg-gray-500 flex-shrink-0" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-gray-100 text-gray-700 border border-gray-200 px-4 py-2 text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience
