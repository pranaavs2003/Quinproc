import React from "react";
import "./product.scss";

export default function Product() {
  return (
    <div className="product">
      <div className="heading">Our Products for Pregnancy Monitoring</div>
      <div className="sub__heading">
        Quinproc offers a variety of customizable products for monitoring
        pregnancy and labor, including remote monitoring applications.
      </div>
      <div className="box__container">
        <div className="box__item">
          <div className="top__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676186010/Quinproc/cut6_nez3md.png"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Pregnancy Monitoring Belt</div>
            <div className="position">
              Wireless Belt to monitor fetal heart rate, uterine contractions
              and other vitals.
            </div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </div>

        <div className="box__item">
          <div className="top__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676184941/Quinproc/cut1_fo6dom.png"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Maartrtv</div>
            <div className="position">
              A Smartphone application to remotely monitor patient vitals, which
              can be used by doctors and patients.
            </div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </div>
      </div>
      {/* <div className="dot__container">
        <div className="dot selected"></div>
        <div className="dot"></div>
      </div> */}
    </div>
  );
}
