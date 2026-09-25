import projects from '../../data/projects'
import ProjectCard from '../ProjectCard'

import '../../styles/Projects.css';

function Projects() {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects