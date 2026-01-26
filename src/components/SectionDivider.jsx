import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CLIP =
  "polygon(0 0, 100% 0, 100% 30%, 80% 30%, 80% 45%, 60% 45%, 60% 60%, 40% 60%, 40% 75%, 20% 75%, 20% 90%, 0 90%)"

const SectionDivider = () => {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    margin: "-10% 0px -10% 0px",
  })

  return (
    <div ref={ref} className="bg-gray-100">
      <div className="relative h-16 mt-10 overflow-hidden">
        {/* Divider */}
        <div className="absolute inset-0 bg-black" style={{ clipPath: CLIP }} />

        {/* Cover */}
        <motion.div
          className="absolute inset-0"
          animate={{ scaleY: isInView ? 0 : 1 }}
          transition={{
            duration: 1.25, // ⬅️ slower
            ease: [0.16, 1, 0.3, 1], // smoother, more “luxury” feel
          }}
          style={{
            background: "#f3f4f6",
            transformOrigin: "bottom",
          }}
        />

        {/* Fade edge */}
        <motion.div
          className="absolute left-0 right-0 pointer-events-none"
          animate={{ y: isInView ? "100%" : "0%" }}
          transition={{
            duration: 1.25, // match cover
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            height: 110, // softer fade
            transform: "translateY(-110px)",
            background:
              "linear-gradient(to top, rgba(243,244,246,1), rgba(243,244,246,0))",
          }}
        />
      </div>
    </div>
  )
}

export default SectionDivider
