import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="main-nav">
        <div className="navbar-brand">
          <a href="/home">
            <img
              src="https://www.pinclipart.com/picdir/big/358-3584545_amazon-web-services-logo-png-transparent-svg-vector.png"
              alt=""
            />
          </a>
        </div>

        <ul className="navbar-menu">
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/shop">Order Review</a>
          </li>
          <li>
            <a href="/shop">Manage Inventory here</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
