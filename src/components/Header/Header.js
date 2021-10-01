import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/orderreview">Order Review</Link>
          </li>
          <li>
            <Link to="/inventory">Manage Inventory here</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
