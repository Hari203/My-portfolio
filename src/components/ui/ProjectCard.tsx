import React from 'react';
import { Github } from 'lucide-react';

interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: Technology[];
  demoLink?: string;
  sourceLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  sourceLink,
}) => {
  return (
    <div className="card overflow-hidden h-full flex flex-col">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="skill-badge">
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="project-link">
              <Github size={16} /> Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
