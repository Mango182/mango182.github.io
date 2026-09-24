import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiOpenapiinitiative,
  SiPython,
  SiCplusplus,
  SiDart,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiLinux,
  SiCmake,
  SiGithubactions,
  SiFlutter,
  SiAndroid,
  SiSqlite,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';
import '../../styles/Skills.css';

interface Skill {
  name: string;
  icon: IconType;
  color?: string;
}

const frontEndSkills: Skill[] = [
  { name: 'HTML', icon: SiHtml5, color: 'rgb(227, 79, 38)' },
  { name: 'CSS', icon: SiCss, color: 'rgb(21, 114, 182)' },
  { name: 'JavaScript', icon: SiJavascript, color: 'rgb(247, 223, 30)' },
  { name: 'React', icon: SiReact, color: 'rgb(97, 218, 251)' },
  { name: 'TypeScript', icon: SiTypescript, color: 'rgb(49, 120, 198)' },
];

const backEndSkills: Skill[] = [
  { name: 'RESTful APIs', icon: SiOpenapiinitiative, color: 'rgb(107, 165, 57)' },
  { name: 'SQLite', icon: SiSqlite, color: 'rgb(0, 59, 90)' },
];

const languages: Skill[] = [
  { name: 'Python', icon: SiPython, color: 'rgb(55, 118, 171)' },
  { name: 'Java', icon: DiJava, color: 'rgb(237, 139, 0)' },
  { name: 'C/C++', icon: SiCplusplus, color: 'rgb(0, 89, 156)' },
  { name: 'Dart', icon: SiDart, color: 'rgb(1, 117, 194)' },
  { name: 'JavaScript', icon: SiJavascript, color: 'rgb(247, 223, 30)' },
];

const tools: Skill[] = [
  { name: 'Git', icon: SiGit, color: 'rgb(240, 80, 50)' },
  { name: 'Docker', icon: SiDocker, color: 'rgb(36, 150, 237)' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'rgb(50, 108, 229)' },
  { name: 'Firebase', icon: SiFirebase, color: 'rgb(255, 202, 40)' },
  { name: 'Linux', icon: SiLinux, color: 'rgb(252, 198, 36)' },
  { name: 'VS Code', icon: VscVscode, color: 'rgb(0, 122, 204)' },
  { name: 'CMake', icon: SiCmake, color: 'rgb(6, 79, 139)' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: 'rgb(32, 136, 255)' },
];

const MobileSkills: Skill[] = [
  { name: 'Flutter', icon: SiFlutter, color: 'rgb(1, 117, 194)' },
  { name: 'Android', icon: SiAndroid, color: 'rgb(3, 244, 75)' },
  { name: 'React Native', icon: SiReact, color: 'rgb(97, 218, 251)' }
];

function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <ul>
      {skills.map(({ name, icon: Icon, color }) => (
        <li key={name}>
          <Icon className="skill-icon" size={20} color={color} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <SkillList skills={frontEndSkills} />
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <SkillList skills={backEndSkills} />
        </div>
        <div className="skill-category">
          <h3>Languages</h3>
          <SkillList skills={languages} />
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <SkillList skills={tools} />
        </div>
        <div className="skill-category">
          <h3>Mobile</h3>
          <SkillList skills={MobileSkills} />
        </div>
      </div>
    </section>
  );
}
