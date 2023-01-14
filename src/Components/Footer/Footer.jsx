import React from 'react';
import "./footer.scss";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className="top__items">
                <div className="top__container">Quinproc</div>
                <div className="middle__container">
                    <div className="icons__list">
                        <TwitterIcon className='icon__item' />
                        <InstagramIcon className='icon__item' />
                        <LinkedInIcon className='icon__item' />
                    </div>
                </div>
            </div>
            <div className="bottom__container">
                Ⓒ Quinproc, All Rights Reserved
            </div>
        </div>
    </div>
  );
}
