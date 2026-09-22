import React from 'react';
import './HeroSkeleton.css';

const HeroSkeleton = () => {
  return (
    <section className="skeleton-hero-section">
      <div className="skeleton-hero-overlay"></div>
      <div className="container">
        <div className="hero-content-skel">
          <div className="skeleton-shimmer skel-hero-eyebrow"></div>
          <div className="skeleton-shimmer skel-hero-title"></div>
          <div className="skeleton-shimmer skel-hero-title short"></div>
          <div className="skel-hero-p-wrapper">
            <div className="skeleton-shimmer skel-hero-p"></div>
            <div className="skeleton-shimmer skel-hero-p"></div>
            <div className="skeleton-shimmer skel-hero-p short"></div>
          </div>
          <div className="skeleton-shimmer skel-hero-btn"></div>
        </div>
      </div>
      <div className="skeleton-shimmer skel-bg-text"></div>
    </section>
  );
};

export default HeroSkeleton;