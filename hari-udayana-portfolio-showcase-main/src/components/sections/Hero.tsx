import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <p className="text-turquoise font-medium mb-2 animate-fade-in">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-navy mb-4 font-heading animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Ratnahari Udayana
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              B.Tech CSE (AI & ML) Student
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              I create elegant, efficient, and user-centered digital experiences with a focus on performance and accessibility.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-secondary hover:bg-navy hover:text-white transition-all duration-300">
                View Projects
              </a>
              <a 
                href="/resume.pdf" 
                download="Ratnahari_Udayana_Resume.pdf"
                className="btn-secondary hover:bg-navy hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
            
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <a 
                href="https://github.com/Hari203" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-navy text-white hover:bg-navy-light transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/ratnahari" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-navy text-white hover:bg-navy-light transition-colors duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:hariudayana2002@gmail.com" 
                className="p-2 rounded-full bg-navy text-white hover:bg-navy-light transition-colors duration-200"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-navy to-turquoise rounded-lg blur opacity-0 group-hover:opacity-70 transition duration-300"></div>
              <img 
                src="/uploads/profile-photo.png" 
                alt="Ratnahari Udayana" 
                className="w-64 h-auto md:w-80 object-cover rounded-lg shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={24} className="text-navy" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
