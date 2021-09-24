import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const { name, price, seller, stock, img, star } = props.product;
  return (
    <div className="singal-product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-deatils">
        <h2>{name}</h2>
        <p>by : {seller}</p>
        <h4>${price}</h4>
        <p>only {stock} left in stock - order soon</p>
        <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
          initialRating={star}
        />
        <br />
        <button
          className="buy-btn"
          onClick={() => props.handelClick(props.product)}
        >
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
