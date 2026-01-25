import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (event, href) => {
    event.preventDefault()
    toggleMenu()

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <>
      {/* Navigation Background Circle */}
      <div
        className={`fixed bg-gray-100 rounded-full transition-transform duration-700 ease-in-out z-[9998] ${isOpen ? 'scale-100' : 'scale-0'}`}
        style={{
          top: '2rem',
          right: '2rem',
          width: '5rem',
          height: '5rem',
          transformOrigin: 'center',
          transform: isOpen ? 'translate(50%, -50%) scale(40)' : 'translate(50%, -50%) scale(0)'
        }}
      />

      {/* Navigation Menu */}
      <nav className={`fixed inset-0 z-[9999] flex flex-col justify-between p-16 transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Navigation Links - positioned slightly right of center */}
        <div className="flex-1 flex items-center justify-center">
          <ul className="flex flex-col items-start space-y-3 ml-24">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`transform transition-all duration-800 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[100vw] opacity-0'}`}
                style={{
                  transitionDelay: '200ms',
                  transitionTimingFunction: isOpen ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'ease-in'
                }}
              >
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="text-5xl md:text-7xl font-bold text-gray-800 transition-colors duration-300 inline-block relative group uppercase"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Email and Social Links */}
        <div className={`mr-16 flex flex-col items-center justify-center transform transition-all duration-800 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className='items-start'>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Email Address</p>
          <a
            href="mailto:your.email@example.com"
            className="text-base text-gray-800 hover:text-gray-600 transition-colors block mb-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            kumbharpradnyaa@example.com
          </a>
          <div className="flex gap-6 text-sm">
            <a href="https://www.linkedin.com/in/pradnya-kumbhar/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/pradnyaakumbhar" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
              Github
            </a>
            {/* <a href="https://x.com/pradnyaakumbhar" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 transition-colors">
              X
            </a> */}
          </div>
          </div>
          
        </div>
      </nav>

      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 w-16 h-16 bg-gray-800 rounded-full z-[10000] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-5 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>
    </>
  )
}

export default Navbar
