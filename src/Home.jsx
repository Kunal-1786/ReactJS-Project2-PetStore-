import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import logoimg from "./assets/illustrations/logo.svg";
import homeimg1 from "./assets/illustrations/homeimg1.png";
import homeimg3 from "./assets/illustrations/homeimg3.png";
import homeimg4 from "./assets/illustrations/homeimg4.jpg";
import pawicon from "./assets/icons/paw-icon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Rating } from "@mui/material";

import CountdownTimer from "./CountdownTimer";
import Footer from "./Footer";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const targetDate = new Date(
    new Date().getTime() + 50 * 24 * 60 * 60 * 1000
  ).toISOString();

  return (
    <>
      <section className="home-section pb-4">
        <div className="header-auto-player"></div>
        <header>
          <div className="header-logo" id="brand">
            <img src={logoimg} className="header-logo-img" alt="Logo" />
          </div>
          <nav>
            <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/Blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </li>
              <li className="icon">
                <FontAwesomeIcon icon={faHeart} />
              </li>
            </ul>
          </nav>
          <div id="hamburger-icon" onClick={toggleMobileMenu}>
            <div className={`bar1 ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar2 ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar3 ${menuOpen ? "open" : ""}`}></div>
          </div>
          <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/Shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/Blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
            <div className="d-flex">
              <li className="icon">
                <FontAwesomeIcon icon={faShoppingCart} />
              </li>
              <li className="icon">
                <FontAwesomeIcon icon={faHeart} />
              </li>
            </div>
          </ul>
        </header>
        <main className="hero-section pt-5 pb-5">
          <div className="container row home-holder">
            <div className="col-xl-6 d-md-flex hero-main-img-holder">
              <div className="hero-img-holder">
                <img src={homeimg1} className="hero-img" />
              </div>
              <div className="hero-img-holder-2">
                <img src={homeimg4} className="hero-img-2" />
              </div>
            </div>
            <div className="col-xl-6 hero-div2">
              <div className="hero-img-holder-3">
                <img src={homeimg3} className="hero-img-3" />
              </div>
              <p className="hero-title pt-3">
                Committed To Pet Welfare Pets Family
              </p>
              <p className="hero-text">
                Ultrices dui sapien eget mi. Adipiscing diam donec adipiscing
                tristique risus nec feugiat in fermentum.
              </p>
              <ol className="row hero-list">
                <div className="col-md-6">
                  <li>
                    <img src={pawicon} alt="pawlogo" className="paw-icon" />
                    Training
                  </li>
                  <li>
                    <img src={pawicon} alt="pawlogo" className="paw-icon" />
                    Exercise And Play
                  </li>
                  <li>
                    <img src={pawicon} alt="pawlogo" className="paw-icon" />
                    Nutrition & Feeding
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <img src={pawicon} alt="pawlogo" className="paw-icon" />
                    Grooming
                  </li>
                  <li>
                    <img src={pawicon} alt="pawlogo" className="paw-icon" />
                    Walking
                  </li>
                  <li>
                    <img src={pawicon} alt="pawlogo" className="paw-icon" />
                    Medical Check-Ups
                  </li>
                </div>
              </ol>
              <div className="pt-3">
                <button type="button" className="hero-btn-holder">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </main>
        <article className="container">
          <div className="article1-div1 container-fluid">
            <div>
              <img src={pawicon} alt="pawlogo" className="art1-pawicon" />
              <p className="article1-title1">WHAT WE DO</p>
              <p className="article1-title2">Our successful achievements</p>
            </div>
            <div className="swiper-main-container">
              <div className="swiper-container-wrapper">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  pagination={{ el: ".swiper-pagination", clickable: true }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    },
                    769: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper-container"
                >
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">5+</p>
                      <p className="home-success-title-2">Years in the Field</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">160+</p>
                      <p className="home-success-title-2">Proficient Experts</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">70k+</p>
                      <p className="home-success-title-2">Client Fulfillment</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">10k</p>
                      <p className="home-success-title-2">Worldwide Branches</p>
                    </div>
                  </SwiperSlide>

                  <div className="slider-controller">
                    <div className="swiper-button-prev slide-arrow">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slide-arrow">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </article>

        <article className="container pt-3 pb-5">
          <div className="article2-div1 container-fluid">
            <div>
              <img src={pawicon} alt="pawlogo" className="art1-pawicon" />
              <p className="article1-title1">food & supplement</p>
              <p className="article1-title2">Explore Categories</p>
            </div>
            <div className="swiper-main-container">
              <div className="swiper-container-wrapper">
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  pagination={{ el: ".swiper-pagination", clickable: true }}
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 1,
                    },
                    769: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper-container"
                >
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">5+</p>
                      <p className="home-success-title-2">Years in the Field</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">160+</p>
                      <p className="home-success-title-2">Proficient Experts</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">70k+</p>
                      <p className="home-success-title-2">Client Fulfillment</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-success">
                      <div className="home-success-logo-holder">
                        <img src="" className="home-success-logos" />
                      </div>
                      <p className="home-success-title-1">10k</p>
                      <p className="home-success-title-2">Worldwide Branches</p>
                    </div>
                  </SwiperSlide>

                  <div className="slider-controller">
                    <div className="swiper-button-prev slide-arrow">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slide-arrow">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </article>

        <article className="container">
          <div className="article3-div1 container-fluid">
            <div>
              <img src={pawicon} alt="pawlogo" className="art1-pawicon" />
              <p className="article1-title1">special offers</p>
              <p className="article1-title2">Explore Our Latest Products</p>
            </div>
            <div>
              <div class="card">
                <img class="card-img-holder" src="" className="card-img" />
                <div class="card-body">
                  <div>
                    <Rating
                      name="read-only"
                      defaultValue={4}
                      size="small"
                      readOnly
                    />
                  </div>
                  <h5 class="card-title">Rubber Toy Pets Ball</h5>
                  <p class="card-text">$3.50 - $4.75</p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-holder" src="" className="card-img" />
                <div class="card-body">
                  <div>
                    <Rating
                      name="read-only"
                      defaultValue={5}
                      size="small"
                      readOnly
                    />
                  </div>
                  <h5 class="card-title">Pet Grooming Brush</h5>
                  <p class="card-text">$6.30 - $6.65</p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-holder" src="" className="card-img" />
                <div class="card-body">
                  <div>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      size="small"
                      readOnly
                    />
                  </div>
                  <h5 class="card-title">Butterscotch Pet Food</h5>
                  <p class="card-text">$11.40 – $11.60</p>
                </div>
              </div>
              <div class="card">
                <img class="card-img-holder" src="" className="card-img" />
                <div class="card-body">
                  <div>
                    <Rating
                      name="read-only"
                      defaultValue={5}
                      size="small"
                      readOnly
                    />
                  </div>
                  <h5 class="card-title">High Protein Dry Food</h5>
                  <p class="card-text">$6.15 – $6.35</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="container">
          <div className="article4-div1 container-fluid pt-4 pb-5">
            <div>
              <img src={pawicon} alt="pawlogo" className="art1-pawicon" />
              <p className="article1-title2">Special Sale Ends Soon!</p>
              <p className="hero-text">
                Quisque nec nisi ut velit bibendum interdum non in nulla nec
                nisi ut velit bibendum interdum non in nulla.
              </p>
              <div className="counter-here">
                <CountdownTimer targetDate={targetDate} />
              </div>
              <button type="button" className="hero-btn-holder">
                SHOP NOW
              </button>
            </div>
            <div className="special-offer-img-holder">
              <img src="" className="special-offer-img" />
            </div>
          </div>
        </article>
        
        <Footer/>
      </section>
    </>
  );
}

export default Home;
