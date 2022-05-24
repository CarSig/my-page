import React, { useRef } from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //TODO: add credentials

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
    alert("message sent sucessfully");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:lovro.boric@gmail.com" target="_blank" rel="noreferrer">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>lovro.boric@gmail.com</h5>
              Send a message
            </article>
          </a>
          <a href="https://api.whatsapp.com/send?phone=004917640454763" target="_blank" rel="noreferrer">
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>004917640454763</h5>
              <p>Send a message</p>
            </article>
          </a>
        </div>

        {/**END of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="8" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary" style={{ marginTop: "2rem" }}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
