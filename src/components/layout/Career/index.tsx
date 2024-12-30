import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';
import Summary from './Summary';

const Career = () => {
  return (
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
        봉제업 공급망을 누구나 쉽게 사용할 수 있는 솔루션으로 혁신하는 스마트 팩토리 솔루션
        스타트업입니다.
      </Description>
      <Divider />
      <Content>
        <Summary />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 24px;
  border-radius: 16px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
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
    color: ${COLOR.primary900};
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

export default Career;
