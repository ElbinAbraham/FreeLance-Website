import "./footer.css";
import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (event) => {
  // event.preventDefault();
  // emailjs
  //   .send(
  //     'YOUR_SERVICE_ID',
  //     'YOUR_TEMPLATE_ID',
  //     { email, message },
  //     'YOUR_USER_ID'
  //   )
  //   .then(
  //     (response) => {
  //       console.log('Email sent successfully!', response.status, response.text);
  //     },
  //     (error) => {
  //       console.log('Failed to send email.', error);
  //     }
  //   );

  return (
    <footer id="last1">
      <div className="main-content">
        <div className="left box">
          <h2>Contact Us</h2>
          <div className="content">
            <div className="place">
              <a
                className="place-marker"
                href="https://goo.gl/maps/W8hso59sn2rf6xsV6"
              >
                <span className="fas fa-map-marker-alt"></span>
              </a>
              <span className="text">Bandra West, Mumbai, 400 050</span>
            </div>
            <div className="phone">
              <a className="phone-marker" href="tel:+91-9322338575">
                <span className="fas fa-phone"></span>
              </a>
              <span className="text">+91-9322338575</span>
            </div>
            <div className="email">
              <a
                className="email-marker"
                href="mailto: aaafinadvisor@gmail.com "
              >
                <span className="fas fa-envelope"></span>
              </a>
              <span className="text">aaafinadvisor@gmail.com </span>
            </div>
          </div>
          <div className="social">
            <a href="https://facebook.com">
              <span className="fab fa-facebook-f"></span>
            </a>
            <a href="https://instagram.com">
              <span className="fab fa-instagram"></span>
            </a>
          </div>
        </div>

        <div className="right box">
          <h2>Reach Out To Us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea
                  rows={3}
                  cols={50}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                ></textarea>
              </div>
              <div className="msg1">
                <div className="text">Message *</div>
                <textarea
                  rows={10}
                  cols={25}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                ></textarea>
              </div>
              <div className="btn" style={{ marginLeft: "20px" }}>
                <button type="submit" className="bat">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
