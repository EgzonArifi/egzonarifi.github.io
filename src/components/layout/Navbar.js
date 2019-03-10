import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";

const Navbar = ({ children, style, ...rest }) => (
  <nav className="nav-wrapper grey darken-2">
    <div className="container">
      <Link to="/" className="brand-logo">
        Egzon Arifi
      </Link>
      <SignedInLinks />
    </div>
  </nav>
);

export default Navbar;
