import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  image: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, image, title, description, features }: ServiceCardProps) => {
  return (
    <motion.div 
      className="service-card group h-full"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card image */}
      <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-2xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className="absolute bottom-4 left-6 text-5xl drop-shadow-lg">{icon}</span>
      </div>
      
      <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-foreground to-sky-cyan bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-foreground/70 leading-relaxed text-base md:text-lg mb-6">
        {description}
      </p>
      <ul className="pt-5 border-t border-sky-cyan/20 space-y-3">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="text-foreground/80 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-neon-pink"
          >
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
