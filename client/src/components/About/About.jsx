import { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CV from "../../assets/jona-HCV.pdf";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";

const About = () => {
  const [showCV, setShowCV] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/jona-HCV.pdf";
    link.download = { CV };
    link.click();
  };

  const handleShow = () => {
    setShowCV(true);
  };

  return (
    <Container maxWidth="large" sx={{ p: 2, alignItems: "center", display: "flex", justyfiContent: "center", flexDirection: "column" }}>
      <Box sx={{ width: 450 }}>
        <Typography variant="h2" component="h4">
          Jonatan Ochoa Full Stack Developer
        </Typography>
        <Typography variant="h6" gutterBottom>
          Vivo en Córdoba, Argentina, desde pequeño me encanta la tecnología.
          Luego de muchos años trabajando en atención al cliente decidí estudiar
          lo que me apasiona. Y comencé a estudiar de forma autodidactica lo
          cual me llevó a nuevos objetivos y perfeccionar mis habilidades. No
          dudes en ponerte en contacto.
        </Typography>
      </Box>

      <Box
        sx={{
          width: 450,
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="horizontal"
          aria-label="horizontal outlined button group"
          gutterBottom
        >
          <Button onClick={handleDownload} variant="contained" color="primary">
            Descargar CV
          </Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="horizontal"
          aria-label="horizontal outlined button group"
        >
          <Button onClick={handleShow} variant="contained" color="secondary">
            Ver CV
          </Button>
        </ButtonGroup>
      </Box>

      {showCV && <iframe src={CV} title="cv" width="100%" height="2200px" />}
    </Container>
  );
};

export default About;
