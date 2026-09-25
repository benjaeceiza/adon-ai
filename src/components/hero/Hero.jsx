import './Hero.css';

const Hero = () => {
  // Tu imagen actual sirve como pantalla de carga instantánea
  const posterUrl = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790049591/hero_11zon_ebaaz2.webp";
  // Reemplazá esto por el link directo de tu video en Cloudinary
  const videoUrl = "https://res.cloudinary.com/dmnksm3th/video/upload/v1790294479/Videohero_b47dca.mp4"; 

  return (
    <header className="hero-section" id="inicio">
      
      {/* 
        Las 4 propiedades clave para que un video de fondo funcione:
        autoPlay: arranca solo
        loop: se repite infinito
        muted: OBLIGATORIO para que los navegadores permitan el autoPlay
        playsInline: OBLIGATORIO para que en iPhone no se abra en pantalla completa
      */}
      <video 
        className="hero-video"
        autoPlay 
        loop 
        muted 
        playsInline
        poster={posterUrl}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Tu overlay para oscurecer el video y que se lea el texto */}
      <div className="hero-overlay"></div>

      {/* Contenido original intacto */}
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow fade-in">Software + Marketing + IA</span>
          <h1 className="slide-up">
            Impulsamos tu negocio con <br/><span>estrategia digital.</span>
          </h1>
          <p className="fade-in-delayed">
            Software, marketing, contenido e inteligencia artificial trabajando
            juntos para ordenar tu marca y hacerla crecer.
          </p>
          <a className="btn-primary fade-in-delayed" href="#planes">
            Ver planes
          </a>
        </div>
      </div>
      
      <div className="bg-text">ADON.AI</div>
    </header>
  );
};

export default Hero;