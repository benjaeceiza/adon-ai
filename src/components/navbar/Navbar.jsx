import  { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a className="brand-text" href="#inicio">Adon.AI</a>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#proceso" onClick={() => setIsOpen(false)}>Proceso</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
          <a className="nav-button" href="https://wa.me/549...">WhatsApp</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;