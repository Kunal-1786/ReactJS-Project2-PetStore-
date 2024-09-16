import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";

function ShoppingCard({ item }) {
  return (
    <div className="container pb-5">
      <div className="row justify-content-center align-item-center text-center">
        {item.map((val) => (
          <div key={val.id} className="card col-md-4 col-sm-6 me-md-5">
            <div className="card-img-top">
              <img src={val.img} className="w-75" alt={val.title} />
              <div className="card-body">
                <p className="card-title">{val.title}</p>
                <p className="card-text">Price: {val.price}</p>
                <a href="#" className="btn btn-primary">
                  <FontAwesomeIcon icon={faHeart} />
                </a>
                <a href="#" className="btn btn-primary ms-3">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCard;
