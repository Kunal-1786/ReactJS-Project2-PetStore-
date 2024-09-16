import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import homeimg1 from "./assets/illustrations/homeimg1.png";
import homeimg3 from "./assets/illustrations/homeimg3.png";
import homeimg4 from "./assets/illustrations/homeimg4.jpg";
import pawicon from "./assets/icons/paw-icon.svg";

import catFood1 from "./assets/illustrations/catfood1.png";
import toy5 from "./assets/illustrations/toy5.png";
import dogFood4 from "./assets/illustrations/dogfood4.png";
import birdFood5 from "./assets/illustrations/birdfood5.png";

import homecatimg1 from "./assets/illustrations/homecategory-img1-300x300.jpg";
import homecatimg2 from "./assets/illustrations/homecategory-img2-300x300.jpg";
import homecatimg3 from "./assets/illustrations/homecategory-img3-300x300.jpg";
import homecatimg4 from "./assets/illustrations/homecategory-img4-300x300.jpg";

import { Rating } from "@mui/material";

import CountdownTimer from "./CountdownTimer";
import Footer from "./Footer";

function Home() {
  const targetDate = new Date(
    new Date().getTime() + 50 * 24 * 60 * 60 * 1000
  ).toISOString();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="home-section pb-4">
        <div className="marquee-container">
          <p className="marquee-text">
            On Every Purchase Earn Points And Get
            Rewards&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free
            Shipping On Order Over
            $50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Long
            Weekend Sale Up To 50%
            Off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazing
            Deals On Your Favourite Pet
            Supplies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Clearance Sale Event: Up To 70% Off Select Items!
          </p>
        </div>
        <Navbar />
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

        <article className="container pb-5">
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

        <article className="container pt-5 pb-5">
          <div className="article2-div1 container-fluid">
            <div>
              <img src={pawicon} alt="pawlogo" className="art1-pawicon" />
              <p className="article1-title1">food & supplement</p>
              <p className="article1-title2 pb-5">Explore Categories</p>
            </div>

            <div className="">
              <Carousel
                infinite={true}
                removeArrowOnDeviceType={"superLargeDesktop"}
                autoPlay={true}
                autoPlaySpeed={3000}
                responsive={responsive}
                draggable={true}
                swipeable={true}
              >
                <div className="cat-holder">
                  <img src={homecatimg1} className="explore-cat-imgs" />
                  <p>Dog Food</p>
                </div>
                <div className="cat-holder">
                  <img src={homecatimg2} className="explore-cat-imgs" />
                  <p>Cat Food</p>
                </div>
                <div className="cat-holder">
                  <img src={homecatimg3} className="explore-cat-imgs" />
                  <p>Bird Food</p>
                </div>
                <div className="cat-holder ">
                  <img src={homecatimg4} className="explore-cat-imgs" />
                  <p>Explore All</p>
                </div>
              </Carousel>
            </div>
          </div>
        </article>

        <article className="container">
          <div className="article3-div1 container-fluid">
            <div>
              <img src={pawicon} alt="pawlogo" className="art1-pawicon" />
              <p className="article1-title1">special offers</p>
              <p className="article1-title2 pb-5">
                Explore Our Latest Products
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div class="card explore-latest-products-text">
                  <img
                    class="card-img-holder"
                    src={toy5}
                    className="card-img"
                  />
                  <div class="card-body">
                    <div>
                      <Rating
                        name="read-only"
                        defaultValue={4}
                        size="small"
                        readOnly
                      />
                    </div>
                    <h5 class="card-title">Soft Rubber Toy Pets Ball</h5>
                    <p class="card-text">$3.50 - $4.75</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div class="card explore-latest-products-text">
                  <img
                    class="card-img-holder"
                    src={birdFood5}
                    className="card-img"
                  />
                  <div class="card-body">
                    <div>
                      <Rating
                        name="read-only"
                        defaultValue={5}
                        size="small"
                        readOnly
                      />
                    </div>
                    <h5 class="card-title">Bird Mealworm Blend Food</h5>
                    <p class="card-text">$6.30 - $6.65</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div class="card explore-latest-products-text">
                  <img
                    class="card-img-holder"
                    src={dogFood4}
                    className="card-img"
                  />
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
              </div>
              <div className="col-md-6 col-xl-3">
                <div class="card explore-latest-products-text">
                  <img
                    class="card-img-holder"
                    src={catFood1}
                    className="card-img"
                  />
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
          </div>
        </article>

        <article className="container pt-5 pb-5">
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
              <button type="button" className="hero-btn-holder btn-shop-now">
                SHOP NOW
              </button>
            </div>
            <div className="special-offer-img-holder">
              <img src="" className="special-offer-img" />
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default Home;
