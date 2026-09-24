import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import '../../styles/About.css';

export default function About() {
  return (
    <section id="about">

      <p>Hi, I am</p>
      <h1>Miguel Echeverry</h1>
      <p className="tagline">Recent Math & CS Graduate</p>
      <p>
        I'm a recent Mathematics and Computer Science graduate who enjoys building thoughtful, reliable software and solving challenging problems.
      </p>
      <ul className="links">
        <li>
          <a href="https://github.com/Mango182" target="_blank" rel="noreferrer" aria-label='GitHub'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="mailto:MiguelEEcheverry@gmail.com" aria-label='Email'>
            <FaEnvelope />
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
