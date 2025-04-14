
import React from 'react';

interface CertificateCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, image, onClick }) => {
  return (
    <div 
      className="card cursor-pointer overflow-hidden group"
      onClick={onClick}
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium">
            View Certificate
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-navy text-center">{title}</h3>
      </div>
    </div>
  );
};

export default CertificateCard;
