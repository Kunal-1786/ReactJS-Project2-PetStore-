import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Blog.css";
import blogimg1 from "./assets/illustrations/blogimg1.jpg";
import blogimg2 from "./assets/illustrations/blogimg2.jpg";
import blogimg3 from "./assets/illustrations/blogimg3.jpg";
import blogimg4 from "./assets/illustrations/blogimg4.jpg";
import blogimg5 from "./assets/illustrations/blogimg5.jpg";
import blogimg6 from "./assets/illustrations/blogimg6.jpg";
import blogimg7 from "./assets/illustrations/blogimg7.jpg";
import blogimg8 from "./assets/illustrations/blogimg8.jpg";
import blogimg9 from "./assets/illustrations/blogimg9.jpg";

import bloggallaryimg1 from "./assets/illustrations/bloggallaryimg1.jpg";
import bloggallaryimg2 from "./assets/illustrations/bloggallaryimg2.jpg";
import bloggallaryimg3 from "./assets/illustrations/bloggallaryimg3.jpg";
import bloggallaryimg4 from "./assets/illustrations/bloggallaryimg4.jpg";
import bloggallaryimg5 from "./assets/illustrations/bloggallaryimg5.jpg";
import bloggallaryimg6 from "./assets/illustrations/bloggallaryimg6.jpg";

function Blog() {
  return (
    <>
      <section className="blog-section">
        <div className="blank"></div>
        <Navbar />
        <div className="container row blog-holder">
          <p className="blog-title-1 pb-4">News & Blog</p>

          <div className="card-holder row">
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg2} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    Interesting Facts To Know Before Caring Pet
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg1} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    Interesting Facts To Know Before Caring Pet
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg3} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    Best Medicine For Your Pamper Pet's Ticks
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg4} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    Best Top 1- Ways To Make Your Pets Happy
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg5} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    The Best Preventive Vaccination For Puppies
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate Nulla adipisci
                    facere Lorem ipsum, dolor sit amet consectetur Nulla
                    adipisci facere Lorem ipsum
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg6} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    The Benifits Of Regular Checkup For Your Dog
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg7} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    How To Stay Your Cat Friends Happy And Healthy
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-6 mb-4">
              <div class="card">
                <img class="card-img-top" src={blogimg8} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">
                    Tips To Build The Perfect Habitat For Your Small Pet
                  </h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nulla adipisci facere numquam voluptate
                  </p>
                  <a href="#" class="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="blog-text-2">Tags :</p>
            <div className="tags-holder">
              <button type="button" className="hero-btn-holder blog-tags">
                CARE & TREATMENT
              </button>
              <button type="button" className="hero-btn-holder blog-tags">
                DAY CARE
              </button>
              <button type="button" className="hero-btn-holder blog-tags">
                FEEDING
              </button>
              <button type="button" className="hero-btn-holder blog-tags">
                GROOMING
              </button>
              <button type="button" className="hero-btn-holder blog-tags">
                PETS CARE
              </button>
            </div>
          </div>
          <div className="row pt-4">
            <div className="blog-gallary-holder col-xl-6">
              <p className="blog-text-2">Gallery :</p>
              <div className="row">
                <div className="blog-gal-img-holder col-4">
                  <img src={bloggallaryimg1} className="blog-gal-img" />
                </div>
                <div className="blog-gal-img-holder col-4">
                  <img src={bloggallaryimg2} className="blog-gal-img" />
                </div>
                <div className="blog-gal-img-holder col-4">
                  <img src={bloggallaryimg3} className="blog-gal-img" />
                </div>
                <div className="blog-gal-img-holder col-4">
                  <img src={bloggallaryimg4} className="blog-gal-img" />
                </div>
                <div className="blog-gal-img-holder col-4">
                  <img src={bloggallaryimg5} className="blog-gal-img" />
                </div>
                <div className="blog-gal-img-holder col-4">
                  <img src={bloggallaryimg6} className="blog-gal-img" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="blog-img-holder-9 pt-4 pb-5">
                <img src={blogimg9} className="blogimg9" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
