import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import Summary from './Summary';
import Timeline from './Timeline';
import { breakpoints } from '../../../lib/media';

const Career = () => (
  <Wrapper>
    <Header>
      <Title>시제</Title>
      <P>2023.08 - 재직중 &#40;1년 4개월&#41;</P>
      <Badge>프론트엔드 개발자</Badge>
      <Badge>주임</Badge>
    </Header>
    <Divider />
    <Content>
      <SubTitle>담당해온 업무</SubTitle>
      <Summary />
    </Content>
    <Content>
      <SubTitle>Timeline</SubTitle>
      <Timeline />
    </Content>
  </Wrapper>
);

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 56px;
  box-shadow: 0 5px 18px -2px rgba(0, 0, 0, 0.1);
  font-size: 32px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    padding: 5px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;
const Title = styled.h2`
  font-size: 1em;
  /* font-size: 32px; */
  /* @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  } */
`;
const P = styled.p`
  /* font-size: 20px; */
  font-size: 0.6em;
  color: ${COLOR.gray800};
  font-weight: 500;
`;
const Badge = styled.div`
  padding: 4px 12px;
  border-radius: 24px;
  background-color: ${COLOR.gray100};
  /* font-size: 16px; */
  font-size: 0.5em;
  line-height: 30px;
`;
const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed ${COLOR.gray700};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 8px;
`;

const SubTitle = styled.h3`
  margin: 0;
  font-size: 28px;
  color: ${COLOR.gray900};
  font-size: 0.8em;
`;

export default Career;
