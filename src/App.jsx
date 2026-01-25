import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="scroll-smooth bg-black">
      <Navbar />
      <div className="relative">
        <div className="sticky top-0 z-10">
          <Home />
        </div>
        <div className="relative z-20">
          <About />
        </div>
      </div>
      {/* <WorkExperience /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default App
