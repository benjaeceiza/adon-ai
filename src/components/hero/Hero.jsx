import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const posterDesk = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790049591/hero_11zon_ebaaz2.webp";
  const videoDesk = "https://res.cloudinary.com/dmnksm3th/video/upload/v1790294479/Videohero_b47dca.mp4"; 
  
  const posterMob = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790049592/hero-mob_11zon_rx2hot.webp";
  const videoMob = "https://res.cloudinary.com/dmnksm3th/video/upload/v1790798699/Video_Adon.Ai_4K_rcc3rj.mp4"; 

  const [videoSrc, setVideoSrc] = useState(videoDesk);
  const [posterSrc, setPosterSrc] = useState(posterDesk);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(videoMob);
        setPosterSrc(posterMob);
      } else {
        setVideoSrc(videoDesk);
        setPosterSrc(posterDesk);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="hero-section" id="inicio">
      <video 
        key={videoSrc}
        className="hero-video"
        autoPlay 
        loop 
        muted 
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

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
          
          <div className="hero-buttons fade-in-delayed">
            <a className="btn-primary" href="#planes">
              Ver planes
            </a>
            <a className="btn-secondary" href="https://res.cloudinary.com/dmnksm3th/image/upload/v1790799352/Adon.AI_r0o7vd.pdf" target="_blank" rel="noopener noreferrer">
               Brochure
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-text">ADON.AI</div>
    </header>
  );
};

export default Hero;