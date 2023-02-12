import React from "react";
import "./product1.scss";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const scrollto = () => {
  const { width, height } = getWindowDimensions();
  window.scrollTo({
    top: height * 3,
    behavior: "smooth",
  });
};

export default function Product1() {
  return (
    <div className="product1">
      <div className="heading">Our Products for Pregnancy Monitoring</div>
      <div className="sub__heading">
        Quinproc offers a variety of customizable products for monitoring
        pregnancy and labor, including remote monitoring applications.
      </div>
      <div className="products">
        <div className="product__container">
          <div className="text__container">
            <div className="top__text">
              <div className="sno">01.</div>
              <div className="title"> Maatrtv</div>
            </div>
            <div className="bottom__text">
              Our pregnancy monitoring app is designed to provide expectant
              mothers with convenient and comprehensive prenatal care. The app
              uses advanced technology to track and monitor various aspects of
              pregnancy such as fetal growth, maternal health, and contractions.
            </div>
            <div className="more__button" onClick={() => scrollto()}>
              Know More
            </div>
          </div>
          <div className="image__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676184941/Quinproc/cut1_fo6dom.png"
              className="phone__pic"
            />
          </div>
        </div>

        <div className="product__container reverse">
          <div className="text__container put__end">
            <div className="top__text">
              <div className="sno">02.</div>
              <div className="title">Pregnancy Belt</div>
            </div>
            <div className="bottom__text rev">
              Our pregnancy monitoring belt provides expectant mothers with
              real-time information about their pregnancy. The belt uses
              advanced sensors to track and monitor various aspects of pregnancy
              such as fetal heart rate, uterine contractions, and maternal
              activity.
            </div>
            <div className="more__button" onClick={() => scrollto()}>
              Know More
            </div>
          </div>
          <div className="image__container__belt">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676186010/Quinproc/cut6_nez3md.png"
              className="belt__img"
              alt="product-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
