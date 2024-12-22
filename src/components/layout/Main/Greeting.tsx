import React from 'react';
import styled from 'styled-components';

const contents = [
  { icon: '🔥', text: '열띈 토론으로 이어지는 코드리뷰를 좋아합니다.' },
  { icon: '💡', text: '사용자에게 편의성을 제공하는 UX를 추구합니다.' },
  { icon: '🚀', text: '주도적이고 협력적인 태도와 효율성을 중시하는 사고방식을 가지고 있습니다.' },
  {
    icon: '🎉',
    text: `문제 발생 시 단순한 가능 여부를 넘어, \n근본 원인과 요구사항을 파악하며 해결하는 데 재미를 느낍니다.`,
  },
];

const Greeting = () => (
  <Wrapper>
    <Title32>
      2년차 프론트엔드 개발자 <b>종아인</b>입니다.
    </Title32>
    <UL>
      {contents.map(content => (
        <Row>
          <p>{content.icon}</p>
          <p>{content.text}</p>
        </Row>
      ))}
    </UL>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title32 = styled.p`
  font-size: 32px;
  font-weight: 500;
  & > b {
    font-weight: 600;
  }
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
`;
const Row = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  white-space: pre;
  p:first-child {
    font-size: 40px;
    font-family: Tossface;
  }
`;
export default Greeting;
