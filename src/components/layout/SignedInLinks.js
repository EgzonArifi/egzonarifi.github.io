import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = ({ children, style, ...rest }) => (
  <ul className="right">
    <li>
      <NavLink to="/">New Project</NavLink>
    </li>
    <li>
      <NavLink to="/">Log Out</NavLink>
    </li>
    <li>
      <NavLink to="/" className="btn btn-floating ping lighten-1">
        EA
      </NavLink>
    </li>
  </ul>
);

export default SignedInLinks;
