import { useState, useEffect } from 'react';
import AboutSkeleton from '../../skeletons/about/AboutSkeleton';
import './About.css';

const aboutData = [
  {
    id: '01',
    title: 'Software, marketing e IA integrados.',
    desc: 'Unimos desarrollo, comunicación y automatización para construir sistemas digitales más ordenados y funcionales.'
  },
  {
    id: '02',
    title: 'Estrategia digital para ordenar tu marca.',
    desc: 'Definimos mensajes, prioridades, canales y acciones para que tu presencia digital tenga dirección.'
  },
  {
    id: '03',
    title: 'Contenido, automatización y desarrollo web.',
    desc: 'Creamos piezas, herramientas y plataformas que ayudan a comunicar, gestionar y vender mejor.'
  },
  {
    id: '04',
    title: 'Soluciones prácticas para crecer con claridad.',
    desc: 'Trabajamos con foco en resultados, procesos simples y mejoras que puedan sostenerse en el tiempo.'
  }
];

const About = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [openCard, setOpenCard] = useState('01');

  const fondoDesk = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044303/imagennos_11zon_xjwflf.webp";
  const fondoMov = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044419/fondo-nos-mob-clean_11zon_lnhctr.webp";

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const imageToLoad = isMobile ? fondoMov : fondoDesk;

    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);
  }, []);

  const toggleAccordion = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  if (!isImageLoaded) {
    return <AboutSkeleton />;
  }

  return (
    <section 
      className="about-section" 
      id="nosotros"
      style={{
        '--bg-desktop': `url(${fondoDesk})`,
        '--bg-mobile': `url(${fondoMov})`
      }}
    >
      <div className="about-bg-overlay"></div>

      <div className="container">
        <div className="about-top-wrapper">
          <div className="about-text-content">
            <span className="eyebrow">Nosotros</span>
            <h2>¿Querés impulsar tu marca <br />con Adon.AI?</h2>
            <p>
              Integramos software, marketing, contenido e inteligencia artificial para crear soluciones prácticas, claras y adaptadas a la etapa real de cada marca.
            </p>
            <a href="#contacto" className="btn-primary-clipped">
              Iniciar proyecto
            </a>
          </div>
        </div>

        <div className="about-horizontal-accordion">
          {aboutData.map((item) => {
            const isActive = openCard === item.id;
            return (
              <article 
                key={item.id} 
                className={`adon-card ${isActive ? 'active' : ''}`}
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="card-top-header">
                  <span className="card-number">{item.id}</span>
                  <span className="card-toggle-icon">+</span>
                </div>
                
                <h3 className="card-title-fixed">{item.title}</h3>
                
                <div className="card-expandable-wrapper">
                  <div className="card-expandable-content">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;