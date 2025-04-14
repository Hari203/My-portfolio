
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import SkillBar from '../ui/SkillBar';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Pega', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'Java', percentage: 80 },
    { name: 'SQL', percentage: 85 },
    { name: 'HTML/CSS', percentage: 75 },
  ];

  const softSkills = [
    { name: 'Communication', percentage: 90 },
    { name: 'Leadership', percentage: 85 },
    { name: 'Time Management', percentage: 80 },
    { name: 'Teamwork', percentage: 95 },
    { name: 'Problem Solving', percentage: 90 },
  ];

  const otherTechnologies = [
    'Git', 'Docker', 'REST APIs', 'NLTK', 'Scikit-learn', 
    'BPM', 'UI/UX Design', 'Agile', 'Scrum', 'CI/CD'
  ];

  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="My Skills" 
          subtitle="A collection of technologies and tools I've worked with and mastered over the years."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy mb-6">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
              />
            ))}
          </div>
          
          <div className="card p-6 md:p-8">
            <h3 className="text-xl font-bold text-navy mb-6">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold text-navy mb-6 text-center">Other Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTechnologies.map((tech, index) => (
              <span key={index} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
