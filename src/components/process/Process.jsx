import { useState, useEffect } from 'react';
import ProcessSkeleton from '../../skeletons/process/ProcessSkeleton';
import './Process.css';

const processData = [
  { id: '01', title: 'Diagnóstico', desc: 'Revisamos tu marca, canales, comunicación y oportunidades.' },
  { id: '02', title: 'Estrategia', desc: 'Definimos prioridades, mensajes, herramientas y acciones.' },
  { id: '03', title: 'Implementación', desc: 'Diseñamos, desarrollamos, configuramos y publicamos.' },
  { id: '04', title: 'Optimización', desc: 'Medimos resultados y mejoramos lo que sea necesario.' }
];

const Process = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const fondoDesk = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044295/imagenproceso_11zon_pt93ef.webp";
  const fondoMov = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790044416/fondo-proceso-mob-clean_11zon_rngpql.webp";

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const imageToLoad = isMobile ? fondoMov : fondoDesk;

    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);
  }, []);

  if (!isImageLoaded) {
    return <ProcessSkeleton />;
  }

  return (
    <section 
      className="process-section" 
      id="proceso"
      style={{
        '--bg-desktop': `url(${fondoDesk})`,
        '--bg-mobile': `url(${fondoMov})`
      }}
    >
      <div className="process-bg-overlay"></div>
      
      <div className="container">
        <div className="process-heading">
          <span className="eyebrow">Proceso</span>
          <h2>Una ruta simple para avanzar<br/>con orden.</h2>
        </div>

        <div className="process-grid">
          {processData.map((item) => (
            <article key={item.id} className="adon-card process-static-card">
              <span className="card-number">{item.id}</span>
              <h3 className="card-title-process">{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;