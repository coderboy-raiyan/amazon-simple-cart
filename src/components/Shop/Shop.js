import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  let [products, setProducts] = useState([]);
  let [displayUi, setDisplayUi] = useState([]);
  let [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayUi(data);
      });
  }, []);

  useEffect(() => {
    let savedData = getStoredCart();
    let storedCart = [];
    if (products.length) {
      for (let key in savedData) {
        const addProduct = products.find((product) => product.key === key);
        if (addProduct) {
          const quantity = savedData[key];
          addProduct.quantity = Number(quantity);
          storedCart.push(addProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  let handelClick = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const handelSearch = (event) => {
    let myKeyWord = event.target.value;
    let newSearch = products.filter((product) =>
      product.name.trim().toLowerCase().includes(myKeyWord.trim().toLowerCase())
    );
    setDisplayUi(newSearch);
    console.log(newSearch);
  };

  return (
    <>
      <div className="sub-search">
        <input
          type="text"
          placeholder="Search here..."
          onChange={handelSearch}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <section className="main-product-container">
        <div className="product-container">
          <h1>Products</h1>
          {displayUi.map((product) => {
            return (
              <Product
                product={product}
                key={product.key}
                handelClick={handelClick}
              />
            );
          })}
        </div>
        <div className="cart-container">
          <Cart cart={cart} />
        </div>
      </section>
    </>
  );
};

export default Shop;
