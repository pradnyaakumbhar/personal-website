import { useEffect, useState } from "react"
import FluidCursor from "./FluidCursor"
import mediumWaveGif from "../assets/medium-wave.gif"

const SENTENCE =
  "Fullstack Developer. DevOps Engineer."

// Timing controls
const TYPE_SPEED = 100        // ms per letter
const DELETE_SPEED = 60      // ms per letter while deleting
const HOLD_AFTER_TYPE = 1200 // pause after full sentence
const HOLD_AFTER_DELETE = 300 // pause before typing again

const Home = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer

    if (!isDeleting) {
      // typing
      if (text.length < SENTENCE.length) {
        timer = setTimeout(() => {
          setText(SENTENCE.slice(0, text.length + 1))
        }, TYPE_SPEED)
      } else {
        timer = setTimeout(() => setIsDeleting(true), HOLD_AFTER_TYPE)
      }
    } else {
      // deleting
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(SENTENCE.slice(0, text.length - 1))
        }, DELETE_SPEED)
      } else {
        timer = setTimeout(() => setIsDeleting(false), HOLD_AFTER_DELETE)
      }
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting])

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      <FluidCursor />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-3">
            Hey, I&apos;m Pradnya! 👋
          </h1>

          {/* Animated text – fixed height to prevent layout shift */}
          <p className="text-2xl text-gray-600 mb-12 h-[34px] md:h-[40px] leading-snug">
            {text}
          </p>

          <div className="flex justify-center mb-8">
            <img
              src={mediumWaveGif}
              alt="Wave animation"
              className="max-w-md w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
