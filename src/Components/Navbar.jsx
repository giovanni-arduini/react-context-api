import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/posts">Posts</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
