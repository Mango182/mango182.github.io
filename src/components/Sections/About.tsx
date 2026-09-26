import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '@/styles/About.css';

export default function About() {
  return (
    <section id="about">

      <p>Hi, I am</p>
      <h1>Miguel Echeverry</h1>
      <p className="tagline">Software Developer | Math & CS</p>
      <div className="description">
        <p>
          I graduated with a degree in Mathematics and Computer Science From UMass Lowell.
          My work focuses on building practical and efficient software across the stack.
          From native and Flutter mobile applications with offline persistence to C++ engines, graphics pipelines, and numerical solvers.
        </p>
        <p>
          I prefer completely understanding how things work from the ground up, and I am currently looking for entry-level software engineering roles where I can contribute to meaningful projects and continue to grow as a developer.
        </p>
      </div>
      <ul className="links">
        <li>
          <a href="https://github.com/Mango182" target="_blank" rel="noreferrer" aria-label='GitHub'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/mecheverry182" target="_blank" rel="noreferrer" aria-label='LinkedIn'>
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </section>
  )
}
