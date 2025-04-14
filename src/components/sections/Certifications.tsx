import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import CertificateCard from '../ui/CertificateCard';
import Modal from '../ui/Modal';

const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const certificates = [
    {
      title: 'Pega Certified Senior System Architect (V-23)',
      image: '/uploads/pega-senior-architect.png',
    },
    {
      title: 'Pega Certified System Architect (V-23)',
      image: '/uploads/pega-system-architect.png',
    },
    {
      title: 'Programming for Everybody - Python (University of Michigan)',
      image: '/uploads/programming-coursera.png',
    },
    {
      title: 'Introduction to Cloud Computing (IBM)',
      image: '/uploads/ibm-cloud.png',
    }
  ];

  return (
    <section id="certifications">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications I've earned throughout my academic journey."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              title={certificate.title}
              image={certificate.image}
              onClick={() => setSelectedCertificate(certificate)}
            />
          ))}
        </div>
        
        <Modal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate?.title}
        >
          <div className="flex flex-col items-center">
            <img 
              src={selectedCertificate?.image} 
              alt={selectedCertificate?.title} 
              className="max-w-full max-h-[70vh] object-contain"
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Certifications;
