import React from 'react';
import './PlansSkeleton.css';

const PlansSkeleton = () => {
  return (
    <section className="skeleton-plans-section">
      <div className="container">
        <div className="plans-heading-skel">
          <div className="skeleton-shimmer skel-eyebrow-plans"></div>
          <div className="skeleton-shimmer skel-title-plans"></div>
          <div className="skeleton-shimmer skel-title-plans short"></div>
          <div className="skeleton-shimmer skel-desc-plans"></div>
          <div className="skeleton-shimmer skel-desc-plans short"></div>
        </div>

        <div className="plans-grid-skel">
          {[...Array(3)].map((_, index) => (
            <article key={index} className="skeleton-adon-card-static">
              <div className="skeleton-shimmer skel-num-static"></div>
              <div className="skeleton-shimmer skel-card-title-static"></div>
              <div className="skeleton-shimmer skel-card-desc-static"></div>
              <div className="skeleton-shimmer skel-card-desc-static"></div>
              <div className="skeleton-shimmer skel-card-desc-static short"></div>
              <div className="skeleton-shimmer skel-btn-static"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSkeleton;