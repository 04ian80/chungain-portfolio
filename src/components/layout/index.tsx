import React, { useRef } from 'react';
import styled from 'styled-components';
import Main from './Main';

const Layout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClickScrollBtn = () => {
    const timer = setTimeout(() => {
      scrollRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'end',
      });
    }, 100);

    return () => clearTimeout(timer);
  };
  return (
    <main>
      <Screen>
        <Main onScrollNextView={handleClickScrollBtn} />
      </Screen>
      <Screen ref={scrollRef}>
        <Main onScrollNextView={handleClickScrollBtn} />
      </Screen>
    </main>
  );
};

const Screen = styled.section<{ $fitContent?: boolean }>`
  height: ${({ $fitContent }) => ($fitContent ? 'fit-content' : '100vh')};
`;
export default Layout;
