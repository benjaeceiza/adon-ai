// src/skeletons/AboutSkeleton.jsx

import './AboutSkeleton.css';
// Asume que .container, .about-top-wrapper, y .about-grid vienen de tus estilos globales o About.css

const AboutSkeleton = () => {
  return (
    <section className="skeleton-section">
      <div className="container">
        <div className="about-top-wrapper">
          <div className="about-text-content" style={{ width: '100%', maxWidth: '600px' }}>
            <div className="skeleton-shimmer skel-eyebrow"></div>
            <div className="skeleton-shimmer skel-title"></div>
            <div className="skeleton-shimmer skel-title short"></div>
            
            <div className="skeleton-shimmer skel-p"></div>
            <div className="skeleton-shimmer skel-p"></div>
            <div className="skeleton-shimmer skel-p short"></div>
            
            <div className="skeleton-shimmer skel-btn"></div>
          </div>
        </div>

        <div className="about-grid">
          {[...Array(4)].map((_, index) => (
            <article key={index} className="skeleton-card">
              <div className="skeleton-shimmer skel-card-num"></div>
              <div className="skeleton-shimmer skel-card-title"></div>
              <div className="skeleton-shimmer skel-card-title short"></div>
              <br/>
              <div className="skeleton-shimmer skel-card-desc"></div>
              <div className="skeleton-shimmer skel-card-desc"></div>
              <div className="skeleton-shimmer skel-card-desc short"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;