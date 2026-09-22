import { useState, useEffect } from 'react';
import HeroSkeleton from '../../skeletons/hero/HeroSkeleton';
import './Hero.css';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const fondoDesk = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790049591/hero_11zon_ebaaz2.webp";
  const fondoMov = "https://res.cloudinary.com/dmnksm3th/image/upload/v1790049592/hero-mob_11zon_rx2hot.webp";

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const imageToLoad = isMobile ? fondoMov : fondoDesk;

    const img = new Image();
    img.src = imageToLoad;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setIsImageLoaded(true);
  }, []);

  if (!isImageLoaded) {
    return <HeroSkeleton />;
  }

  return (
    <header 
      className="hero-section" 
      id="inicio"
      style={{
        '--bg-desktop': `url(${fondoDesk})`,
        '--bg-mobile': `url(${fondoMov})`
      }}
    >
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