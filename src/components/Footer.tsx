const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-[5%] border-t border-sky-cyan/10 text-center text-foreground/50 relative z-10">
      <p>&copy; {currentYear} TechIt. Reality Reimagined.</p>
    </footer>
  );
};

export default Footer;
