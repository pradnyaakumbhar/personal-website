import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SectionDivider from './components/SectionDivider'

function App() {
  return (
    <div className="scroll-smooth bg-black">
      <Navbar />
      <div className="relative">
        <div className="sticky top-0 z-0">
          <Home />
        </div>
        <div className="relative z-20">
          <About />
        </div>
      </div>
      <SectionDivider />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  )
}

export default App
