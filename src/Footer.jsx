import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <a href="#home" className="footer-logo">SolarVision</a>

        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="#about">Careers</a>
          <a href="#about">Documentation</a>
        </nav>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 SolarVision. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Privacy policy</a>
            <a href="#home">Terms of service</a>
            <a href="#home">Cookies settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;