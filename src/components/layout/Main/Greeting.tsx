import styled from 'styled-components';
import { breakpoints } from '../../../lib/media';

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
      <P>
        2년차 프론트엔드 개발자 <b>종아인</b>입니다.
      </P>
    </Title32>
    <UL>
      {contents.map((content, idx) => (
        <Row key={idx} $index={idx}>
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
  border-radius: 16px;
  width: 0;
  height: 40px;
  animation: scale-out 1.4s 1.4s forwards, move-in 1.2s 0.6s forwards;
  font-size: 32px;

  @media (max-width: ${breakpoints.wide}) {
    gap: 8px;
    font-size: 24px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    gap: 8px;
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    gap: 4px;
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    gap: 2px;
    font-size: 14px;
  }

  @keyframes scale-out {
    0% {
      height: 40px;
    }
    100% {
      height: 380px;
    }
  }
  @keyframes move-in {
    0% {
      width: 0;
    }
    100% {
      width: 90%;
    }
  }
`;
const Title32 = styled.div`
  font-size: 1em;
  font-weight: 500;

  & > b {
    font-weight: 600;
  }
`;
const P = styled.p`
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation-name: typing;
  animation-duration: 1s;
  animation-delay: 0.9s;
  animation-timing-function: steps(20);
  animation-fill-mode: forwards;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;
const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  @media (max-width: ${breakpoints.desktop}) {
    gap: 8px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    gap: 4px;
  }
`;
const Row = styled.li<{ $index: number }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8em;
  word-break: keep-all;
  white-space: pre-line;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: fade-in;
  animation-duration: 0.4s;
  animation-delay: ${({ $index }) => `2.${$index}s`};
  p:first-child {
    font-size: 1.6em;
    font-family: Tossface;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
export default Greeting;
