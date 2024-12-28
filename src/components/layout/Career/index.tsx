import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import Summary from './Summary';
import Timeline from './Timeline';
import { breakpoints } from '../../../lib/media';

const Career = () => (
  <Wrapper>
    <Header>
      <Title>
        <a href='https://sije.io/' target='_blank' rel='noreferrer'>
          시제
        </a>
      </Title>
      <P>2023.08 - 재직중 &#40;1년 4개월&#41;</P>
      <Badge>프론트엔드 개발자</Badge>
      <Badge>주임</Badge>
    </Header>
    <Description>
      봉제업 공급망을 누구나 쉽게 사용할 수 있는 솔루션으로 혁신하는 스타트업입니다.
    </Description>
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
  border-radius: 16px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    padding: 40px 56px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 20px;
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
  a {
    text-decoration: none;
    color: ${COLOR.gray900};
    transition: color 0.2s ease;
    &:hover {
      color: ${COLOR.gray800};
    }
  }
`;
const P = styled.p`
  font-size: 0.6em;
  color: ${COLOR.gray800};
  font-weight: 500;
`;
const Badge = styled.div`
  padding: 4px 12px;
  border-radius: 24px;
  background-color: ${COLOR.gray100};
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
const Description = styled.p`
  color: ${COLOR.gray800};
  font-size: 0.6em;
`;
const SubTitle = styled.h3`
  margin: 0;
  font-size: 28px;
  color: ${COLOR.gray900};
  font-size: 0.8em;
`;

export default Career;
