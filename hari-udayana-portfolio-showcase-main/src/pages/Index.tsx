
import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
    </MainLayout>
  );
};

export default Index;
