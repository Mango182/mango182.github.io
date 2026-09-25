import type { Skill } from '../../data/skills';
import { frontEndSkills, backEndSkills, languages, tools, MobileSkills } from '../../data/skills';
import '../../styles/Skills.css';



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
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-category">
          <h2>Frontend</h2>
          <SkillList skills={frontEndSkills} />
        </div>
        <div className="skill-category">
          <h2>Backend</h2>
          <SkillList skills={backEndSkills} />
        </div>
        <div className="skill-category">
          <h2>Languages</h2>
          <SkillList skills={languages} />
        </div>
        <div className="skill-category">
          <h2>Tools</h2>
          <SkillList skills={tools} />
        </div>
        <div className="skill-category">
          <h2>Mobile</h2>
          <SkillList skills={MobileSkills} />
        </div>
      </div>
    </section>
  );
}
