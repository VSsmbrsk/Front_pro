import { Container } from "@mui/material";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";

function Main() {
  return (
    <Container sx={{ py: 6 }} maxWidth="lg">
      <HeroSection />
      <ProjectsSection />
    </Container>
  );
}

export default Main;
