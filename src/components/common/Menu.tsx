import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import useToggle from '../../hooks/useToggle';
import type { SVGType } from '../../lib/types';
import GiHub from '../svg/GiHub';
import Velog from '../svg/Velog';

export type NavLinksType = { links: string[] };

const contactData = [
  { icon: 'github', color: '#181717', size: 24, link: 'https://github.com/04ian80' },
  { icon: 'velog', color: '#20C997', size: 24, link: 'https://velog.io/@a_in' },
];

const Menu = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const NavLinkMenu = ({ links }: NavLinksType) => (
  <menu className='nav__bar nav__bar--horizontal' aria-label='메뉴 바'>
    <Links links={links} />
  </menu>
);

const ModalMenu = ({ links }: NavLinksType) => {
  const [isModalOpen, handleToggleModal] = useToggle();

  return (
    <section onClick={handleToggleModal} className='nav__menu'>
      <AiOutlineMenu size='20' role='button' aria-label='메뉴 버튼' />
      {isModalOpen && (
        <menu aria-label='메뉴 모달' className='nav__menu--modal'>
          <Links links={links} />
        </menu>
      )}
    </section>
  );
};

const Links = ({ links }: NavLinksType) => {
  const IconMap = { github: GiHub, velog: Velog };
  const iconEl = (icon: keyof typeof IconMap, { color, size }: SVGType) =>
    React.createElement(IconMap[icon], { color, size });

  return (
    <ul className='nav--links'>
      {links.map((link, id) => (
        <li key={id} aria-label={link}>
          {link}
        </li>
      ))}
      <ul className='nav--contact-list'>
        {contactData.map(({ icon, color, size, link }) => (
          <li>
            <a href={link} target='_blank' rel='noreferrer' aria-label={`${icon}으로 이동`}>
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