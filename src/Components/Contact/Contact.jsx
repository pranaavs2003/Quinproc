import React, { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

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
  const form = useRef();

  // const sendEmail = () => {
  //   //e.preventDefault();
  //   const emailData = {
  //     name: name,
  //     email: email,
  //     number: number,
  //     message: message,
  //   };

  //   emailjs
  //     .sendForm(
  //       "service_2gsidbs",
  //       "template_7mam6gn",
  //       emailData,
  //       "YOUR_PUBLIC_KEY"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5mv34e6",
        "template_gwnsfmn",
        form.current,
        "CcsC8HqyajUV4cZr-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //form.reset();
  };

  return (
    <div className="contact">
      <div className="heading">Contact Us</div>
      <div className="sub__heading">
        Thank you for visiting our website. If you have any questions, comments,
        or suggestions, we would love to hear from you.
      </div>
      {/* <div className="input__container"> */}
      {/* <form
          action="mailto:pranaavs2003@gmail.com"
          method="post"
          enctype="text/plain"
        > */}
      <form ref={form} onSubmit={sendEmail} className="input__container">
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
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="input__box"
          placeholder="Contact Number"
          name="number"
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
          onClick={() => {
            setIsSubmit(true);
            sendEmail();
          }}
        >
          Submit
        </button>
      </form>
      {isSubmit && (
        <div className="form__submit" style={{ color: " rgb(235, 184, 184)" }}>
          Your form has been submitted successfully.
        </div>
      )}
      {/* </div> */}
    </div>
  );
}
