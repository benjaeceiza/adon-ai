import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import FooterSkeleton from '../../skeletons/footer/FooterSkeleton';
import logo from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const fondoDesk = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044299/imagenfoot_11zon_jubrzw.webp";
  const fondoMov = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044416/fondo-fot-mob-clean_11zon_gnd1jq.webp";

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const imageToLoad = isMobile ? fondoMov : fondoDesk;

    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);
  }, []);

  if (!isImageLoaded) {
    return <FooterSkeleton />;
  }

  return (
    <footer 
      className="site-footer"
      style={{
        '--bg-desktop': `url(${fondoDesk})`,
        '--bg-mobile': `url(${fondoMov})`
      }}
    >
      <div className="footer-overlay"></div>

      <div className="container footer-content">
        <div className="footer-brand">
          <div className="footer-brand-header">
            <img src={logo} alt="Adon.AI Logo" className="footer-brand-logo" />
            <h2 className="footer-logo-text">Adon.AI</h2>
          </div>
          <p>
            Software, marketing, contenido e inteligencia artificial para marcas que quieren 
            comunicar mejor, planificar con claridad y crecer con herramientas reales.
          </p>
          <div className="social-links">
            <a href="#instagram" aria-label="Instagram"><FaInstagram /></a>
            <a href="#linkedin" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Enlaces</h3>
          <a href="#servicios">Servicios</a>
          <a href="#planes">Planes</a>
          <a href="#proceso">Proceso</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-column">
          <h3>Servicios</h3>
          <a href="#servicios">Páginas web</a>
          <a href="#servicios">Marketing estratégico</a>
          <a href="#servicios">Redes y contenido</a>
          <a href="#servicios">Automatización e IA</a>
          <a href="#servicios">Software a medida</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contacto</h3>
          <p>
            ¿Tenés un proyecto en mente?<br/>
            Hablemos y armemos una propuesta clara para tu marca.
          </p>
          <a 
            href="https://wa.me/5490000000000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-footer-wa"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p>© 2026 Adon.AI. Todos los derechos reservados.</p>
          <p>Software and Marketing. Comunicar. Planificar. Crecer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;