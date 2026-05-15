
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Capa oscura superpuesta a la imagen */}
      <div className="footer-overlay"></div>

      <div className="container footer-content">
        {/* Columna 1: Marca */}
        <div className="footer-brand">
          <h2 className="footer-logo">Adon.AI</h2>
          <p>
            Software, marketing, contenido e inteligencia artificial para marcas que quieren 
            comunicar mejor, planificar con claridad y crecer con herramientas reales.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Columna 2: Enlaces */}
        <div className="footer-column">
          <h3>Enlaces</h3>
          <a href="#servicios">Servicios</a>
          <a href="#planes">Planes</a>
          <a href="#proceso">Proceso</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        {/* Columna 3: Servicios (¡La que faltaba!) */}
        <div className="footer-column">
          <h3>Servicios</h3>
          <a href="#servicios">Páginas web</a>
          <a href="#servicios">Marketing estratégico</a>
          <a href="#servicios">Redes y contenido</a>
          <a href="#servicios">Automatización e IA</a>
          <a href="#servicios">Software a medida</a>
        </div>

        {/* Columna 4: Contacto */}
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
      
      {/* Barra inferior */}
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