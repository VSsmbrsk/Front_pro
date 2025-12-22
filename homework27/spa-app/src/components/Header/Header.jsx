import ChangeButtonColor from '../ChangeButtonColor/ChangeButtonColor';
import Link from '../Link/Link';

const Header = () => (
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
    <ChangeButtonColor />
  </header>
);
export default Header;