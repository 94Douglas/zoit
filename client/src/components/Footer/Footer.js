import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-wrapper">
      <h5 className="footer">
        Copyright{" "}
        <AiOutlineCopyrightCircle style={{ height: "30px", width: "30px" }} />{" "}
        2022 - {year} By Zero One IT
      </h5>
    </div>
  );
};

export default Footer;
