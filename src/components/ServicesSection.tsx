import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ServiceCard from './ServiceCard';
import vrImage from '@/assets/vr-hero.jpg';
import arImage from '@/assets/ar-glasses.jpg';
import softwareImage from '@/assets/software-code.jpg';

const services = [
  {
    icon: '🥽',
    image: vrImage,
    title: 'VR Development',
    description: 'Create fully immersive virtual experiences that transport users beyond reality.',
    features: [
      'Immersive training simulations',
      'Virtual environments & worlds',
      'Interactive 3D experiences',
    ],
  },
  {
    icon: '👓',
    image: arImage,
    title: 'AR Development',
    description: 'Overlay digital intelligence onto the physical world with precision AR solutions.',
    features: [
      'Field-assist applications',
      'Real-time data overlays',
      'Location-based AR experiences',
    ],
  },
  {
    icon: '💻',
    image: softwareImage,
    title: 'Software Development',
    description: 'Build robust enterprise systems that integrate seamlessly with cutting-edge tech.',
    features: [
      'Enterprise system architecture',
      'API & platform integrations',
      'Custom software solutions',
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 px-[5%] relative z-10" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-orbitron text-3xl md:text-5xl lg:text-6xl text-center mb-4 font-black tracking-tight"
      >
        Our <span className="gradient-text">Dimensions</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-foreground/60 mb-16 md:mb-20 text-lg md:text-xl"
      >
        Cutting-edge solutions for the future of interaction
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
