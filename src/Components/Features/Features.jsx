import React from "react";
import "./features.scss";

export default function Features() {
  return (
    <div className="features">
      <div className="title">A New Age Fetal-Maternal Monitoring System</div>
      <div className="sub__title">
        Designed with 2 years of research in collaboration with mothers,
        gynecologists, nurses and other stakeholder.
      </div>
      <div className="features__container">
        <div className="left__container">
          {/* (1,1) feature box */}
          <div className="feature__box feature__box__offset__right">
            <div className="top__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286735/Quinproc/ic3_t3rlsl.svg"
                alt="icon"
              />
              <span className="box__title">Remote Monitoring</span>
            </div>
            <div className="description__container">
              Doctors can access the data remotely on their phones to take the
              right decision at the right time.
            </div>
          </div>

          {/* (2,1) feature box */}
          <div className="feature__box">
            <div className="top__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286727/Quinproc/ic1_ucgjaw.svg"
                alt="icon"
              />
              <span className="box__title">Patient Comfort</span>
            </div>
            <div className="description__container">
              Wireless & compact devices to improve the mother’s experience
              during monitoring.
            </div>
          </div>
        </div>
        <div className="middle__container">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673285410/Quinproc/cut1_jybqli.png"
            alt="preg-women"
          />
        </div>
        <div className="left__container">
          {/* (1,2) feature box */}
          <div className="feature__box feature__box__offset__left">
            <div className="top__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286730/Quinproc/ic2_yygllk.svg"
                alt="icon"
              />
              <span className="box__title">Auto Interpretation</span>
            </div>
            <div className="description__container">
              Save time and improve decision-making with our auto-generated
              interpretation.
            </div>
          </div>

          {/* (2,2) feature box */}
          <div className="feature__box">
            <div className="top__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286737/Quinproc/ic4_x48do4.jpg"
                alt="icon"
              />
              <span className="box__title">Privacy & Safety</span>
            </div>
            <div className="description__container">
              User information are encrypted and securely stored in cloud
              servers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
