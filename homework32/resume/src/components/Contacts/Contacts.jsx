import { Box, Container, Typography, Stack, Link, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";

export default function Contacts() {
  return (
    <Box
      component="section"
      id="contacts"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" gutterBottom>
          Contacts
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          I am open to junior frontend opportunities, internships, and freelance
          projects. Feel free to reach out — I’ll be happy to connect.
        </Typography>

        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon />
            <Link
              href="mailto:vadimsamborskij43@gmail.com"
              underline="hover"
              sx={{ color: "#000", fontFamily: "Oswald, sans-serif" }}
            >
              vadimsamborskij43@gmail.com
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <TelegramIcon />
            <Link
              href="https://t.me/vadim_smbrsk"
              target="_blank"
              underline="hover"
              sx={{ color: "#000", fontFamily: "Oswald, sans-serif" }}
            >
              t.me/vadim_smbrsk
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <GitHubIcon />
            <Link
              href="https://github.com/VSsmbrsk"
              target="_blank"
              underline="hover"
              sx={{ color: "#000", fontFamily: "Oswald, sans-serif" }}
            >
              github.com/VSsmbrsk
            </Link>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <LinkedInIcon />
            <Link
              href="https://linkedin.com/in/vadym-samborskyi-232896373"
              target="_blank"
              underline="hover"
              sx={{ color: "#000", fontFamily: "Oswald, sans-serif" }}
            >
              linkedin.com/in/vadym-samborskyi-232896373
            </Link>
          </Stack>
        </Stack>

        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          sx={{
            bgcolor: "#000",
            border: "3px solid #fff",
            color: "#fff",
            transition: "0.5s",
            mt: 4,
            "&:hover": {
              bgcolor: "#fff",
              color: "#000",
              border: "3px solid #000",
            },
          }}
          href="/files/Resume-Vadym-Samborskyi.pdf"
          target="_blank"
        >
          Download CV
        </Button>
      </Container>
    </Box>
  );
}
