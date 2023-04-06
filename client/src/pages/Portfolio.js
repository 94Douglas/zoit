import * as React from "react";
import MissingImg from "../assets/noimage.png";

const Portfolio = () => {
  return (
    <div className="row container">
      <div className="col-sm-8 mb-3 mb-sm-0">
        <div className="card h-100 hovering-card">
          <img
            src={MissingImg}
            style={{
              height: "70px",
              width: "70px",
              margin: "0px auto",
            }}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title mb-4">Olovs Hage Samfällighet</h5>
            <p className="card-text mb-5">
              En samfällighet var i behov av en hemsida de kunde lägga ut
              uppgifter till styrelsen och årsredovisning
            </p>
            <a
              href="https://olovshage.se/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Till Hemsidan
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100 hovering-card">
          <img
            src={MissingImg}
            style={{
              height: "70px",
              width: "70px",
              margin: "0px auto",
            }}
            alt=""
          />
          <div className="card-body h-100">
            <h5 className="card-title mb-4">BRF Hällungen 2</h5>
            <p className="card-text mb-5">
              Var i behov av en hemsida där de kunde ladda upp bland annat
              årsredovisning
            </p>
            <a
              href="https://brfhallungen.se/"
              className="btn btn-primary mt-4"
              target="_blank"
              rel="noreferrer"
            >
              Till Hemsidan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
