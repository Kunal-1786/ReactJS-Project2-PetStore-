import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Shop.css";
import CountdownTimer from "./CountdownTimer";
import { Shopdata } from "./Shopdata";
import ShoppingCard from "./ShoppingCard";
import shopimg1 from "./assets/illustrations/shopdog.png";
import shopimg2 from "./assets/illustrations/shopcat.png";
import shopimg3 from "./assets/illustrations/shopbird.png";
import shopimg4 from "./assets/illustrations/shoptoy.png";

import pawicon from "./assets/icons/paw-icon.svg";
function Shop() {
  const [item, setItems] = useState(
    Shopdata.filter((product) => product.category === "dog")
  );
  const [activeCategory, setActiveCategory] = useState("dog");

  const filterItems = (category) => {
    if (category === "all") {
      setItems(Shopdata);
    } else {
      const newItems = Shopdata.filter(
        (newval) => newval.category === category
      );
      setItems(newItems);
    }
    setActiveCategory(category);
  };

  const targetDate = new Date(
    new Date().getTime() + 50 * 24 * 60 * 60 * 1000
  ).toISOString();
  return (
    <>
      <section className="shop-section pb-5">
        <div className="blank"></div>
        <Navbar />
        <div className="container shop-holder">
          <p className="shop-title-1">Shop</p>
          <p className="shop-text-1">
            At our store, we understand that your pet is more than just a
            companion—they’re a beloved member of your family. That’s why we
            offer a wide variety of high-quality, nutritious food options to
            keep your pets healthy, happy, and full of energy.
          </p>

          <p className="shop-title-2">Shop By Category</p>
          <div className="shop-img-container-1 pt-4 pb-5">
            <div
              className={`shop-img-holder-1 ${
                activeCategory === "dog" ? "active" : ""
              }`}
              onClick={() => filterItems("dog")}
            >
              <img src={shopimg1} alt="dog" className="shopimgs1" />
            </div>
            <div
              className={`shop-img-holder-1 ${
                activeCategory === "cat" ? "active" : ""
              }`}
              onClick={() => filterItems("cat")}
            >
              <img src={shopimg2} alt="cat" className="shopimgs1" />
            </div>
            <div
              className={`shop-img-holder-1 ${
                activeCategory === "bird" ? "active" : ""
              }`}
              onClick={() => filterItems("bird")}
            >
              <img src={shopimg3} alt="bird" className="shopimgs1" />
            </div>
            <div
              className={`shop-img-holder-1 ${
                activeCategory === "toy" ? "active" : ""
              }`}
              onClick={() => filterItems("toy")}
            >
              <img src={shopimg4} alt="toy" className="shopimgs1" />
            </div>
          </div>
          <div className="container">
            <ShoppingCard item={item} filterItems={filterItems} />
          </div>

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
                <button type="button" className="hero-btn-holder btn-shop-now">
                  SHOP NOW
                </button>
              </div>
              <div className="special-offer-img-holder">
                <img src="" className="special-offer-img" />
              </div>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
