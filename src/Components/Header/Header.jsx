import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="left__container">
          <div className="top__text">
            Innovative pregnancy monitoring, made simple.
          </div>
          <div className="bottom__text">
            Quinproc provides high-quality fetal and maternal monitoring
            solutions for use in hospitals or at home.
          </div>
        </div>
        <div className="right__container">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1675765085/Quinproc/Maatr_TV_R6-cut_h2zca7.png"
            alt="header-img"
            className="header__image"
          />
        </div>
      </div>
    </div>
  );
}

// F8DADD
