import ChangeButtonColor from "../ChangeButtonColor/ChangeButtonColor";
import Link from "../Link/Link";

const Footer = () => (
  <footer className="footer">
    <h1 className="logo">My test SPA</h1>
    <ul>
      <li>
        Phone number: <Link href="tel:+1234567890">+1234567890</Link>
      </li>
      <li>
        Email:{" "}
        <Link href="mailto: myemail@example.com">myemail@example.com</Link>
      </li>
      <li>
        Git: <Link href="https://github.com/">https://github.com/</Link>
      </li>
    </ul>
    <ChangeButtonColor />
  </footer>
);

export default Footer;
