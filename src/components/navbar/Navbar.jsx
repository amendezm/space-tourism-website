import { NavLink } from "react-router-dom";

import "./Navbar.css";
import logo from "./../../assets/shared/logo.svg";
import iconHamburger from "./../../assets/shared/icon-hamburger.svg";
import iconClose from "./../../assets/shared/icon-close.svg";
import { useWindowWidth } from "../../hooks/window-width";
import { useEffect, useState } from "react";

const Navbar = () => {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(windowWidth <= 600);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpen = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMobile(windowWidth <= 600);
  }, [windowWidth]);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img className="logo" src={logo} alt="logo" />
      </div>
      {(!isMenuOpen || !isMobile) && (
        <div className="navbar-links">
          <ul className="links-list">{renderLinks()}</ul>
          <div className="line-through"></div>
        </div>
      )}
      {!isMenuOpen && isMobile && (
        <span role="button" className="hamburger" onClick={handleOpen}>
          <img src={iconHamburger} alt="menu-trigger" />
        </span>
      )}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <span role="button" className="close" onClick={handleClose}>
            <img src={iconClose} alt="menu-trigger" />
          </span>
          <ul className="links-list">{renderLinks()}</ul>
        </div>
      )}
    </div>
  );
};

const renderLinks = () => {
  const links = [
    { number: "00", text: "home", route: "/" },
    { number: "01", text: "destination", route: "/destination" },
    { number: "02", text: "crew", route: "/crew" },
    { number: "03", text: "technology", route: "/technology" },
  ];

  return (
    <>
      {links.map(({ number, text, route }, key) => (
        <NavLink key={key} className="links-item" to={route}>
          <div className="content">
            <strong className="number">{number}</strong>
            <span className="text">{text}</span>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export { Navbar };
