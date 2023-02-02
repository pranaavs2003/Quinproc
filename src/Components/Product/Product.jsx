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
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674141454/Quinproc/prod_ubxiki.png"
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
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674151211/Quinproc/d8f1780744a29c11cd65b04c9d4047d3_ectqbu.png"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container">
            <div className="name">MaartrTV</div>
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
