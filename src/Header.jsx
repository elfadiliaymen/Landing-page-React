import React from "react";


function Header(){
    return (
    <header className="header">
      <div className="container">

        <div className="logo">
          <h2>☀️ SolarVision</h2>
        </div>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="btn-primary">
          Get Started
        </button>

      </div>
    </header>
  );
}

export default Header;