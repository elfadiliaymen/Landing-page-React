import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-card">

          <div className="hero-text">
            <h1 className="hero-title">Power your home with smart solar energy</h1>
            <p className="hero-desc">
              Monitor your solar panels in real time and predict maintenance
              before problems occur. Reduce your electricity costs using
              AI-powered insights.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Start</a>
              <a href="#about" className="btn-secondary">Learn</a>
            </div>
          </div>

          <div className="hero-image">
            <img src="public/ashes-sitoula-UfEyDdXlRp8-unsplash.jpg" alt="Hero" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;