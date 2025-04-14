import React from 'react';
import { Download, Eye } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, image, onClick }) => {
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent modal from opening when downloading
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-4">
          <button 
            onClick={onClick}
            className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium flex items-center gap-2 hover:text-turquoise"
          >
            <Eye size={20} />
            View
          </button>
          <button 
            onClick={handleDownload}
            className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium flex items-center gap-2 hover:text-turquoise"
          >
            <Download size={20} />
            Download
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-navy text-center">{title}</h3>
      </div>
    </div>
  );
};

export default CertificateCard;
