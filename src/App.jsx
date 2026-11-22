import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // reducedMotion="user": visitors who ask for less motion get fades without movement
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
}

export default App;
