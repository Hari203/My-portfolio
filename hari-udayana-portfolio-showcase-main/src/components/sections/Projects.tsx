import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Hotel Booking Application',
      description: 'Built with Pega to simplify hotel booking processes using user-friendly workflows and BPM logic.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'Pega' },
        { name: 'BPM' },
        { name: 'UI/UX' }
      ],
      demoLink: '#',
      sourceLink: '#',
      features: [
        'User-friendly booking interface',
        'Real-time room availability checking',
        'Automated booking confirmation',
        'Payment integration',
        'Booking management dashboard'
      ]
    },
    {
      title: 'Weather Web App',
      description: 'Displays live temperature, humidity, and wind speed using OpenWeather API.',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'API' }
      ],
      demoLink: '#',
      sourceLink: '#',
      features: [
        'Real-time weather data',
        'Location-based weather information',
        '5-day weather forecast',
        'Temperature unit conversion',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'Sentiment Analysis System',
      description: 'Python tool that analyzes and classifies text (positive, neutral, negative) using NLTK and Scikit-learn.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      technologies: [
        { name: 'Python' },
        { name: 'NLTK' },
        { name: 'Scikit-learn' }
      ],
      demoLink: '#',
      sourceLink: '#',
      features: [
        'Text sentiment classification',
        'Support for multiple languages',
        'Custom training capabilities',
        'Batch processing support',
        'Accuracy metrics and visualization'
      ]
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Projects" 
          subtitle="Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoLink={project.demoLink}
              sourceLink={project.sourceLink}
              features={project.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
