import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FooterCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 px-[5%] text-center relative z-10" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-orbitron text-2xl md:text-4xl lg:text-5xl mb-6 font-black"
      >
        Ready to Build the <span className="gradient-text">Future?</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl mx-auto"
      >
        Let's create something extraordinary together
      </motion.p>
      <motion.a 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        href="mailto:ceo.techit.ind@gmail.com" 
        className="cta-button inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get In Touch
      </motion.a>
    </section>
  );
};

export default FooterCTA;
