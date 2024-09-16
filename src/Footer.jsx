import React from "react";
import "./Footer.css";
import footerimg1 from "./assets/illustrations/footerimg1.png";

function Footer() {
  return (
    <>
      <div className="footerimgcontainer">
        <div className="footer-img-holder1 container">
          <img src={footerimg1} className="footer-img" />
        </div>
      </div>
      <div className="footerimgcontainer">
        <div className="footer-img-holder2 container">
          <img src={footerimg1} className="footer-img" />
        </div>
      </div>
      <footer>
        <div className="container footer-text-holder pt-5">
          <div className="row">
            <div className="footer-part-1 col-xl-4 col-lg-12 pb-2">
              <p className="footer-title">Get In Touch With Us 💬</p>
              <input
                type="email"
                placeholder="Email"
                className="footer-input"
              />
              <button type="Submit" className="footer-btn">
                Submit
              </button>
              <p footer-text>No spam, we hate it more than you do.</p>
            </div>
            <div className="footer-part-2 col-xl-8 row">
              <div className="col-md-4">
                <p className="footer-subtitle">Useful links</p>
                <p>
                  <a href="#">Search</a>
                </p>
                <p>
                  <a href="#">Press Room</a>
                </p>
                <p>
                  <a href="#">Cookies</a>
                </p>
                <p>
                  <a href="#">Privacy Policy</a>
                </p>
                <p>
                  <a href="#">Shipping Details</a>
                </p>
                <p>
                  <a href="#">Site Map</a>
                </p>
              </div>
              <div className="col-md-4">
                <p className="footer-subtitle">Custom Services</p>
                <p>
                  <a href="#">Free Shipping</a>
                </p>
                <p>
                  <a href="#">Advanced Search</a>
                </p>
                <p>
                  <a href="#">Help</a>
                </p>
                <p>
                  <a href="#">Store Location</a>
                </p>
                <p>
                  <a href="#">Order & Returns</a>
                </p>
                <p>
                  <a href="#">Mobile Apps</a>
                </p>
              </div>
              <div className="col-md-4">
                <p className="footer-subtitle">Contact Us</p>
                <p>
                  <a href="#">
                    No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                  </a>
                </p>
                <p>
                  <a href="#">+000-123-456-789</a>
                </p>
                <p>
                  <a href="#">Advanced Search</a>
                </p>
                <p>
                  <a href="#">contact@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyrights"> © All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
