import ChangeButtonColor from "../ChangeButtonColor/ChangeButtonColor";
import Link from "../Link/Link";

const Header = () => (
  <header className="header">
    <h1>My test SPA</h1>
    <nav>
      <ul className="header__nav">
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
    <ChangeButtonColor />
  </header>
);
export default Header;
