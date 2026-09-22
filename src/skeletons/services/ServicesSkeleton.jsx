import React from 'react';
import './ServicesSkeleton.css';

const ServicesSkeleton = () => {
  return (
    <section className="skeleton-services-section">
      <div className="container">
        <div className="services-heading-skel">
          <div className="skeleton-shimmer skel-eyebrow-srv"></div>
          <div className="skeleton-shimmer skel-title-srv"></div>
          <div className="skeleton-shimmer skel-title-srv short"></div>
          <div className="skeleton-shimmer skel-desc-srv"></div>
          <div className="skeleton-shimmer skel-desc-srv short"></div>
        </div>

        <div className="services-grid-skel">
          {[...Array(4)].map((_, index) => (
            <article key={index} className="skeleton-adon-card-static">
              <div className="skel-top-header">
                <div className="skeleton-shimmer skel-num-static"></div>
                <div className="skeleton-shimmer skel-icon-static"></div>
              </div>
              <div className="skeleton-shimmer skel-card-title-static"></div>
              <div className="skeleton-shimmer skel-card-title-static short-title"></div>
              <div className="skel-desc-wrapper">
                <div className="skeleton-shimmer skel-card-desc-static"></div>
                <div className="skeleton-shimmer skel-card-desc-static"></div>
                <div className="skeleton-shimmer skel-card-desc-static short"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSkeleton;