
import './About.css';

// Le agregué los <br/> para que los títulos corten EXACTO como en tu foto
const aboutData = [
  { 
    id: '01', 
    title: <>Software,<br/>marketing e IA<br/>integrados.</>, 
    desc: 'Unimos desarrollo, comunicación y automatización para construir sistemas digitales más ordenados y funcionales.' 
  },
  { 
    id: '02', 
    title: <>Estrategia digital<br/>para ordenar tu<br/>marca.</>, 
    desc: 'Definimos mensajes, prioridades, canales y acciones para que tu presencia digital tenga dirección.' 
  },
  { 
    id: '03', 
    title: <>Contenido,<br/>automatización y<br/>desarrollo web.</>, 
    desc: 'Creamos piezas, herramientas y plataformas que ayudan a comunicar, gestionar y vender mejor.' 
  },
  { 
    id: '04', 
    title: <>Soluciones<br/>prácticas para<br/>crecer con<br/>claridad.</>, 
    desc: 'Trabajamos con foco en resultados, procesos simples y mejoras que puedan sostenerse en el tiempo.' 
  },
];

const About = () => {
  return (
    <section className="about-section" id="nosotros">
      <div className="about-bg-overlay"></div>
      
      <div className="container">
        {/* Envoltorio superior para tirar el texto a la izquierda */}
        <div className="about-top-wrapper">
          <div className="about-text-content">
            <span className="eyebrow">Nosotros</span>
            <h2>¿Querés impulsar tu marca <br/>con Adon.AI?</h2>
            <p>
              Integramos software, marketing, contenido e inteligencia artificial para crear soluciones prácticas, claras y adaptadas a la etapa real de cada marca.
            </p>
            {/* El botón que faltaba, igualito al diseño */}
            <a href="#contacto" className="btn-primary-clipped">
              Iniciar proyecto
            </a>
          </div>
        </div>

        {/* Las cards reutilizando tu clase .adon-card */}
        <div className="about-grid">
          {aboutData.map((item, index) => (
            <article key={index} className="adon-card">
              <span className="card-number">{item.id}</span>
              <h3 className="card-title-fixed">{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;