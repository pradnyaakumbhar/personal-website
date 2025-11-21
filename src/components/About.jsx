const About = () => {
  return (
    <section id="about" className="min-h-screen bg-purple-50 py-20 px-4 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-8 text-center">About Me</h2>
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Hi, I'm Pradnya</h3>
              <p className="text-gray-600 text-lg mb-4">
                I'm a passionate developer with expertise in building modern web applications.
                I love creating intuitive and engaging user experiences.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                With a strong foundation in frontend technologies and a keen eye for design,
                I strive to build products that make a difference.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Node.js
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
