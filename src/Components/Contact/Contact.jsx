import React, { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const testEmail = "pranaavs2003@gmail.com";
  const quinprocEmail = "info@quinproc.co.in";
  const emailSubject = "Test Subject";
  const emailBody = "Test Body";

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
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input__box"
          placeholder="Email ID"
          name="emailid"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="input__box"
          placeholder="Contact Number"
          name="contactnumber"
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text"
          className="input__box"
          placeholder="Message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="submit__button"
          type="submit"
          value="Send"
          onClick={() => setIsSubmit(true)}
        >
          {/* <a
            href="mailto:`{testEmail}`?subject={emailSubject}&body={emailBody}"
            to="#"
            className="link"
          > */}
          Submit
          {/* </a> */}
        </button>
        {isSubmit && (
          <div
            className="form__submit"
            style={{ color: " rgb(235, 184, 184)" }}
          >
            Your form has been submitted successfully.
            {/* {name + email + number + message} */}
          </div>
        )}
        {/* </form> */}
      </div>
    </div>
  );
}
