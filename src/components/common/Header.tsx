import Navbar from './Navbar';

const Header = () => (
  <header className='header'>
    <Navbar>
      <Navbar.Logo />
      <Navbar.NavLinks />
    </Navbar>
  </header>
);

export default Header;
