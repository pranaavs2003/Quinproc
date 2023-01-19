import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="title">Quinproc</div>
        <div className="link__container">
          <span className="link__item">Home</span>
          <span className="link__item">Our Product</span>
          <span className="link__item">Features</span>
          <span className="link__item">About Us</span>
          <span className="link__item">Achievements</span>
          <span className="link__item">Contact</span>
        </div>
      </div>
    </div>
  );
}
