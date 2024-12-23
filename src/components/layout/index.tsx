import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from './Main';
import Skills from './Skills';

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
      <Screen>
        <Main onScrollNextView={handleClickScrollBtn} />
      </Screen>
      <Screen ref={scrollRef}>
        <Skills />
      </Screen>
    </Container>
  );
};

const Container = styled.main`
  padding: 0 20px;
`;
const Screen = styled.section<{ $fitContent?: boolean }>`
  height: ${({ $fitContent }) => ($fitContent ? 'fit-content' : '100vh')};
`;
export default Layout;
