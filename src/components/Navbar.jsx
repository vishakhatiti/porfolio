import { useEffect, useState } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-content">
        <button type="button" className="brand" onClick={() => goTo("home")}>Vishakha Mane</button>
        <button type="button" className="hamburger" onClick={() => setIsMenuOpen((v) => !v)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => goTo(link.id)}>{link.label}</button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
