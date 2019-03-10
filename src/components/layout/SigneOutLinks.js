import React from "react";
import { NavLink } from "react-router-dom";

const SigneOutLinks = ({ children, style, ...rest }) => (
  <ul className="right">
    <li>
      <NavLink to="/">Sign In</NavLink>
    </li>
  </ul>
);

export default SigneOutLinks;
