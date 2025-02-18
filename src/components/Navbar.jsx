import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {

  return (
    <div className="navbar">
      <h2>logo</h2>
      <div>
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <Link to="/cart">
          <p>Cart</p>
        </Link>
        <p>orders </p>
      </div>
      <form action="">
        <input type="text" name="search" />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default Navbar;
