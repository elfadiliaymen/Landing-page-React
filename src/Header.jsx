import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        <a href="#home" className="logo">SolarVision</a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Resources</a>
        </nav>

        <a href="#contact" className="btn-primary">Start</a>

      </div>
    </header>
  );
}

export default Header;