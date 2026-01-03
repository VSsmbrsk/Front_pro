import { Box, Container, Typography, Grid, Chip, Stack } from "@mui/material";

const skills = [
  "JavaScript",
  "React",
  "Material UI",
  "HTML",
  "SCSS/CSS",
  "Git",
  "REST API",
  "Responsive Design",
  "Redux",
];

function About() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          About Me
        </Typography>

        <Typography sx={{ mb: 2 }}>
          I’m a junior frontend developer focused on building modern and
          maintainable web applications. I work primarily with React and
          JavaScript, and I enjoy creating clean user interfaces using Material
          UI.
        </Typography>

        <Typography sx={{ mb: 4 }}>
          I pay attention to component structure, code readability, and
          responsive design. I’m especially interested in building reusable UI
          components and improving user experience through thoughtful layout and
          interaction.
        </Typography>

        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>

        <Grid container spacing={1} sx={{ mb: 4 }}>
          {skills.map((skill) => (
            <Grid item key={skill}>
              <Chip label={skill} sx={{ bgcolor: "#000", color: "#fff" }} />
            </Grid>
          ))}
        </Grid>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Languages
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              sx={{ bgcolor: "#000", color: "#fff" }}
              label="Russian — Fluent"
            />
            <Chip
              sx={{ bgcolor: "#000", color: "#fff" }}
              label="Ukrainian — Native"
            />
            <Chip
              sx={{ bgcolor: "#000", color: "#fff" }}
              label="English — Intermediate (reading docs and basic communication)"
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
