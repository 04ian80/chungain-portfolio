import styled from 'styled-components';
import { breakpoints } from '../../lib/media';

const LOGO_TEXT = '종아인의 포트폴리오';

/* NOTE: 프로필에 링크가 이미 있어서 없어도 될 것 같음. 임시 주석 */
// const contactData = [
//   { icon: 'github', color: '#181717', size: 24, link: 'https://github.com/04ian80' },
//   { icon: 'velog', color: '#20C997', size: 24, link: 'https://velog.io/@a_in' },
// ];
// const IconMap = { github: GiHub, velog: Velog };
// const iconEl = (icon: keyof typeof IconMap, { color, size }: SVGType) =>
//   React.createElement(IconMap[icon], { color, size });

const Header = () => (
  <Wrapper>
    <Heading1>{LOGO_TEXT}</Heading1>
  </Wrapper>
);

const Wrapper = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(5px);
  z-index: 1;
  font-size: 24px;
  box-sizing: border-box;
  padding: 18px 32px;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }
`;
const Heading1 = styled.h1`
  font-size: 1em;
  margin: 0;
`;

export default Header;
