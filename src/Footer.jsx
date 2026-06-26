import React from "react";


function Footer(){
    return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h3>☀️ SolarVision</h3>

          <p>
            Smart solar energy solutions powered by artificial intelligence.
          </p>
        </div>

        <div>
          <h4>Company</h4>

          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div>
          <h4>Resources</h4>

          <a href="#">Documentation</a>
          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">FAQ</a>
        </div>

        <div>
          <h4>Follow Us</h4>

          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 SolarVision. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;