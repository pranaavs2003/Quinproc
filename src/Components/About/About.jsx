import React, { useState } from "react";
import "./about.scss";
import { motion } from "framer-motion";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function About() {
  const [pos, setPos] = useState(0);
  const { height, width } = getWindowDimensions();

  return (
    <div className="about">
      <div className="heading">Our Team at Quinproc</div>
      <div className="sub__heading">
        Here at Quinproc, we have a team of highly skilled and dedicated
        professionals from the fields of medicine, engineering, and business.
      </div>
      <motion.div className="box__container">
        {/* <motion.div className="box__item disapp">
          <div className="top__container">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container text-sm">
            <div className="name text-sm">Dr. John Sahaya Rani Alex</div>
            <div className="position">FOUNDER & CTO</div>
          </div>
        </motion.div> */}

        {/* 
        <motion.div className="box__item disapp">
          <div className="top__container">
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile-img"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Dr. Annis Fathima A</div>
            <div className="position">FOUNDER & CFO</div>
          </div>
        </motion.div> 
        */}

        <motion.div
          className="box__item app"
          animate={{
            x: pos === 1 ? width * 0.9 : 0,
          }}
          transition={{ type: "spring", stiffness: 30 }}
          style={{ display: pos === 1 ? "none" : "unset" }}
        >
          <div className="top__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674136075/Quinproc/photo_John_Sahaya_Rani_Alex_lqfier.jpg"
              alt="profile-img"
              className="obj-fit"
            />
          </div>
          <div className="bottom__container text-sm">
            <div className="name text-sm">Dr. John Sahaya Rani Alex</div>
            <div className="position">FOUNDER & CTO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </motion.div>

        <motion.div
          className="box__item app"
          animate={{
            x: pos === 1 ? width * 0.9 : 0,
          }}
          transition={{ type: "spring", stiffness: 30 }}
          style={{ display: pos === 1 ? "none" : "unset" }}
        >
          <div className="top__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674136072/Quinproc/Annis_Profile_slptza.jpg"
              alt="profile-img"
              className="obj-fit"
            />
          </div>
          <div className="bottom__container text-sm">
            <div className="name text-sm">Dr. John Sahaya Rani Alex</div>
            <div className="position">FOUNDER & CTO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </motion.div>

        <motion.div
          className="box__item"
          animate={{
            x: pos === 0 ? width * 0.9 : 0,
          }}
          transition={{ type: "spring", stiffness: 30 }}
          style={{ display: pos === 0 ? "none" : "unset" }}
        >
          <div className="top__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674651329/Quinproc/IMG_20221027_121223_z1oodi.jpg"
              alt="profile-img"
              className="obj-fit"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Mirunalini Aaravindhan</div>
            <div className="position">FOUNDER & CEO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </motion.div>

        <motion.div
          className="box__item"
          animate={{
            x: pos === 0 ? width * 0.9 : 0,
          }}
          transition={{ type: "spring", stiffness: 30 }}
          style={{ display: pos === 0 ? "none" : "unset" }}
        >
          <div className="top__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674652107/Quinproc/1670956396767_ahz1i9.jpg"
              alt="profile-img"
              className="obj-fit"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Shwetha Saravanan</div>
            <div className="position">FOUNDER & CEO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </motion.div>

        <motion.div
          className="box__item"
          animate={{
            x: pos === 0 ? width * 0.9 : 0,
          }}
          transition={{ type: "spring", stiffness: 30 }}
          style={{ display: pos === 0 ? "none" : "unset" }}
        >
          <div className="top__container">
            <img
              src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674651322/Quinproc/2022-12-31-09-00-30-914_pmqvvz.jpg"
              alt="profile-img"
              className="obj-fit"
            />
          </div>
          <div className="bottom__container">
            <div className="name">Varsha Sri Selvakumar</div>
            <div className="position">FOUNDER & CEO</div>
            {/* <div className="dept">B.Tech ECE</div> */}
          </div>
        </motion.div>

        {/* Put here */}

        {width < 700 && (
          <>
            <div className="box__item disapp">
              <div className="top__container">
                <img
                  src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674651329/Quinproc/IMG_20221027_121223_z1oodi.jpg"
                  alt="profile-img"
                />
              </div>
              <div className="bottom__container">
                <div className="name">Mirunalini Aaravindhan</div>
                <div className="position">FOUNDER & CEO</div>
              </div>
            </div>

            <div className="box__item disapp">
              <div className="top__container">
                <img
                  src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674652107/Quinproc/1670956396767_ahz1i9.jpg"
                  alt="profile-img"
                />
              </div>
              <div className="bottom__container">
                <div className="name">Shwetha Saravanan</div>
                <div className="position">FOUNDER & CEO</div>
              </div>
            </div>

            <div className="box__item disapp">
              <div className="top__container">
                <img
                  src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1674651322/Quinproc/2022-12-31-09-00-30-914_pmqvvz.jpg"
                  alt="profile-img"
                />
              </div>
              <div className="bottom__container">
                <div className="name">Varsha Sri Selvakumar</div>
                <div className="position">FOUNDER & CEO</div>
              </div>
            </div>
          </>
        )}
      </motion.div>
      <div className="dot__container">
        <div
          className={pos === 0 ? "dot selected" : "dot"}
          onClick={() => {
            setPos(0);
          }}
        ></div>
        <div
          className={pos === 1 ? "dot selected" : "dot"}
          onClick={() => {
            setPos(1);
          }}
        ></div>
      </div>
    </div>
  );
}

// animate={{
//   x: pos === 1 ? width * 0.9 : 0,
// }}
// transition={{ type: "spring", stiffness: 30 }}
