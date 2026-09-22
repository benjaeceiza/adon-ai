import React from 'react';
import './FooterSkeleton.css';

const FooterSkeleton = () => {
  return (
    <footer className="skeleton-footer-section">
      <div className="container skeleton-footer-content">
        <div className="skel-footer-col">
          <div className="skel-footer-brand-header">
            <div className="skeleton-shimmer skel-footer-brand-icon"></div>
            <div className="skeleton-shimmer skel-footer-logo-text"></div>
          </div>
          <div className="skeleton-shimmer skel-footer-text"></div>
          <div className="skeleton-shimmer skel-footer-text"></div>
          <div className="skeleton-shimmer skel-footer-text short"></div>
          <div className="skel-social-links">
            <div className="skeleton-shimmer skel-social-icon"></div>
            <div className="skeleton-shimmer skel-social-icon"></div>
            <div className="skeleton-shimmer skel-social-icon"></div>
          </div>
        </div>

        <div className="skel-footer-col">
          <div className="skeleton-shimmer skel-footer-title"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
        </div>

        <div className="skel-footer-col">
          <div className="skeleton-shimmer skel-footer-title"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
          <div className="skeleton-shimmer skel-footer-link"></div>
        </div>

        <div className="skel-footer-col">
          <div className="skeleton-shimmer skel-footer-title"></div>
          <div className="skeleton-shimmer skel-footer-text"></div>
          <div className="skeleton-shimmer skel-footer-text short"></div>
          <div className="skeleton-shimmer skel-footer-btn"></div>
        </div>
      </div>
      
      <div className="skeleton-footer-bottom">
        <div className="container skeleton-footer-bottom-flex">
          <div className="skeleton-shimmer skel-bottom-text"></div>
          <div className="skeleton-shimmer skel-bottom-text"></div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSkeleton;