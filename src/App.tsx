import './App.css'
import Navbar from './components/Navbar'
import About from './components/Sections/About'
import Projects from './components/Sections/Projects'
import Skills from './components/Sections/Skills'
import Contact from './components/Sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
