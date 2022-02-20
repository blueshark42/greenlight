import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="nav-bar" style={{ marginTop: "0.5rem" }}>
      <div id="rocket-title">
        {/* <img src={logo} alt="loading..." width={50} height={50}></img> */}
        <h1>Greenlight</h1>
      </div>

      <div className="nav-options">
        <Link to="/">Home</Link>
        <Link to="/campaigns">Explore</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}

export default Header;
