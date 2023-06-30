import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Portfolio = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <div className="container">
        <Card
          sx={{
            minWidth: 275,
            background: "rgba(25, 25, 28)",
            fontFamily: "Helvetica",
            marginBottom: "15px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontFamily: "Helvetica" }}
              color="white"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="white"
              sx={{ fontFamily: "Helvetica" }}
            >
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography
              sx={{ mb: 1.5, color: "white", fontFamily: "Helvetica" }}
            >
              adjective
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ fontFamily: "Helvetica" }}
            >
              well meaning and kindly.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ fontFamily: "Helvetica" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            background: "rgba(25, 25, 28)",
            fontFamily: "Helvetica",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontFamily: "Helvetica" }}
              color="white"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="white"
              sx={{ fontFamily: "Helvetica" }}
            >
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography
              sx={{ mb: 1.5, color: "white", fontFamily: "Helvetica" }}
            >
              adjective
            </Typography>
            <Typography
              variant="body2"
              color="white"
              sx={{ fontFamily: "Helvetica" }}
            >
              well meaning and kindly.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ fontFamily: "Helvetica" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
    // <div className="row container-portfolio">
    //   {/* <div className="col-sm-8 mb-3 mb-sm-0"> */}
    //   <div className="card h-100 hovering-card">
    //     <img
    //       src={MissingImg}
    //       style={{
    //         height: "70px",
    //         width: "70px",
    //         margin: "0px auto",
    //       }}
    //       alt=""
    //     />
    //     <div className="card-body">
    //       <h5 className="card-title mb-4">Olovs Hage Samfällighet</h5>
    //       <p className="card-text mb-5">
    //         En samfällighet var i behov av en hemsida de kunde lägga ut
    //         uppgifter till styrelsen och årsredovisning
    //       </p>
    //       <a
    //         href="https://olovshage.se/"
    //         className="btn btn-primary"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Till Hemsidan
    //       </a>
    //     </div>
    //     {/* </div> */}
    //   </div>
    //   {/* <div className="col-md-4"> */}
    //   <div className="card h-100 hovering-card">
    //     <img
    //       src={MissingImg}
    //       style={{
    //         height: "70px",
    //         width: "70px",
    //         margin: "0px auto",
    //       }}
    //       alt=""
    //     />
    //     <div className="card-body h-100">
    //       <h5 className="card-title mb-4">BRF Hällungen 2</h5>
    //       <p className="card-text mb-5">
    //         Var i behov av en hemsida där de kunde ladda upp bland annat
    //         årsredovisning
    //       </p>
    //       <a
    //         href="https://brfhallungen.se/"
    //         className="btn btn-primary mt-4"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Till Hemsidan
    //       </a>
    //     </div>
    //     {/* </div> */}
    //   </div>
    // </div>
  );
};

export default Portfolio;
