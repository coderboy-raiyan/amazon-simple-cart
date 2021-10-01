import React from "react";
import { useHistory } from "react-router";
import useProducts from "../../Hooks/useProducts/useProducts";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
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
  const history = useHistory();

  const handlePlaceOrder = () => {
    history.push("./placeorder");
    setCart([]);
    clearTheCart();
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
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
