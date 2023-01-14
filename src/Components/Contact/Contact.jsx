import React from 'react';
import "./contact.scss";

export default function Contact() {
  return (
    <div className='contact'>
        <div className="heading">Contact Us</div>
        <div className="sub__heading">Thank you for visiting our website. If you have any questions, comments, or suggestions, we would love to hear from you.</div>
        <div className="input__container">
            <input type="text" className='input__box' placeholder='First Name'/>
            <input type="text" className='input__box' placeholder='Last Name'/>
            <input type="text" className='input__box' placeholder='Email ID'/>
            <input type="text" className='input__box' placeholder='Contact Number'/>
            <button className='submit__button' >Submit</button>
        </div>
    </div>
  );
}
