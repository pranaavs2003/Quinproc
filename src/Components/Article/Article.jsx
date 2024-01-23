import React from "react";
import "./article.scss";

export default function Article() {
  return (
    <div className="article">
      <div className="left__container">
        Our Innovations have won numerous Awards & Recognition
        <div className="cert" >
          
          <div className="cert_logo" >
            <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1699255758/Quinproc/vcf6pdsbwxsqufrufrpz.png" alt="DPIIT-cert" />
          </div>

          <div className="text" >
          We are recognized by the Department for Promotions of Industry and Internal Trade
          </div>

        </div>
      </div>
      <div className="right__container">
        <div className="news__box">
          <img
            src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676185115/Quinproc/cut5_apiaq2.jpg"
            alt="news-img"
          />
          <div className="news__description">
            VIT team wins Rs.20 lakh in Swadeshi Microprocessor Challenge
            contest
          </div>
        </div>
      </div>
    </div>
  );
}
