
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Best Outgoing Student – Pega UAP 2024-25',
      description: 'Recognized for outstanding performance and leadership in the Pega University Academic Program.',
    },
    {
      title: 'Winner – Pega Hackathon by Talent Sprint',
      description: 'Led a team to victory by developing an innovative solution using Pega platform.',
    },
    {
      title: 'Top Performer – Data Science Workshop & Hackathon (BrainoVision)',
      description: 'Demonstrated exceptional skills in data analysis and machine learning implementation.',
    },
  ];

  return (
    <section id="achievements" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Achievements" 
          subtitle="Recognition and awards I've received for my academic and technical excellence."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="card p-6 flex flex-col items-center text-center">
              <div className="mb-4 w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center">
                <Trophy size={30} className="text-gold-dark" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
