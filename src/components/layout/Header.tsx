import styled from 'styled-components';
import { breakpoints } from '../../lib/media';
import GiHub from '../svg/GiHub';
import Velog from '../svg/Velog';

const LOGO_TEXT = '종아인의 포트폴리오';

// const contactData = [
//   { icon: 'github', color: '#181717', size: 24, link: 'https://github.com/04ian80' },
//   { icon: 'velog', color: '#20C997', size: 24, link: 'https://velog.io/@a_in' },
// ];

const Header = () => {
  const IconMap = { github: GiHub, velog: Velog };
  // const iconEl = (icon: keyof typeof IconMap, { color, size }: SVGType) =>
  //   React.createElement(IconMap[icon], { color, size });

  return (
    <Wrapper>
      <Inner>
        <Heading1>{LOGO_TEXT}</Heading1>
        {/* <UL>
          {contactData.map(({ icon, color, size, link }, idx) => (
            <li key={idx}>
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
        </UL> */}
      </Inner>
    </Wrapper>
  );
};

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  max-width: 1280px;
`;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 32px;
  background: rgba(255, 255, 255, 0.2);
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1;
  font-size: 24px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const Heading1 = styled.h1`
  font-size: 1em;
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
