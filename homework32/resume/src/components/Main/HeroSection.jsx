import { Box, Typography, Button, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";

function HeroSection() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Hello, I'm Vadym Samborskyi
      </Typography>

      <Typography variant="h5" color="text.secondary" gutterBottom>
        Junior Frontend Developer
      </Typography>

      <Typography sx={{ maxWidth: 600, mt: 2 }}>
        I’m a focused on building clean, responsive, and user-friendly
        interfaces. I work with React, JavaScript, Material UI and other
        technologies, paying close attention to component structure,
        accessibility, and maintainable code.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            bgcolor: "#000",
            border: "3px solid #fff",
            color: "#fff",
            transition: "0.5s",
            "&:hover": {
              bgcolor: "#fff",
              color: "#000",
              border: "3px solid #000",
            },
          }}
          href="/files/Resume-Vadym-Samborskyi.pdf"
          download
        >
          Download CV
        </Button>

        <Button
          variant="outlined"
          startIcon={<GitHubIcon />}
          href="https://github.com/VSsmbrsk"
          target="_blank"
          sx={{
            color: "#8fbc8f",
            border: "3px solid transparent",
            bgcolor: "#fff",
            transition: "0.5s",
            "&:hover": {
              color: "#fff",
              bgcolor: "#8fbc8f",
              border: "3px solid #fff",
            },
          }}
        >
          GitHub
        </Button>
      </Stack>
    </Box>
  );
}

export default HeroSection;
