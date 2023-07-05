import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import useToggle from '../../hooks/useToggle';
import type { SVGType } from '../../lib/types';
import GiHub from '../svg/GiHub';
import Velog from '../svg/Velog';

export type NavLinksType = { navLinks: { title: string; link: string; id: number }[] };

const contactData = [
  { icon: 'github', color: '#181717', size: 24, link: 'https://github.com/04ian80' },
  { icon: 'velog', color: '#20C997', size: 24, link: 'https://velog.io/@a_in' },
];

const Menu = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const NavLinkMenu = ({ navLinks }: NavLinksType) => (
  <menu className='nav__bar nav__bar--horizontal' aria-label='메뉴 바'>
    <Links navLinks={navLinks} />
  </menu>
);

const ModalMenu = ({ navLinks }: NavLinksType) => {
  const [isModalOpen, handleToggleModal] = useToggle();

  return (
    <section className='nav__menu'>
      <AiOutlineMenu size='20' role='button' aria-label='메뉴 버튼' onClick={handleToggleModal} />
      {isModalOpen && (
        <menu aria-label='메뉴 모달' className='nav__menu--modal'>
          <Links navLinks={navLinks} />
        </menu>
      )}
    </section>
  );
};

const Links = ({ navLinks }: NavLinksType) => {
  const [isNavClicked, setIsNavClicked] = useState(navLinks[0].id);
  const IconMap = { github: GiHub, velog: Velog };
  const iconEl = (icon: keyof typeof IconMap, { color, size }: SVGType) =>
    React.createElement(IconMap[icon], { color, size });

  return (
    <ul className='nav__links'>
      {navLinks.map(({ title, link, id }) => (
        <Link
          key={id}
          to={link}
          onClick={() => setIsNavClicked(id)}
          className={`nav__links--link ${isNavClicked === id && `link-active`}`}
        >
          <li key={id} aria-label={title}>
            {title}
          </li>
        </Link>
      ))}
      <ul className='nav--contact-list'>
        {contactData.map(({ icon, color, size, link }) => (
          <li>
            <a
              href={link}
              target='_blank'
              rel='noopenner noreferrer'
              aria-label={`${icon}으로 이동`}
            >
              {iconEl(icon as keyof typeof IconMap, { color, size })}
            </a>
          </li>
        ))}
      </ul>
    </ul>
  );
};

Menu.ModalMenu = ModalMenu;
Menu.NavLinkMenu = NavLinkMenu;

export default Menu;
