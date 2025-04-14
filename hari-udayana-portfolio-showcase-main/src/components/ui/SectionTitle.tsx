
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
