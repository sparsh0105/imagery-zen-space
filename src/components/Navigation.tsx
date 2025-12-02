import { Link } from "react-router-dom";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 px-[5%] py-6 flex justify-between items-center z-50 backdrop-blur-md bg-navy-blue/30 border-b border-sky-cyan/10">
      <Link
        to="/"
        className="font-orbitron text-2xl md:text-3xl font-black tracking-wider gradient-text"
      >
        <img
          src="/favicon.jpeg"
          alt="TechIt Logo"
          className="w-8 h-8 inline-block mr-2"
        />{" "}
        TECHIT
      </Link>
      <ul className="flex gap-6 md:gap-12 list-none">
        <li>
          <button
            onClick={() => scrollToSection("services")}
            className="nav-link text-foreground/90 hover:text-foreground"
          >
            Services
          </button>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link text-foreground/90 hover:text-foreground"
          >
            About
          </Link>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link text-foreground/90 hover:text-foreground"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
