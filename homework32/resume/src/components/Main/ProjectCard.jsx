import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Grid,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ project }) {
  return (
    <Card>
      <CardContent sx={{ maxWidth: "250px" }}>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>

        <Grid container spacing={1} sx={{ mt: 2 }}>
          {project.tech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{ border: "1px solid #8fbc8f", bgcolor: "transparent" }}
            />
          ))}
        </Grid>
      </CardContent>

      <CardActions>
        {project.github && (
          <Button
            size="small"
            startIcon={<GitHubIcon />}
            href={project.github}
            target="_blank"
            sx={{
              color: "#8fbc8f",
              transition: "0.5s",
              "&:hover": { color: "#fff", bgcolor: "#8fbc8f" },
            }}
          >
            GitHub
          </Button>
        )}
        {project.live && (
          <Button
            size="small"
            href={project.live}
            target="_blank"
            sx={{
              color: "#8fbc8f",
              transition: "0.5s",
              "&:hover": { color: "#fff", bgcolor: "#8fbc8f" },
            }}
          >
            Live
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
