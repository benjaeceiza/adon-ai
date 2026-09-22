import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(false)}
      ></div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a className="brand-wrapper" href="#inicio">
            <img src={logo} alt="Adon.AI Logo" className="brand-logo" />
            <span className="brand-text">Adon.AI</span>
          </a>
          
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
            <a href="#proceso" onClick={() => setIsOpen(false)}>Proceso</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
            <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
            <a className="nav-button" href="https://wa.me/5490000000000">WhatsApp</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;