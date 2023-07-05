import Menu from './Menu';

const navLinks = [
  { title: '소개', link: '/' },
  { title: '기술스택', link: '/skills' },
  { title: '프로젝트', link: '/project' },
  { title: '교육/활동', link: '/activity' },
];
const LOGO_TEXT = '종아인의 포트폴리오';

const Logo = () => <h2 className='header__logo'>{LOGO_TEXT}</h2>;

const NavLinks = () => (
  <Menu>
    <Menu.ModalMenu navLinks={navLinks} />
    <Menu.NavLinkMenu navLinks={navLinks} />
  </Menu>
);

const Navbar = ({ children }: { children: React.ReactNode }) => (
  <nav className='header__nav'>{children}</nav>
);

Navbar.NavLinks = NavLinks;
Navbar.Logo = Logo;

export default Navbar;
