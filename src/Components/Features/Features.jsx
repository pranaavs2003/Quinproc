import React from "react";
import "./features.scss";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

export default function Features() {
  return (
    <div className="features">
      <div className="title">Redefining Fetal monitoring</div>
      <div className="sub__title">
        Engineering the next generation of healthcare with our innovative
        products.
      </div>
      <div className="features__container">
        <div className="left__container">
          {/* (1,1) feature box */}
          <div className="feature__box feature__box__offset__right">
            <div className="top__container">
              <SystemSecurityUpdateGoodIcon className="tile-icon" />
              <span className="box__title">Distant Monitoring</span>
            </div>
            <div className="description__container">
              Doctors can access the data remotely on their phones to take the
              right decision at the right time.
            </div>
          </div>

          {/* (2,1) feature box */}
          <div className="feature__box">
            <div className="top__container">
              <PregnantWomanIcon className="tile-icon" />
              <span className="box__title">Comfort Care</span>
            </div>
            <div className="description__container">
              Wireless & compact devices to improve the mother’s experience
              during monitoring.
            </div>
          </div>
        </div>
        <div className="middle__container">
          {/* <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1675765849/Quinproc/zyro-image-1-cut-min_1_1_rckq7z.png"
            alt="preg-women"
          /> */}
        </div>
        <div className="left__container">
          {/* (1,2) feature box */}
          <div className="feature__box feature__box__offset__left">
            <div className="top__container">
              <CheckCircleOutlineIcon className="tile-icon" />
              <span className="box__title">Automated Analysis</span>
            </div>
            <div className="description__container">
              Save time and improve decision-making with our auto-generated
              interpretation.
            </div>
          </div>

          {/* (2,2) feature box */}
          <div className="feature__box">
            <div className="top__container">
              <HealthAndSafetyIcon className="tile-icon" />
              <span className="box__title">Data Security</span>
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
