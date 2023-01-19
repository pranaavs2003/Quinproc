import React from 'react';
import "./article.scss";

export default function Article() {
  return (
    <div className='article'>
        <div className="left__container">
            Our Innovations have won numerous Awards & Recognition
        </div>
        <div className="right__container">
            <div className="news__box">
                <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674136099/Quinproc/InShot_20211213_124116290_qdjofc.jpg" alt="news-img" />
                <div className='news__description' >
                    VIT team wins Rs.20 lakh in Swadeshi Microprocessor Challenge contest
                </div>
            </div>
        </div>
    </div>
  );
}
