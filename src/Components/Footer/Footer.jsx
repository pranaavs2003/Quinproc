import React from "react";
import "./footer.scss";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="top__items">
          <div className="top__container">Quinproc</div>
          <div className="middle__container">
            <div className="icons__list">
              <a
                className="link"
                href="https://www.linkedin.com/in/quinproc-llp-866314246/?originalSubdomain=in"
              >
                <LinkedInIcon className="icon__item" />
              </a>
              <a
                className="link"
                href="https://chennai.vit.ac.in/vit-won-swadeshi-microprocessor-challenge-2021/"
              >
                <LanguageIcon className="icon__item" />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom__container">Ⓒ Quinproc, All Rights Reserved</div>
      </div>
    </div>
  );
}
