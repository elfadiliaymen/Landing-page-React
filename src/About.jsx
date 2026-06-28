import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">

        <div>
          <span className="about-label">Platform</span>
          <h2 className="about-title">About SolarVision</h2>
          <p className="about-desc">
            We built this platform for homeowners, businesses, and solar
            providers who want more from their systems. Artificial intelligence
            and real-time monitoring work together to maximize your energy
            production while cutting maintenance costs.
          </p>
        <div className="about-buttons">
    <a href="#contact" className="btn-primary">
        Learn
    </a>

    <a href="#features" className="btn-secondary">
        Explore ›
    </a>
</div>
        </div>

        <div className="about-image">
          <img src="/public/benjamin-jopen-2SfssudtyIA-unsplash.jpg" alt="About SolarVision" />
        </div>

      </div>
    </section>
  );
}

export default About;