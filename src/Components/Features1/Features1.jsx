import React, {useState} from "react";
import "./features1.scss";

export default function Features1() {
    const [current, setCurrent] = useState(0);

    const content = [
        "Lorem-1 ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eaque dicta quis, omnis harum nemo fugit error, odio deleniti consectetur adipisci a quos voluptate quibusdam sunt. Rem quam omnis et.",
        "Lorem-2 ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eaque dicta quis, omnis harum nemo fugit error, odio deleniti consectetur adipisci a quos voluptate quibusdam sunt. Rem quam omnis et.",
        "Lorem-3 ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eaque dicta quis, omnis harum nemo fugit error, odio deleniti consectetur adipisci a quos voluptate quibusdam sunt. Rem quam omnis et.",
        "Lorem-4 ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eaque dicta quis, omnis harum nemo fugit error, odio deleniti consectetur adipisci a quos voluptate quibusdam sunt. Rem quam omnis et."
    ];

  return(
    <div className="features1">
      <div className="title">A New Age Fetal-Maternal Monitoring System</div>
      <div className="sub__title">
        Designed with 2 years of research in collaboration with mothers,
        gynecologists, nurses and other stakeholder.
      </div>
      <div className="features">
        <div className="left__container">
            <div className="feature__list">

                <div className="feature__item" onClick={() => setCurrent(0)}
                    onMouseEnter={() => setCurrent(0)}
                >
                    <span className="item__icon">
                        <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286735/Quinproc/ic3_t3rlsl.svg" alt="item-icon" />
                    </span>
                    <span className="item__text">Remote Monitoring</span>
                </div>

                <div className="feature__item" onClick={() => setCurrent(1)} onMouseEnter={() => setCurrent(1)}
                >
                    <span className="item__icon">
                        <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286727/Quinproc/ic1_ucgjaw.svg" alt="item-icon" />
                    </span>
                    <span className="item__text">Patient Comfort</span>
                </div>

                <div className="feature__item" onClick={() => setCurrent(2)}
                onMouseEnter={() => setCurrent(2)}
                >
                    <span className="item__icon">
                        <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286730/Quinproc/ic2_yygllk.svg" alt="item-icon" />
                    </span>
                    <span className="item__text">Auto Interpretation</span>
                </div>

                <div className="feature__item" onClick={() => setCurrent(3)}
                onMouseEnter={() => setCurrent(3)}
                >
                    <span className="item__icon">
                        <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673286737/Quinproc/ic4_x48do4.jpg" alt="item-icon" />
                    </span>
                    <span className="item__text">Privacy & Safety</span>
                </div>

            </div>
            <div className="feature__text">
                {
                    content[current]
                }
            </div>
        </div>
        <div className="right__container">
            <img src="https://res.cloudinary.com/dbzzj25vc/image/upload/v1673285410/Quinproc/cut1_jybqli.png" alt="mother-img" />
        </div>
      </div>
    </div>
  );
}
