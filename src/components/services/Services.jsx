import React from 'react';
import './Services.css';

// Le agregamos los <br/> para que los títulos corten igual a la foto
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
  },
];

const Services = () => {
  return (
    <section className="services-section" id="servicios">
      <div className="services-bg-overlay"></div>
      
      <div className="container">
        {/* Envoltorio superior para alinear a la izquierda */}
        <div className="services-top-wrapper">
          <div className="services-text-content">
            <span className="eyebrow">Qué hacemos</span>
            {/* El salto de línea exacto para el título principal */}
            <h2>Creamos ecosistemas<br/>digitales a medida.</h2>
            <p>
              En Adon.AI creamos ecosistemas digitales a medida para marcas, emprendedores y empresas que necesitan presencia, estrategia, contenido, automatización y herramientas reales para crecer.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <article key={index} className="adon-card">
              <span className="card-number">{service.id}</span>
              <h3 className="card-title-services">{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;