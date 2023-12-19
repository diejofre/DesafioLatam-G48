import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <Link to="/home">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
      <Link to="/products">
        <p>Products</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
    </nav>
  );
};

export default Navbar;
