import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, Rocket, Target, Users, Sparkles } from "lucide-react";
import GridBackground from "@/components/GridBackground";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";

const About = () => {
  const services = [
    { icon: Rocket, title: "Software Development", desc: "Building robust, scalable, and tailored software solutions for the modern enterprise." },
    { icon: Target, title: "Enterprise Development", desc: "Crafting high-impact applications and systems that drive business efficiency and growth." },
    { icon: Sparkles, title: "Design & User Experience", desc: "Creating intuitive, stunning, and human-centered designs across all platforms." },
    { icon: Users, title: "VR & Animation", desc: "Bringing ideas to life through compelling immersive experiences and dynamic visual content." },
    { icon: Lightbulb, title: "Consultation", desc: "Providing strategic guidance to help businesses navigate the complex tech landscape." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <GridBackground />
      <Particles />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 px-[5%] py-6 flex justify-between items-center z-50 backdrop-blur-md bg-navy-blue/30 border-b border-sky-cyan/10">
        <Link to="/" className="font-orbitron text-2xl md:text-3xl font-black tracking-wider gradient-text">
          TECHIT
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground/90 hover:text-foreground transition-colors nav-link"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-16 px-[5%]">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-pink/5 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black mb-6 gradient-text">
            About Us
          </h1>
          <p className="font-syne text-lg md:text-xl text-muted-foreground leading-relaxed">
            From a vision born in a classroom to a full-spectrum technology partner
          </p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="py-16 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl border border-sky-cyan/20"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Our Beginning
            </h2>
            <p className="font-syne text-muted-foreground text-lg leading-relaxed">
              Techit began not as a company, but as a deep-seated ambition to bring meaningful change to the world. 
              Founded by a grade 11 student, the initial vision was fueled by the desire to experiment, innovate, 
              and try new things.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evolution Section */}
      <section className="py-16 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 md:p-12 rounded-2xl border border-neon-pink/20"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-foreground">
              The Evolution of Techit
            </h2>
            <p className="font-syne text-muted-foreground text-lg leading-relaxed">
              Our journey took a decisive turn with the introduction of Virtual Reality (VR). This exciting 
              technology opened our eyes to the potential of immersive experiences, driving us into the realm 
              of design and experimentation. This crucial shift marked our transition into the world of software 
              development and enterprise solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lightbulb className="w-8 h-8 text-neon-pink" />
              <h2 className="font-orbitron text-2xl md:text-4xl font-bold gradient-text">
                What Techit Stands For
              </h2>
            </div>
            <p className="font-syne text-muted-foreground text-lg max-w-3xl mx-auto">
              Today, Techit is a full-spectrum technology and design partner, driven by that same founding 
              spirit of innovation. We translate ambition into reality by offering a comprehensive suite of services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl border border-sky-cyan/20 hover:border-neon-pink/40 transition-all duration-300 group"
              >
                <service.icon className="w-10 h-10 text-sky-cyan group-hover:text-neon-pink transition-colors mb-4" />
                <h3 className="font-orbitron text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="font-syne text-muted-foreground text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 rounded-2xl border border-sky-cyan/20 bg-gradient-to-br from-neon-pink/5 to-sky-cyan/5"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 gradient-text">
              Our Promise
            </h2>
            <p className="font-syne text-muted-foreground text-lg leading-relaxed mb-6">
              At Techit, every project is a chance to innovate. We are committed to pushing boundaries, 
              asking "what if," and delivering solutions that not only meet your needs but redefine possibilities. 
              Our history proves that a great vision, combined with dedication to craft, is the ultimate engine for change.
            </p>
            <p className="font-orbitron text-xl md:text-2xl font-bold text-foreground">
              Join us in building the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-6 text-foreground">
            Ready to Start Your Journey?
          </h2>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 font-orbitron font-bold text-foreground rounded-full border-2 border-neon-pink bg-neon-pink/10 hover:bg-neon-pink/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,127,0.4)]"
          >
            Get In Touch
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
