import React from "react";
import "./navbar.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const scroll1 = (lvl) => {
  const { height } = getWindowDimensions();
  window.scrollTo({
    top: lvl > 1 ? height * (lvl + 1) : height * lvl,
    behavior: "smooth",
  });
};

// top: height * 0.95 * lvl + lvl * 0.025 * height,

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        {/* <div className="title">Quinproc</div> */}
        <img
          src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676186010/Quinproc/cut7_br3dcg.png"
          alt="logo-img"
          className="logo__img"
          onClick={() => scroll1(0)}
        />
        <div className="link__container">
          <span className="link__item" onClick={() => scroll1(1)}>
            Our Product
          </span>
          <span className="link__item" onClick={() => scroll1(2)}>
            Features
          </span>
          <span className="link__item" onClick={() => scroll1(3)}>
            About Us
          </span>
          <span className="link__item" onClick={() => scroll1(4)}>
            Achievements
          </span>
          <span className="link__item" onClick={() => scroll1(5)}>
            Contact
          </span>
        </div>
      </div>
    </div>
  );
}
