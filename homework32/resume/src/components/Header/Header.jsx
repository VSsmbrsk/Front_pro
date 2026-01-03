import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import logo from "../../assets/images/logo-header.svg";
import githubIcon from "../../assets/images/github-icon.svg";
import linkedinIcon from "../../assets/images/linkedin-icon.svg";

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box component="img" alt="Logo" src={logo} />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button component={NavLink} to="/">
            Home
          </Button>
          <Button component={NavLink} to="/about">
            About
          </Button>
          <Button component={NavLink} to="/contacts">
            Contacts
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Link
            href="https://github.com/VSsmbrsk "
            target="_blank"
            underline="none"
          >
            <Box component="img" alt="GitHub Icon" src={githubIcon} />
          </Link>
          <Link
            href="https://linkedin.com/in/vadym-samborskyi-232896373"
            target="_blank"
            underline="none"
          >
            <Box component="img" alt="LinkedIn Icon" src={linkedinIcon} />
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

/*const Header = () => (
  <header className='header'>
    <h1>My first SPA</h1>
    <ul className='header__logo'>
      <li>
        <Link href='/'>Main</Link>
      </li>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/contacts'>Contacts</Link>
      </li>
    </ul>
  </header>
);
export default Header;*/
