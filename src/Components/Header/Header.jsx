import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="left__container">
          <div className="top__text">
            Pregnancy Monitoring Made Easy & Affordable
          </div>
          <div className="bottom__text">
            Quinproc provides high-quality fetal and maternal monitoring
            solutions for use in hospitals or at home.
          </div>
        </div>
        <div className="right__container">
          <img
            src="https://help.apple.com/assets/634D93C867B48F12442A1784/634D93C967B48F12442A1792/en_US/d8f1780744a29c11cd65b04c9d4047d3.png"
            alt="header-img"
            className="header__image"
          />
        </div>
      </div>
    </div>
  );
}

// F8DADD
