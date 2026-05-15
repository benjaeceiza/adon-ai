
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero-section" id="inicio">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/videohero.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <span className="eyebrow fade-in">Software + Marketing + IA</span>
          <h1 className="slide-up">
            Impulsamos tu negocio con <span>estrategia digital.</span>
          </h1>
          <p className="fade-in-delayed">
            Software, marketing, contenido e inteligencia artificial trabajando
            juntos para ordenar tu marca y hacerla crecer.
          </p>
          <a className="btn-primary" href="#planes">
            Ver planes
          </a>
        </div>
      </div>
      
      <div className="bg-text">ADON.AI</div>
    </header>
  );
};

export default Hero;