import React from "react";
import useProducts from "../../Hooks/useProducts/useProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import ReviewItem from "../ReviewItem/ReviewItem";
import useCart from "./../../Hooks/useCart";
import Cart from "./../Cart/Cart";

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const handelRemove = (key) => {
    let newProduct = cart.filter((product) => product.key !== key);
    setCart(newProduct);
    deleteFromDb(key);
  };
  return (
    <div className="main-product-container">
      <div className="product-container">
        {cart.map((porduct) => (
          <ReviewItem
            product={porduct}
            key={porduct.key}
            handelRemove={handelRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;
