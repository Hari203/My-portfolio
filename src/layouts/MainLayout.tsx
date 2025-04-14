
import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {children}
      </main>
      <footer className="bg-navy text-white py-8 mt-16">
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">© {new Date().getFullYear()} Ratnahari Udayana. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
