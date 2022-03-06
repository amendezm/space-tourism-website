import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "./../../assets/shared/logo.svg";
import iconHamburger from "./../../assets/shared/icon-hamburger.svg";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-brand">
      <img className="logo" src={logo} alt="logo" />
    </div>
    <div className="navbar-links">
      <ul className="links-list">
        <NavLink className="links-item" to="/">
          <div className="content">
            <strong className="number">00</strong>
            <span className="text">home</span>
          </div>
        </NavLink>
        <NavLink className="links-item" to="/destination">
          <div className="content">
            <strong className="number">01</strong>
            <span className="text">destination</span>
          </div>
        </NavLink>
        <NavLink className="links-item" to="/crew">
          <div className="content">
            <strong className="number">02</strong>
            <span className="text">crew</span>
          </div>
        </NavLink>
        <NavLink className="links-item" to="/technology">
          <div className="content">
            <strong className="number">03</strong>
            <span className="text">technology</span>
          </div>
        </NavLink>
      </ul>
      <div className="line-through"></div>
    </div>
    <div className="hamburger">
      <img src={iconHamburger} alt="menu-trigger" />
    </div>
  </div>
);

export { Navbar };
