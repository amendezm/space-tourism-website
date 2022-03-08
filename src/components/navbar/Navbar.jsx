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
        <>
          <div className="line-through"></div>
          <div className="navbar-links">
            <ul className="links-list">{renderLinks()}</ul>
          </div>
        </>
      )}
      {isMobile && (
        <span
          role="button"
          className="hamburger"
          onClick={isMenuOpen ? handleClose : handleOpen}
        >
          <img
            src={isMenuOpen ? iconClose : iconHamburger}
            alt="menu-trigger"
          />
        </span>
      )}
      {isMobile && (
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="links-list">{renderLinks(handleClose)}</ul>
        </div>
      )}
    </div>
  );
};

const renderLinks = (handleClose) => {
  const links = [
    { number: "00", text: "home", route: "/" },
    { number: "01", text: "destination", route: "/destination" },
    { number: "02", text: "crew", route: "/crew" },
    { number: "03", text: "technology", route: "/technology" },
  ];

  return (
    <>
      {links.map(({ number, text, route }, key) => (
        <NavLink
          key={key}
          className="links-item"
          to={route}
          onClick={handleClose}
        >
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
