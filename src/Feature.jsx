import React from "react";

function Feature({ feature }) {
  return (
    <div className="feature-card">

      <div className="feature-content">

        <span className="feature-label">
          {feature.label}
        </span>

        <h3 className="feature-title">
          {feature.title}
        </h3>

        <p className="feature-desc">
          {feature.desc}
        </p>

        <a href="#about" className="feature-link">
          Explore ›
        </a>

      </div>

      <div className="feature-image">

        <img
          src={feature.image}
          alt={feature.title}
        />

      </div>

    </div>
  );
}

export default Feature;