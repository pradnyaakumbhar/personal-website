import FluidCursor from './FluidCursor'
import mediumWaveGif from '../assets/medium-wave.gif'

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      <FluidCursor />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-2">
            Hey, I'm Pradnya! 👋
          </h1>
          <p className="text-lg text-gray-600 mb-12">text</p>

          <div className="flex justify-center mb-8">
            <img
              src={mediumWaveGif}
              alt="Wave animation"
              className="max-w-md w-full rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
