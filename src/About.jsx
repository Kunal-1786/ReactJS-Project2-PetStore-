import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./About.css";

import pawicon from "./assets/icons/paw-icon.svg";

import aboutimg1 from "./assets/illustrations/aboutimg1.jpg";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="blank"></div>
        <Navbar />
        <div className="container row about-holder">
          <p className="about-title-1">About</p>

          <div className="col-md-6 aboout-holder-part-1">
            <div className="about-img-container">
              <div className="about-text-1">
                <div className="hero-img-holder">
                  <img src={aboutimg1} className="hero-img" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 about-holder-part-2 pb-5">
            <p className=" about-title-2">Reasons to choose our pet store</p>
            <p className="about-text-2">
              Gravida in fermentum et sollicitudin ac orci. Neque vitae tempus
              quam pellentesque. Sem viverra aliquet eget sit amet tellus cras
              adipiscing. Aliquet porttitor lacus luctus accumsan tortor.Sed
              velit dignissim sodales ut.
            </p>
            <ol className="row hero-list">
              <div className="col-md-6">
                <li>
                  <img src={pawicon} alt="pawlogo" className="paw-icon" />
                  Puppy Belt
                </li>
                <li>
                  <img src={pawicon} alt="pawlogo" className="paw-icon" />
                  Health Care
                </li>
                <li>
                  <img src={pawicon} alt="pawlogo" className="paw-icon" />
                  Pet Hygiene
                </li>
              </div>
              <div className="col-md-6">
                <li>
                  <img src={pawicon} alt="pawlogo" className="paw-icon" />
                  Nutritional Food
                </li>
                <li>
                  <img src={pawicon} alt="pawlogo" className="paw-icon" />
                  Pet Salon
                </li>
              </div>
            </ol>
            <button type="button" className="hero-btn-holder">
              More Details
            </button>
          </div>
          <article className="container pt-5 pb-5">
            <div className="article1-div1 row container-fluid pt-5 pb-5">
              <div>
                <img src={pawicon} alt="pawlogo" className="art1-pawicon" />
                <p className="article1-title1">WHAT WE DO</p>
                <p className="article1-title2">Our successful achievements</p>
              </div>
              <div className="col-md-6 col-xl-3">
                <p className="home-success-title-1">10k</p>
                <p className="home-success-title-2">Worldwide Branches</p>
              </div>
              <div className="col-md-6 col-xl-3">
                <p className="home-success-title-1">160+</p>
                <p className="home-success-title-2">Proficient Experts</p>
              </div>
              <div className="col-md-6 col-xl-3">
                <p className="home-success-title-1">70k+</p>
                <p className="home-success-title-2">Client Fulfillment</p>
              </div>
              <div className="col-md-6 col-xl-3">
                <p className="home-success-title-1">5+</p>
                <p className="home-success-title-2">Years in the Field</p>
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
