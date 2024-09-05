import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-img-holder">
        <img src="" className="footer-img" />
      </div>
      <div>
        <div>
          <p>Get In Touch With Us 💬</p>
          <input type="email" placeholder="Email" />
          <button type="Submit">Submit</button>
          <p>No spam, we hate it more than you do.</p>
        </div>
        <div>
          <p>Useful links</p>

          <p>Search</p>
          <p>Press Room</p>
          <p>Cookies</p>
          <p>Privacy Policy</p>
          <p>Shipping Details</p>
          <p>Site Map</p>
        </div>
        <div>
          <p>Custom Services</p>
          <p>Free Shipping</p>
          <p>Advanced Search</p>
          <p>Help</p>
          <p>Store Location</p>
          <p>Order & Returns</p>
          <p>Mobile Apps</p>
        </div>
        <div>
          <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
          <p>+000-123-456-789</p>
          <p>Advanced Search</p>
          <p>contact@example.com</p>
        </div>
        <hr />
        <div> © All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
