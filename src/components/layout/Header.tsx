import styled from 'styled-components';
import GiHub from '../svg/GiHub';
import Velog from '../svg/Velog';
import React from 'react';
import type { SVGType } from '../../lib/types';

const LOGO_TEXT = '종아인의 포트폴리오';

const contactData = [
  { icon: 'github', color: '#181717', size: 24, link: 'https://github.com/04ian80' },
  { icon: 'velog', color: '#20C997', size: 24, link: 'https://velog.io/@a_in' },
];

const Header = () => {
  const IconMap = { github: GiHub, velog: Velog };
  const iconEl = (icon: keyof typeof IconMap, { color, size }: SVGType) =>
    React.createElement(IconMap[icon], { color, size });

  return (
    <Wrapper>
      <Heading1>{LOGO_TEXT}</Heading1>
      <UL>
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
      </UL>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 20px;
`;

const Heading1 = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
  margin: 0;
`;

export default Header;
