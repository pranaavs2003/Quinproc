import React, { useState } from "react";
import "./features1.scss";
import { motion } from "framer-motion";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function Features1() {
  const [current, setCurrent] = useState(0);

  const content = [
    "Remote access to health data on doctors' and patient's phones allows them to make informed decisions in real-time just with a click of a button. With the ability to remotely monitor patients, doctors can respond quickly and provide timely care, even when they are not physically present. ",
    "Compact and wireless devices are designed to enhance the monitoring experience for mothers by providing convenient and comfortable access to vital health information. These devices are compact, lightweight, and can be easily carried anywhere, making them ideal for on-the-go monitoring.",
    "Our auto-generated interpretation feature saves time and improves decision-making by providing instant and accurate analysis. This eliminates the need for manual data interpretation, freeing up valuable time for healthcare professionals and enabling them to make decisions efficiently.",
    "In Quinproc, Our produts offers top-notch privacy and security features to our customers. Our product has been rigorously tested and validated by prestigious hospitals, ensuring its clinical accuracy and effectiveness. The data is encrypted and stored in cloud storage to offer maximum security. ",
  ];

  return (
    <div className="features1">
      <div className="title">Redefining Fetal monitoring</div>
      <div className="sub__title">
        Engineering the next generation of healthcare with our innovative
        products.
      </div>
      <div className="features">
        <div className="left__container">
          <div className="feature__list">
            <div
              className="feature__item"
              onClick={() => setCurrent(0)}
              onMouseEnter={() => setCurrent(0)}
            >
              <span className="item__icon">
                <SystemSecurityUpdateGoodIcon className="tile-icon" />
              </span>
              <span className="item__text">Distant Monitoring</span>
            </div>

            <div
              className="feature__item"
              onClick={() => setCurrent(1)}
              onMouseEnter={() => setCurrent(1)}
            >
              <span className="item__icon">
                <PregnantWomanIcon className="tile-icon" />
              </span>
              <span className="item__text">Comfort Care</span>
            </div>

            <div
              className="feature__item"
              onClick={() => setCurrent(2)}
              onMouseEnter={() => setCurrent(2)}
            >
              <span className="item__icon">
                <CheckCircleOutlineIcon className="tile-icon" />
              </span>
              <span className="item__text">Automated Analysis</span>
            </div>

            <div
              className="feature__item"
              onClick={() => setCurrent(3)}
              onMouseEnter={() => setCurrent(3)}
            >
              <span className="item__icon">
                <HealthAndSafetyIcon className="tile-icon" />
              </span>
              <span className="item__text">Data Security</span>
            </div>
          </div>
          <motion.div className="feature__text">{content[current]}</motion.div>
        </div>
        <div className="right__container">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1675765849/Quinproc/zyro-image-1-cut-min_1_1_rckq7z.png"
            alt="mother-img"
          />
        </div>
      </div>
    </div>
  );
}
