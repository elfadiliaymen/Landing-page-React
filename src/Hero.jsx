import React from "react";


function Hero(){
    return (
    <section className="hero" id="home">

      <div className="hero-content">

        <span className="hero-badge">
          🌱 Clean Energy Solution
        </span>

        <h1>
          Power Your Home with Smart Solar Energy
        </h1>

        <p>
          Monitor your solar panels in real time, predict maintenance before
          problems occur, and reduce your electricity costs using AI-powered
          insights.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Get Started
          </button>

          <button className="btn-secondary">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/images/solar-hero.png"
          alt="Solar panels"
        />
      </div>

    </section>
  );
}

export default Hero;