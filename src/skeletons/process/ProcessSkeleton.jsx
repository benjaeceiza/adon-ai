import React from 'react';
import './ProcessSkeleton.css';

const ProcessSkeleton = () => {
  return (
    <section className="skeleton-process-section">
      <div className="container">
        <div className="process-heading-skel">
          <div className="skeleton-shimmer skel-eyebrow-p"></div>
          <div className="skeleton-shimmer skel-title-p"></div>
          <div className="skeleton-shimmer skel-title-p short"></div>
        </div>

        <div className="process-grid-skel">
          {[...Array(4)].map((_, index) => (
            <article key={index} className="skeleton-adon-card-static">
              <div className="skeleton-shimmer skel-num-static"></div>
              <div className="skeleton-shimmer skel-card-title-static"></div>
              <div className="skeleton-shimmer skel-card-desc-static"></div>
              <div className="skeleton-shimmer skel-card-desc-static short"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSkeleton;