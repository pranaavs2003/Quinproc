import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  
  return (
    <div className="contact">
      <div className="heading">Contact Us</div>
      <div className="sub__heading">
        Thank you for visiting our website. If you have any questions, comments,
        or suggestions, we would love to hear from you.
      </div>
      <div className="input__container">
        {/* <form
          action="mailto:pranaavs2003@gmail.com"
          method="post"
          enctype="text/plain"
        > */}
        <input
          type="text"
          className="input__box"
          placeholder="First Name"
          name="fname"
        />
        <input
          type="text"
          className="input__box"
          placeholder="Last Name"
          name="lname"
        />
        <input
          type="text"
          className="input__box"
          placeholder="Email ID"
          name="emailid"
        />
        <input
          type="text"
          className="input__box"
          placeholder="Contact Number"
          name="contactnumber"
        />
        <button className="submit__button" type="submit" value="Send" onClick={() => setIsSubmit(true)}>
          Submit
        </button>
        {isSubmit && <div className="form__submit" style={{color: " rgb(235, 184, 184)"}}>Your form has been submitted successfully.</div>}
        {/* </form> */}
      </div>
    </div>
  );
}
