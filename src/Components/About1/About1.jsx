import React from "react";
import "./about1.scss";

export default function About1() {
  return (
    <div className="about1">
      <div className="heading">Our Team at Quinproc</div>
      <div className="sub__heading">
        Here at Quinproc, we have a team of highly skilled and dedicated
        professionals from the fields of medicine, engineering, and business.
      </div>
      <div className="all__container">
        <div className="team__container">
          <div className="member__container">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676184941/Quinproc/cut3_hdq3cn.jpg"
                alt="profile-img"
                className="profile__img"
              />
            </div>
            <div className="detail__container">
              <div className="name__container">
                <a
                  href="https://chennai.vit.ac.in/member/dr-john-sahaya-rani-alex/"
                  className="link"
                  target="_blank"
                >
                  Dr. John Sahaya Rani Alex
                </a>
              </div>
              <div className="title__container">FOUNDER & CTO</div>
            </div>
          </div>

          <div className="member__container">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674136072/Quinproc/Annis_Profile_slptza.jpg"
                alt="profile-img"
                className="profile__img"
              />
            </div>
            <div className="detail__container">
              <div className="name__container">
                <a
                  className="link"
                  href="https://chennai.vit.ac.in/member/dr-annis-fathima-a/"
                  target="_blank"
                >
                  Dr. Annis Fathima
                </a>
              </div>
              <div className="title__container">FOUNDER & CFO</div>
            </div>
          </div>
        </div>

        <div className="team__container">
          <div className="member__container">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676184940/Quinproc/cut2_cbgnmf.jpg"
                alt="profile-img"
                className="profile__img"
              />
            </div>
            <div className="detail__container">
              <div className="name__container">
                <a
                  className="link"
                  target="_blank"
                  href="https://www.linkedin.com/in/mirunalini-aravindan-349456191?originalSubdomain=in"
                >
                  Mirunalini Aravindan
                </a>
              </div>
              <div className="title__container">FOUNDER & CEO</div>
            </div>
          </div>

          <div className="member__container">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1676184941/Quinproc/cut4_cqo5ho.jpg"
                alt="profile-img"
                className="profile__img"
              />
            </div>
            <div className="detail__container">
              <div className="name__container">
                <a
                  className="link"
                  target="_blank"
                  href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADEuvREB1m_7Sv_FlM9129ynFBN-ySyjd2k&keywords=shwetha%20saravanan&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=224107f3-939c-4c93-9dd5-257956dd7434&sid=*_S"
                >
                  Shwetha Saravanan
                </a>
              </div>
              <div className="title__container">FOUNDER & CEO</div>
            </div>
          </div>

          <div className="member__container">
            <div className="img__container">
              <img
                src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674651322/Quinproc/2022-12-31-09-00-30-914_pmqvvz.jpg"
                alt="profile-img"
                className="profile__img"
              />
            </div>
            <div className="detail__container">
              <div className="name__container">
                <a
                  className="link"
                  target="_blank"
                  href="https://www.linkedin.com/in/varsha-sri-selvakumar-5b516b177/"
                >
                  Varsha Sri Selvakumar
                </a>
              </div>
              <div className="title__container">FOUNDER & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
