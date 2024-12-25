import { useRef } from 'react';
import styled from 'styled-components';
import Career from './Career';
import Introduction from './Introduction';
import Main from './Main';
import Skills from './Skills';
import { breakpoints } from '../../lib/media';

const Layout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClickScrollBtn = () => {
    const timer = setTimeout(() => {
      scrollRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }, 100);

    return () => clearTimeout(timer);
  };
  return (
    <Container>
      <Screen $fitContent>
        <Main onScrollNextView={handleClickScrollBtn} />
      </Screen>
      <Screen ref={scrollRef} $fitContent>
        <Skills />
      </Screen>
      <Heading1>경력</Heading1>
      <Screen $fitContent>
        <Career />
      </Screen>
      <Heading1>소개</Heading1>
      <Screen $fitContent>
        <Introduction />
      </Screen>
    </Container>
  );
};

const Container = styled.main`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 20px;
`;
const Screen = styled.section<{ $fitContent?: boolean }>`
  height: ${({ $fitContent }) => ($fitContent ? 'fit-content' : '100vh')};
`;
const Heading1 = styled.h1`
  font-size: 44px;
  padding: 0 56px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 32px;
    font-size: 24px;
  }
`;
export default Layout;
