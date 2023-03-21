import React from "react";
import { Link } from "react-router-dom";
import MissingImg from "../assets/noimage.png";

const Portfolio = () => {
  return (
    <div className="container">
      <h2 className="noFont noFlex">Våra Kunder Vi Skapat Hemsida Till Från Grunden</h2>
      <div className="card-wrapper flex">
        <div className="portfolio-wrapper">
          <img src={MissingImg} className="img" alt="" />
          <h1 className="noFont">Olovs Hage Samfällighet</h1>
          <h5 className="noFont">En samfällighet var i behov av en hemsida de kunde lägga ut uppgifter till styrelsen och årsredovisning</h5>

          <a href="https://olovshage.se/" target="_blank" rel="newTab">
            <h5 className="noFont">Till Hemsidan</h5>
          </a>
        </div>
        <div className="portfolio-wrapper">
          <img src={MissingImg} className="img" alt="" />
          <h1 className="noFont">BRF Hällungen 2</h1>
          <h5 className="noFont">Var i behov av en hemsida där de kunde ladda upp bland annat årsredovisning</h5>

          <a href="https://brfhallungen.se/" target="_blank" rel="newTab">
            <h5 className="noFont">Till Hemsidan</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
