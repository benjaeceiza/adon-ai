
import './Process.css';

const processData = [
  { id: '01', title: 'Diagnóstico', desc: 'Revisamos tu marca, canales, comunicación y oportunidades.' },
  { id: '02', title: 'Estrategia', desc: 'Definimos prioridades, mensajes, herramientas y acciones.' },
  { id: '03', title: 'Implementación', desc: 'Diseñamos, desarrollamos, configuramos y publicamos.' },
  { id: '04', title: 'Optimización', desc: 'Medimos resultados y mejoramos lo que sea necesario.' },
];

const Process = () => {
  return (
    <section className="process-section" id="proceso">
      {/* Capa oscura para la foto de fondo de la oficina/monitores */}
      <div className="process-bg-overlay"></div>
      
      <div className="container">
        <div className="section-heading process-heading">
          <span className="eyebrow">Proceso</span>
          {/* El salto de línea <br/> clave para que quede igual a la foto */}
          <h2>Una ruta simple para avanzar<br/>con orden.</h2>
        </div>

        <div className="process-grid">
          {processData.map((item, index) => (
            <article key={index} className="adon-card">
              <span className="card-number">{item.id}</span>
              {/* Le agregamos una clase para dejar el título bien bonito */}
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