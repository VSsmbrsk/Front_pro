import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Resume Website",
    description: "Personal portfolio built with React and MUI.",
    tech: ["React", "MUI", "Vite"],
    github: "https://github.com/VSsmbrsk/Front_pro/tree/main/homework32/resume",
    live: "https://vssmbrsk.github.io/resume/",
  },
  {
    title: "Todo App",
    description: "Todo application with state management.",
    tech: ["React", "Redux", "Redux-saga", "Vite", "Formik"],
    github:
      "https://github.com/VSsmbrsk/Front_pro/tree/main/homework31/todo-saga",
    live: "https://vssmbrsk.github.io/todo-saga/",
  },
  {
    title: "SWAPI App",
    description: "SWAPI application with state management.",
    tech: [
      "React",
      "Redux",
      "API",
      "Redux-thunk",
      "Vite",
      "Formik",
      "Framer Motion",
    ],
    github:
      "https://github.com/VSsmbrsk/Front_pro/tree/main/homework30/swapi-redux-thunk",
    live: "https://vssmbrsk.github.io/swapi-redux-thunk/",
  },
  {
    title: "Createx",
    description: "Online School multipage website.",
    tech: ["HTML", "CSS", "JavaScript", "JQuery", "SCSS", "Bootstrap"],
    github: "https://github.com/VSsmbrsk/Createx",
    live: "https://vssmbrsk.github.io/Createx/",
  },
];

function ProjectsSection() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectsSection;
