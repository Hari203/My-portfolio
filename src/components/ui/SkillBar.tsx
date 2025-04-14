
import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-navy">{name}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-navy to-turquoise" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
