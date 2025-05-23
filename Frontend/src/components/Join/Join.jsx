import React, { useRef } from "react";
import "./Join.css";
import * as emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ID",
        "template_ID",
        form.current,
        "Public_Key"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-id">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span className="normal-text"> LEVEL UP</span>
        </div>
        <div>
          <span className="normal-text">YOUR HEALTH</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>

      {/* <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div> */}
    </div>
  );
};

export default Join;