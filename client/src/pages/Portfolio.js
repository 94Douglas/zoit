import React from "react";
import { Link } from "react-router-dom";
import MissingImg from "../assets/noimage.png";

const Portfolio = () => {
  return (
    <div className="container">
      <h2 className="noFont noFlex">Portfolio</h2>
      <div className="card-wrapper flex">
        <div className="portfolio-wrapper">
          <img src={MissingImg} className="img" alt="" />
          <h1 className="noFont">Rubrik</h1>
          <h4 className="noFont">Kort Beskrivning</h4>

          <Link to="#">
            <h5 className="noFont">Länk Till Projekt</h5>
          </Link>
        </div>
        <div className="portfolio-wrapper">
          <img src={MissingImg} className="img" alt="" />
          <h1 className="noFont">Rubrik</h1>
          <h4 className="noFont">Kort Beskrivning</h4>

          <Link to="#">
            <h5 className="noFont">Länk Till Projekt</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
