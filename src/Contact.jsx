import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <>
      <section className="contact-section pb-5">
        <div className="blank"></div>
        <Navbar />
        <div className="container contact-holder pb-5">
          <p className="contact-title-1">Contact-Us</p>
          <p className="contact-title-2">Book Your Slot</p>
          <p className="contact-text-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            deserunt cumque aut, explicabo omnis consequatur quod excepturi
            fuga, facere harum quo ratione quidem? Illo!
          </p>

          <div className="contact-part-holder row">
            <div className="col-xl-6">
              <div className="input-holder pt-4 pb-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="contact-inputs"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="contact-inputs"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="contact-inputs"
                />
                <input
                  type="number"
                  placeholder="Phone Number*"
                  className="contact-inputs"
                />
                <input
                  type="text"
                  placeholder="Your Message"
                  className="contact-inputs contact-input2"
                />
                <button type="button" className="hero-btn-holder contact-btn">
                  SEND MESSAGE
                </button>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="input-holder container pt-4 pb-4 row ms-0 me-0">
                <div className="col-md-6">
                  <FontAwesomeIcon
                    className="contact-icons"
                    icon={faLocationDot}
                    style={{ color: "#ffa028" }}
                  />
                  <p className="contact-title-3">ADDRESS</p>
                  <p className="contact-text-3">
                    No: 58 A, East Madison Street, Baltimore, MD, USA 4508
                  </p>
                  <FontAwesomeIcon
                    className="contact-icons"
                    icon={faPhone}
                    style={{ color: "#ffa028" }}
                  />
                  <p className="contact-title-3">CONTACT US</p>
                  <p className="contact-text-3">
                    000-123-456-789 / 000-897-654-321
                  </p>
                </div>
                <div className="col-md-6">
                  <FontAwesomeIcon
                    className="contact-icons"
                    icon={faEnvelope}
                    style={{ color: "#ffa028" }}
                  />
                  <p className="contact-title-3">EMAIL</p>
                  <p className="contact-text-3">
                    contact@example.com / info@example.com
                  </p>
                  <FontAwesomeIcon
                    className="contact-icons"
                    icon={faCalendarDays}
                    style={{ color: "#ffa028" }}
                  />
                  <p className="contact-title-3">WE ARE OPEN</p>
                  <p className="contact-text-3">
                    Monday - Saturday : 09.00am to 7pm Sunday : Holiday
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container pt-5 pb-5">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.637601098195!2d-122.40113368468148!3d37.783304879758045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a1f080bbd%3A0x409b437a8c9ed460!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1637249691953!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
