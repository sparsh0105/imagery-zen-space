const HolographicRings = () => {
  return (
    <>
      <div className="holographic-ring w-[300px] h-[300px] md:w-[600px] md:h-[600px]" />
      <div 
        className="holographic-ring w-[250px] h-[250px] md:w-[500px] md:h-[500px]" 
        style={{ animationDelay: '1s' }}
      />
      <div 
        className="holographic-ring w-[200px] h-[200px] md:w-[400px] md:h-[400px] border-neon-pink" 
        style={{ animationDelay: '2s' }}
      />
    </>
  );
};

export default HolographicRings;
