// components/SectionDivider/SectionDivider.jsx
import React from 'react';
import './SectionDivider.css';

const SectionDivider = ({ words }) => (
  <section className="section-divider">
    <div className="container">
      <h2 className="divider-title">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <span className="divider-word">{word}</span>
            {index < words.length - 1 && <span className="divider-line">|</span>}
          </React.Fragment>
        ))}
      </h2>
    </div>
  </section>
);

export default SectionDivider;