import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about">
      <div className="heading">Our Team at Quinproc</div>
      <div className="sub__heading">
        Here at Quinproc, we have a team of highly skilled and dedicated
        professionals from the fields of medicine, engineering, and business.
      </div>
      <div className="box__container">
        <div className="box__item">
          <div className="top__container">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Mirunalini Aaravindhan</div>
            <div className="position">FOUNDER & CEO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </div>

        <div className="box__item">
          <div className="top__container">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Shwetha Saravanan</div>
            <div className="position">FOUNDER & CEO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </div>

        <div className="box__item">
          <div className="top__container">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Varsha Sri Selvakumar</div>
            <div className="position">FOUNDER & CEO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </div>
      </div>
      <div className="dot__container">
        <div className="dot selected"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}
