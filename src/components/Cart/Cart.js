import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  let totalLength = 0;
  let total = 0;
  for (let product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }

    total = (total + product.price) * product.quantity;
    totalLength = totalLength + product.quantity;
  }

  let shipping = total > 0 ? 15 : 0;
  let tax = (total + shipping) * 0.1;
  let grandTotal = total + tax + shipping;
  return (
    <div className="cart-inner">
      <h1>Order Summary</h1>
      <h2>Items ordered : {totalLength}</h2>

      <ul className="all-items">
        <li>
          Total before tax: <span>$ {total.toFixed(2)}</span>
        </li>
        <li>
          Shipping {"&"} Handling: <span>$ {shipping}</span>
        </li>

        <li>
          Estimated Tax: <span>$ {tax.toFixed(2)}</span>
        </li>
      </ul>

      <h3>Order Total : $ {grandTotal.toFixed(2)}</h3>

      <div className="btn-grp">
        <button>Review your order</button>
      </div>
    </div>
  );
};

export default Cart;
