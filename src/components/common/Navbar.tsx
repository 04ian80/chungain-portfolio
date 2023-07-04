import Menu from './Menu';

const navLinks = ['소개', '기술스택', '프로젝트', '교육/활동'];
const LOGO_TEXT = '종아인의 포트폴리오';

const Logo = () => <h2 className='header__logo'>{LOGO_TEXT}</h2>;

const NavLinks = () => (
  <Menu>
    <Menu.ModalMenu links={navLinks} />
    <Menu.NavLinkMenu links={navLinks} />
  </Menu>
);

const Navbar = ({ children }: { children: React.ReactNode }) => (
  <nav className='header__nav'>{children}</nav>
);

Navbar.NavLinks = NavLinks;
Navbar.Logo = Logo;

export default Navbar;
