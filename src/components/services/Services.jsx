import { useState, useEffect } from 'react';
import ServicesSkeleton from '../../skeletons/services/ServicesSkeleton';
import './Services.css';

const servicesData = [
  { 
    id: '01', 
    title: <>Páginas web y<br/>software</>, 
    desc: 'Desarrollamos páginas web y soluciones de software a medida para fortalecer tu imagen, ordenar la gestión y construir una base digital sólida.' 
  },
  { 
    id: '02', 
    title: <>Marketing<br/>estratégico</>, 
    desc: 'Analizamos mercado, público ideal, campañas, canales y datos para tomar decisiones más claras y efectivas.' 
  },
  { 
    id: '03', 
    title: <>Redes y<br/>contenido</>, 
    desc: 'Ordenamos, actualizamos y damos vida a tu marca en redes con estética, comunicación, contenido e identidad.' 
  },
  { 
    id: '04', 
    title: <>Automatización e<br/>IA</>, 
    desc: 'Creamos herramientas para ordenar procesos, responder más rápido y reducir tareas repetitivas dentro de tu negocio.' 
  }
];

const Services = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('01');

  const fondoDesk = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044295/fondoqhacemos_11zon_sxw3qh.webp";
  const fondoMov = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044417/fondo-hacemos-mob-clean_11zon_wiucmw.webp";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const imageToLoad = isMobile ? fondoMov : fondoDesk;

    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  if (!isImageLoaded) {
    return <ServicesSkeleton />;
  }

  return (
    <section 
      className="services-section" 
      id="servicios"
      style={{
        '--bg-desktop': `url(${fondoDesk})`,
        '--bg-mobile': `url(${fondoMov})`
      }}
    >
      <div className="services-bg-overlay"></div>
      
      <div className="container">
        <div className="services-top-wrapper">
          <div className="services-text-content">
            <span className="eyebrow">Qué hacemos</span>
            <h2>Creamos ecosistemas<br/>digitales a medida.</h2>
            <p>
              En Adon.AI creamos ecosistemas digitales a medida para marcas, emprendedores y empresas que necesitan presencia, estrategia, contenido, automatización y herramientas reales para crecer.
            </p>
          </div>
        </div>

        {isMobileView ? (
          <div className="services-mobile-accordion">
            {servicesData.map((service) => {
              const isActive = openAccordion === service.id;
              return (
                <article 
                  key={service.id} 
                  className={`adon-card accordion-card ${isActive ? 'active' : ''}`}
                  onClick={() => toggleAccordion(service.id)}
                >
                  <div className="card-top-header">
                    <span className="card-number">{service.id}</span>
                    <span className="card-toggle-icon">+</span>
                  </div>
                  <h3 className="card-title-services">{service.title}</h3>
                  <div className="card-expandable-wrapper">
                    <div className="card-expandable-content">
                      <p>{service.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <article key={index} className="adon-card services-static-card">
                <span className="card-number">{service.id}</span>
                <h3 className="card-title-services">{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;