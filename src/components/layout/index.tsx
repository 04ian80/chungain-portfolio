import styled, { css } from 'styled-components';
import { useScrollView } from '../../hooks/useScrollObserver';
import { COLOR } from '../../lib/color';
import { breakpoints } from '../../lib/media';
import Career from './Career';
import Education from './Education';
import Language from './Language';
import Main from './Main';

const navList = ['소개', '경력', '교육/학력', '어학사항'];

const Layout = () => {
  const { currentView, sectionRefs, onChangeView } = useScrollView({ defaultValue: '소개' });

  const handleClickNav = ({ nav }: { nav: string }) => {
    const timer = setTimeout(() => {
      onChangeView(nav);
      return () => clearTimeout(timer);
    }, 800);

    sectionRefs.current[nav]?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container>
        <Inner>
          <Screen $fitContent data-section-id='소개' ref={el => (sectionRefs.current['소개'] = el)}>
            <Main />
          </Screen>
          <Screen $fitContent data-section-id='경력' ref={el => (sectionRefs.current['경력'] = el)}>
            <Heading1>경력</Heading1>
            <Career />
          </Screen>
          <Screen
            $fitContent
            data-section-id='교육/학력'
            ref={el => (sectionRefs.current['교육/학력'] = el)}
          >
            <Heading1>교육/학력</Heading1>
            <Education />
          </Screen>
          <Screen
            $fitContent
            data-section-id='어학사항'
            ref={el => (sectionRefs.current['어학사항'] = el)}
          >
            <Heading1>어학사항</Heading1>
            <Language />
          </Screen>
        </Inner>
        <Nav>
          <ul>
            <TabIndicator $tab={currentView} />
            {navList.map(nav => (
              <Item $active={currentView === nav} key={nav} onClick={() => handleClickNav({ nav })}>
                <button>{nav}</button>
              </Item>
            ))}
          </ul>
        </Nav>
      </Container>
    </>
  );
};

const Container = styled.main`
  padding: 0 20px;
  display: flex;
  position: relative;
  justify-content: center;
  gap: 28px;
  margin-bottom: 20px;
  box-sizing: content-box;
`;
const Inner = styled.div`
  width: 80%;
  max-width: 1280px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;
const Screen = styled.section<{ $fitContent?: boolean }>`
  height: ${({ $fitContent }) => ($fitContent ? 'fit-content' : '100vh')};
  scroll-margin: 80px;
`;
const Heading1 = styled.h1`
  font-size: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px 0;
    border-bottom: 1px solid ${COLOR.gray300};
    font-size: 28px;
  }
`;
const Nav = styled.nav`
  position: sticky;
  top: 20%;
  height: 100%;
  margin-top: 50px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const Item = styled.li<{ $active: boolean }>`
  word-break: keep-all;
  button {
    font-size: 16px;
    color: ${COLOR.gray700};
    cursor: pointer;
    transition: color 0.2s ease;

    ${({ $active }) =>
      $active &&
      css`
        color: ${COLOR.gray950};
      `};
  }
`;
const TabIndicator = styled.div<{ $tab: string }>`
  border: 1px solid ${COLOR.gray950};
  padding: 2px 4px;
  height: 20px;
  width: 34px;
  border-radius: 4px;
  z-index: -1;
  transition: transform 0.2s ease, width 0.2s ease;
  ${({ $tab }) => {
    if ($tab === '소개') {
      return css`
        transform: translateY(30px) translateX(-2px);
      `;
    }
    if ($tab === '경력') {
      return css`
        transform: translateY(59px) translateX(-2px);
      `;
    }
    if ($tab === '교육/학력') {
      return css`
        width: 65px;
        transform: translateY(88px) translateX(-2px);
      `;
    }
    if ($tab === '어학사항') {
      return css`
        width: 62px;
        transform: translateY(117px) translateX(-2px);
      `;
    }
  }};
`;
export default Layout;
