import { useEffect } from 'react';
import GridBackground from '@/components/GridBackground';
import Particles from '@/components/Particles';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = 'TechIt - Reality Reimagined';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'TechIt builds immersive VR, AR, and software experiences that transcend the physical world. Explore our cutting-edge solutions for the future of interaction.');
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <GridBackground />
      <Particles />
      <Navigation />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <FooterCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
