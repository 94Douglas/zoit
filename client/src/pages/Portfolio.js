import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Portfolio = () => {
  const olovsHage = "https://olovshage.se/";
  const recruitZone = "https://94douglas.github.io/workers/";

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
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
              Bostadsrättförening
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="white"
              sx={{
                marginBottom: 1.5,
                fontFamily: "Helvetica",
                textDecoration: "underline",
              }}
            >
              BRF Hällungen 2
            </Typography>

            <Typography
              variant="body2"
              color="white"
              sx={{ marginBottom: 1.5, fontFamily: "Helvetica" }}
            >
              Tillsammans med styrelsen utförde vi en hemsida helt från scratch.
              Syftet med deras hemsida skulle bli att det skulle finnas
              information kring föreningen för nyinflyttade eller för de
              personer som funderar på att köpa en bostad.
              <br />
              På hemsidan kan man läsa årsredovisning.
              <br />
              Kontaktuppgifter till styrelsen.
              <br />
              Välkomstinformation för de som är intresserade av en bostad eller
              är nyinflyttade.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ fontFamily: "Helvetica" }}>
              Besök
            </Button>
          </CardActions>
        </Card>
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
              Samfällighet
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="white"
              sx={{
                mb: 1.5,
                fontFamily: "Helvetica",
                textDecoration: "underline",
              }}
            >
              Samfällighet Olovs Hage
            </Typography>

            <Typography
              variant="body2"
              color="white"
              sx={{ fontFamily: "Helvetica" }}
            >
              Tillsammans med styrelsen utförde vi en hemsida helt från scratch.
              Syftet med deras hemsida skulle bli att det skulle finnas
              information kring samfälligheten för nyinflyttade eller för de
              personer som funderar på att köpa en bostad.
              <br />
              På hemsidan kan man läsa årsredovisning.
              <br />
              Kontaktuppgifter till styrelsen.
              <br />
              Information om styrelsen och området.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{ fontFamily: "Helvetica" }}
              onClick={() => openInNewTab(olovsHage)}
            >
              Besök
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
              Intern Projekt
            </Typography>
            <Typography
              variant="h5"
              component="div"
              color="white"
              sx={{
                mb: 1.5,
                fontFamily: "Helvetica",
                textDecoration: "underline",
              }}
            >
              Recruit Zone
            </Typography>

            <Typography
              variant="body2"
              color="white"
              sx={{ fontFamily: "Helvetica" }}
            >
              Hemsidan är under uppbyggnad, men finns tillgänglig för
              allmänheten.
              <br />
              Tryck på knappen nedan för att utforska!
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              sx={{ fontFamily: "Helvetica" }}
              onClick={() => openInNewTab(recruitZone)}
            >
              Besök
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Portfolio;
