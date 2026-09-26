import '@/styles/Navbar.css';
import logo from '@/assets/project_images/Fancy_Cat.png';

export default function Navbar() {
  return (
    <nav>
      <a href="#top" className='title'>
        <img className="logo" src={logo} alt="Logo" />
      </a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}