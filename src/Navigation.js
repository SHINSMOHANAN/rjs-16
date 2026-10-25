import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/aboutus">About Us</Link>
      <span>|</span>
      <Link to="/contactus">Contact Us</Link>
    </nav>
  );
}

export default Navigation;
