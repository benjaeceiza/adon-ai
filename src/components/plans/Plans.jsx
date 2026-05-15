
import './Plans.css';

// Puse los labels en mayúscula para que queden exactos a la imagen
const plansData = [
  { label: 'PLAN INICIAL', title: 'Presencia Digital', desc: 'Ideal para marcas que necesitan ordenar su imagen, redes y comunicación básica.' },
  { label: 'PLAN RECOMENDADO', title: 'Ecosistema Digital', desc: 'Integra estrategia, contenido, campañas, web y herramientas para crecer con más estructura.' },
  { label: 'PLAN AVANZADO', title: 'Software + IA', desc: 'Pensado para negocios que buscan automatizar procesos y crear soluciones digitales a medida.' },
];

const Plans = () => {
  return (
    <section className="plans-section" id="planes">
      <div className="plans-bg-overlay"></div>
      
      <div className="container">
        {/* Contenedor superior para alinear a la izquierda */}
        <div className="plans-top-wrapper">
          <div className="plans-text-content">
            <span className="eyebrow">Planes</span>
            {/* El salto de línea <br/> exacto de la foto */}
            <h2>Elegí el punto de partida para<br/>ordenar tu presencia digital.</h2>
            <p>
              Cada plan puede adaptarse según la etapa de tu marca, tus objetivos y las herramientas que necesitás implementar.
            </p>
          </div>
        </div>

        <div className="plans-grid">
          {plansData.map((plan, index) => (
            // Usamos la clase global .adon-card sin modificaciones raras
            <article key={index} className="adon-card">
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