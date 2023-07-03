import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkedin =
    "https://www.linkedin.com/company/zeroone-it-web/?viewAsMember=true";
  const year = new Date().getFullYear();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>ZeroOne IT</h3>
        <p className="footer-color">
          Vi utvecklar din hemsida på professionell nivå med noggrannhet.
        </p>
      </div>
      <div className="footer-section">
        <h3>Tjänster</h3>
        <ul className="footer-list">
          <li>
            <a href="#design">Design</a>
          </li>
          <li>
            <a href="#development">Utveckling</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-list">
          <li>
            <a href="/about">Om Oss</a>
          </li>
          <li>
            <a href="/contact">Kontakta Oss</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connecta Med Oss</h3>
        <ul className="social-list">
          <li>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => openInNewTab(linkedin)}
            >
              <LinkedInIcon /> Hitta oss på LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Kontakt Information</h3>
        <p className="footer-color">
          Tryck <Link to="/contact">HÄR</Link> för att kontakta oss!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
