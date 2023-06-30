import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src="logo-url" alt="Company Logo" className="footer-logo" />
        <p>
          Your Company's mission statement or description goes here. This helps
          reinforce your brand and provides information to visitors.
        </p>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul className="footer-list">
          <li>
            <a href="#design">Design</a>
          </li>
          <li>
            <a href="#development">Development</a>
          </li>
          <li>
            <a href="#marketing">Marketing</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-list">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect with Us</h3>
        <ul className="social-list">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <form>
          <input type="email" placeholder="Email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <p>123 Your Address, Your City, Your Country</p>
        <p>+1234567890</p>
        <p>email@yourcompany.com</p>
      </div>
    </footer>
  );
};

export default Footer;
