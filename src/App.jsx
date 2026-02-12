import Navbar from './components/Navbar';
import ScrollDots from './components/ScrollDots';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';

export default function App() {
  return (
    <>
    <Navbar />
    <ScrollDots />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
    </main>
    </>
  );
}