import type { Project } from '../projects';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      {project.image && <img src={project.image} alt={project.title} />}
    </div>
  );
}