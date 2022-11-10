import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <h3 className="footer">
        Copyright <AiOutlineCopyrightCircle /> 2022 - {year} By Zero One IT
      </h3>
    </div>
  );
};

export default Footer;
