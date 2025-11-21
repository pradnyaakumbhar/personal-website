const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart, checkout, and payment integration.",
      image: "🛒",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      image: "✅",
      tech: ["React", "Firebase", "Tailwind"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather forecast application with location-based predictions.",
      image: "🌤️",
      tech: ["React", "API Integration", "Charts"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Interactive portfolio with fluid animations and smooth transitions.",
      image: "🎨",
      tech: ["React", "Vite", "WebGL"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="min-h-screen bg-purple-50 py-20 px-4 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-8xl">
                {project.image}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
