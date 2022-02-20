import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer" style={{ marginTop: "2rem" }}>
      <div id="links">
        <div className="ft-content">
          <h2 className="ft-left-title">Menu</h2>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/campaigns">
            Explore
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>

        <div className="ft-content">
          <h2 className="ft-left-title">Categories</h2>
          <Link className="link" to="/">
            Technology
          </Link>
          <Link className="link" to="/">
            Medicine
          </Link>
          <Link className="link" to="/">
            Education
          </Link>
          <Link className="link" to="/">
            Virtual
          </Link>
          <Link className="link" to="/">
            Other
          </Link>
        </div>

        <div className="ft-content">
          <h2 className="ft-left-title">About</h2>
          <Link className="link" to="/">
            Backing & Creating campaigns
          </Link>
          <Link className="link" to="/">
            Terms of Service
          </Link>
          <Link className="link" to="/">
            Help & Support
          </Link>
          <Link className="link" to="/">
            Trust & Safety
          </Link>
        </div>
      </div>

      <div className="ft-content ft-name-section">
        <h1>Greenlight</h1>
        <p>
          Boost the future generation. A project made for MIT Blueprint 2022.
        </p>
        <p style={{ marginTop: "2rem" }}>Enjoy the rest of your day!</p>
      </div>
    </div>
  );
}

export default Footer;
