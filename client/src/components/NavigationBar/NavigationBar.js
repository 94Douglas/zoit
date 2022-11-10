import React from "react";
import NavbarLogo from "../NavbarLogo/NavbarLogo";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const toggleMenu = () => {
    document.body.classList.toggle("open");
  };

  return (
    <>
      <button className="navbar-burger" onClick={toggleMenu}></button>
      <nav className="navbar">
        <Link to="/">
          <h3 className="h1-white-center-logoName">ZeroOne IT</h3>
        </Link>
      </nav>
      <nav className="menu">
        <a href="/">Hem</a>
        <a href="/about">Om</a>
        <a href="/services">Tjänster</a>
        <a href="/contact">Kontakta Oss</a>
        <a href="/portfolio">Portfolio</a>
      </nav>
    </>
  );
};

export default NavigationBar;
