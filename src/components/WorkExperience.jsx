const WorkExperience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: "Leading frontend development initiatives and mentoring junior developers.",
      skills: ["React", "TypeScript", "Next.js"]
    },
    {
      title: "Frontend Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description: "Built responsive web applications and improved user experience.",
      skills: ["React", "JavaScript", "CSS"]
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed websites and learned modern web development practices.",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ]

  return (
    <section id="work" className="min-h-screen bg-purple-50 py-20 px-4 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                  <p className="text-lg text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
