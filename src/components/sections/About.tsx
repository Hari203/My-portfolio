
import React from 'react';
import { CalendarCheck, MapPin, Globe, Coffee } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Final-year B.Tech CSE (AI & ML) student with strong problem-solving skills and a passion for building smart, scalable web and enterprise applications."
        />
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-navy mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I'm Ratnahari, a final-year B.Tech CSE (AI & ML) student with strong problem-solving skills and a 
              passion for building smart, scalable web and enterprise applications.
            </p>
            <p className="text-gray-700 mb-4">
              As a Certified Pega Senior System Architect (CSSA) and developer with experience in Python, Java, and SQL, 
              I'm eager to contribute to innovative, AI-powered business solutions.
            </p>
            <p className="text-gray-700 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, 
              or enjoying outdoor activities to recharge my creative energy.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CalendarCheck size={20} className="text-turquoise" />
                <span className="text-gray-700">Final-year B.Tech Student</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-turquoise" />
                <span className="text-gray-700">Vizianagaram, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-turquoise" />
                <span className="text-gray-700">hariudayana2002@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Coffee size={20} className="text-turquoise" />
                <span className="text-gray-700">Fueled by curiosity & coffee</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-turquoise pb-6">
                  <div className="absolute w-4 h-4 bg-turquoise rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-navy">Bachelor Of Technology in Computer Science Engineering (AI ML)</h4>
                  <p className="text-gray-600">Avanthi Institute of engineering and technology, Vizianagaram, Andhra Pradesh</p>
                  <p className="text-gray-500 text-sm mt-1">Sept 2021 - May 2025</p>
                </div>
                <div className="relative pl-8 border-l-2 border-turquoise pb-6">
                  <div className="absolute w-4 h-4 bg-turquoise rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-navy">Intermediate Education (+1, +2)</h4>
                  <p className="text-gray-600">Sri Satya Sai Jr college, Palakonda, Andhra Pradesh</p>
                  <p className="text-gray-500 text-sm mt-1">2019 - 2021</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-turquoise rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold text-navy">High School</h4>
                  <p className="text-gray-600">RCM Daniela Romanello EM School, Vangara, Andhra Pradesh</p>
                  <p className="text-gray-500 text-sm mt-1">2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
