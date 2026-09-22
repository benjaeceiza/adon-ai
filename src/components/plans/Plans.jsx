import { useState, useEffect } from 'react';
import PlansSkeleton from '../../skeletons/plans/PlansSkeleton';
import './Plans.css';

const plansData = [
  { label: 'PLAN INICIAL', title: 'Presencia Digital', desc: 'Ideal para marcas que necesitan ordenar su imagen, redes y comunicación básica.' },
  { label: 'PLAN RECOMENDADO', title: 'Ecosistema Digital', desc: 'Integra estrategia, contenido, campañas, web y herramientas para crecer con más estructura.' },
  { label: 'PLAN AVANZADO', title: 'Software + IA', desc: 'Pensado para negocios que buscan automatizar procesos y crear soluciones digitales a medida.' }
];

const Plans = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const fondoDesk = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044308/imagenplanes_11zon_de5ppi.webp";
  const fondoMov = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044415/fondo-planes-mob-clean_11zon_ujilqg.webp";

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const imageToLoad = isMobile ? fondoMov : fondoDesk;

    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);
  }, []);

  if (!isImageLoaded) {
    return <PlansSkeleton />;
  }

  return (
    <section 
      className="plans-section" 
      id="planes"
      style={{
        '--bg-desktop': `url(${fondoDesk})`,
        '--bg-mobile': `url(${fondoMov})`
      }}
    >
      <div className="plans-bg-overlay"></div>
      
      <div className="container">
        <div className="plans-top-wrapper">
          <div className="plans-text-content">
            <span className="eyebrow">Planes</span>
            <h2>Elegí el punto de partida para<br/>ordenar tu presencia digital.</h2>
            <p>
              Cada plan puede adaptarse según la etapa de tu marca, tus objetivos y las herramientas que necesitás implementar.
            </p>
          </div>
        </div>

        <div className="plans-grid">
          {plansData.map((plan, index) => (
            <article key={index} className="adon-card plans-static-card">
              <span className="card-number">{plan.label}</span>
              <h3 className="card-title-plans">{plan.title}</h3>
              <p>{plan.desc}</p>
              <a href="#contacto" className="btn-plan">Consultar</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;