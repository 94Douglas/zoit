import React from "react";
import { Link } from "react-router-dom";

import headerBg from "../../assets/headerbg.png";

const NavigationBar = () => {
  const toggleMenu = () => {
    document.body.classList.toggle("open");
  };

  return (
    <>
      <div className="headers">
        <nav className="navbar">
          <Link to="/" className="mt">
            <h3 className="logo">ZeroOne IT</h3>
          </Link>
          <button className="navbar-burger" onClick={toggleMenu}></button>
        </nav>
        {/* <div className="inner-header flex">
          <h1>Vi sätter ditt företag på kartan</h1>
          <div className="headerImg">
            <img
              style={{
                transform: "rotate(10deg)",
                height: "50%",
                width: "50%",
              }}
              src={headerBg}
            />
          </div>
        </div> */}
        <div className="background shadow-b">
          <img src={headerBg} alt="header background" />
        </div>

        {/* <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div> */}
      </div>

      <nav className="menu">
        <a href="/">Hem</a>
        <a href="/about">Om</a>
        <a href="/contact">Kontakta Oss</a>
        <a href="/portfolio">Portfolio</a>
      </nav>
    </>
  );
};

export default NavigationBar;
