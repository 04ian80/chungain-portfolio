import styled from 'styled-components';
import { breakpoints } from '../../../lib/media';
import { COLOR } from '../../../lib/color';

const Greeting = () => (
  <Wrapper>
    <Inner>
      <Title32>
        <P>
          2년차 프론트엔드 개발자 <b>종아인</b>입니다.
        </P>
      </Title32>
      <UL>
        {contents.map((content, idx) => (
          <Row key={idx} $index={idx}>
            • <p>{content.text}</p>
          </Row>
        ))}
      </UL>
    </Inner>
  </Wrapper>
);

const Wrapper = styled.div`
  grid-area: greeting;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 5px 18px -2px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  padding: 28px;
  border-radius: 16px;

  box-sizing: border-box;
`;
const Inner = styled.div`
  gap: 16px;
  width: 0;
  height: 40px;
  transform: will;
  animation: scale-out 1.4s 1.4s forwards, move-in 1.2s 0.6s forwards;
  will-change: height, width;
  /* font-size: 14px; */

  @media (min-width: ${breakpoints.mobile}) {
    gap: 2px;
    font-size: 12px;
  }
  @media (min-width: ${breakpoints.tablet}) {
    gap: 4px;
    font-size: 14px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    gap: 8px;
    font-size: 16px;
  }
  @media (min-width: ${breakpoints.wide}) {
    gap: 8px;
    font-size: 18px;
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
  font-size: 2em;
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
  will-change: width;
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
  gap: 24px;
  padding: 0;
  @media (max-width: ${breakpoints.desktop}) {
    gap: 16px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    gap: 8px;
  }
`;
const Row = styled.li<{ $index: number }>`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1em;
  word-break: keep-all;
  white-space: pre-line;
  opacity: 0;
  cursor: default;
  animation-fill-mode: forwards;
  animation-name: fade-in;
  animation-duration: 0.4s;
  animation-delay: ${({ $index }) => `2.${$index}s`};
  will-change: transform;
  color: ${COLOR.gray900};

  p {
    font-family: Tossface;
    font-size: 1.6em;
  }

  p:hover {
    transition: transform 0.2s ease;
    transform: translateY(-2px);
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

const Highlight = styled.span`
  font-weight: 500;
`;

export default Greeting;

const contents = [
  {
    icon: '🔥',
    text: (
      <>
        열띈 토론으로 이어지는 <Highlight>코드리뷰</Highlight>를 좋아합니다.
      </>
    ),
  },
  {
    icon: '❤️',
    text: (
      <>
        사용자에게 <Highlight>편의성을 제공하는 UX를 추구</Highlight>합니다.
      </>
    ),
  },
  {
    icon: '🚣‍♀️',
    text: (
      <>
        <Highlight>주도적이고 협력적인 태도</Highlight>와 <Highlight>효율성</Highlight>을 중시하는
        사고방식을 가지고 있습니다.
      </>
    ),
  },
  {
    icon: '🎉',
    text: (
      <>
        문제 발생 시 단순한 가능 여부를 넘어, <br />
        <Highlight>근본적인 원인과 요구사항을 파악하며 해결</Highlight>하는 데 재미를 느낍니다.
      </>
    ),
  },
];
