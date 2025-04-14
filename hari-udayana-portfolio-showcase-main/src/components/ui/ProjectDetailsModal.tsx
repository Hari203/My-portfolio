import React from 'react';
import { X } from 'lucide-react';

interface Technology {
  name: string;
}

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  technologies: Technology[];
  features?: string[];
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  technologies,
  features = [],
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-navy">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-navy mb-2">Description</h3>
              <p className="text-gray-600">{description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-navy mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="skill-badge">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-navy mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal; 