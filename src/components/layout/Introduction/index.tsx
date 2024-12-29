import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';
import { SubTitle } from '../../common/styles';

const Career = () => {
  return (
    <Wrapper>
      <Header>
        <Title>React와 TypeScript를 주 언어로 사용하고 있는 프론트엔드 개발자입니다.</Title>
        <Description>
          현재 봉제업 솔루션 스타트업에서 초기 개발팀에 속하여, 개발/PoC 및 검증/피드백 수집 과정을
          거쳐 현재 버전업 개발 중에 있습니다.
          <br />
          <br />
          개발자는 자신이 작성한 코드의 의도를 명확히 전달 할 수 있어야 합니다. 그러므로 전반적인
          서비스의 가치를 이해하는 것은 가장 중요한 요소입니다. 기획을 단순히 수용하는 것이 아닌,{' '}
          <b>
            사용자 중심으로 고려하여 사용자의 근본적인 pain point를 찾아 기존 코드를 바탕으로 명세를
            정의하고 코드를 설계해 나갈 수 있는 역량이 저의 강점
          </b>
          입니다. 구현 이전에 기획 미팅에 참여하여 기술적 난제를 사전에 파악하고 더 나은 사용성을
          제안합니다. 더불어, 기획과 비즈니스 로직의 이해를 바탕으로 프론트엔드 신입 온보딩&#40;업무
          프로세스와 코드 구조&#41;을 도맡아 하고있으며, 개발 생산성 향상을 위한 새로운 방법을
          적극적으로 제안하고 도입합니다.
        </Description>
      </Header>
      <Contents>
        <Content $delay={0.4}>
          <SubTitle>
            <Icon>🔄</Icon>
            <p>확장성과 재사용성을 중요시합니다</p>
          </SubTitle>
          <UL>
            <li>
              재사용 가능한 코드 설계가 팀의 개발 생산성을 높이는 핵심이라 생각합니다. 이를 위해{' '}
              <b>Custom Hook과 Compound Pattern을 활용한 컴포넌트를 설계하고 구현한 경험</b>이
              있습니다.
            </li>
            <li>
              개발은 협업이 핵심입니다. 다른 사람의 코드를 이해하고 활용하는 능력, 그리고 내가 아닌
              남의 관점에서 가독성 좋은 코드를 작성하는 것이 매우 중요하다고 생각합니다. 이를
              바탕으로,{' '}
              <b>
                의존성 역전 원칙을 적용하여 Context를 관리하고, 비즈니스 로직에 따라 컴포넌트를
                분리하여 결합도를 낮춘 경험
              </b>
              이 있습니다.
            </li>
          </UL>
        </Content>
        <Content $delay={0.6}>
          <SubTitle>
            <Icon>🤼</Icon>
            <p>커뮤니케이션을 즐깁니다</p>
          </SubTitle>
          <UL>
            <li>
              팀 내에서 원활한 커뮤니케이션을 위해 팀원에게 Git 사용법을 정리 및 설명하여 일관성
              있는 컨벤션을 유지하고 협업을 할 수 있도록 공유한 경험이 있습니다.
            </li>
            <li>
              <b>Notion, Slack, Jira 및 Confluence를 통하여 협업</b>할 수 있으며, 팀원들과 함께 여러
              협업 방안을 제시하고 "어떻게 하면 더 효율적으로 소통할 수 있을까"를 수시로 고민합니다.
            </li>
            <li>
              체계적인 협업 환경을 만들기 위해 회의록과 개발 명세 문서화를 도입했으며, 이를 통해 팀
              간 소통 효율을 높이는데 기여했습니다.
            </li>
          </UL>
        </Content>
        <Content $delay={0.8}>
          <SubTitle>
            <Icon>🔎</Icon>
            <p>파고드는 습관이 있습니다</p>
          </SubTitle>
          <UL>
            <li>
              해결되지 않은 문제가 있다면 풀릴 때까지 파고듭니다. Next.js로 만든 사이드 프로젝트에서
              발생한 next/font 관련 이슈를 해결하고자 font 파일 위치를 바꾸는 등, 다양한 시도를
              해보았지만 해결되지 않아,{' '}
              <b>Next.js 오픈 디스코드 help-forum에 문의하여 버그를 찾아낸 경험</b>이 있습니다.
            </li>
            <li>
              내가 남에게 특정 기술을 정확히 알려주지 못한다면 그 기술은 배우지 않은 것과
              마찬가지입니다. 처음 기술을 접한다면 그 기술에 대해 완전히 이해하고 사용해야 한다는
              마음가짐으로 제가 습득한 지식을 블로그, 또는 팀 내 노션에 정리합니다.
            </li>
          </UL>
        </Content>
        <Content $delay={0}>
          <SubTitle>
            <Icon>💫</Icon>
            <p>애니메이션은 인터페이스에 생명을 불어넣는 마법이라고 믿습니다</p>
          </SubTitle>
          <UL>
            <li>
              애니메이션은 사용자에게 재미를 더하고, 하나의 스토리텔링 방식이며, 사용하고 싶도록
              유도하는 강력한 매력을 가진 요소라고 생각합니다. 저에겐 애니메이션이 단순한 기술이
              아니라 중요한 표현 수단이기에 더 잘하고 싶은 욕심이 많습니다.
            </li>
            <li>
              개발 과정에서 애니메이션 속도를 0.1초 단위로 세심하게 조정하며, 최적의 사용자 경험을
              위해 실시간으로 디자이너와 토론했던 순간은 제게 있어 가장 보람찬 순간 중 하나였습니다.
            </li>
            <li>
              박람회용 데모 버전 개발에서는 *있어빌리티가 중요한 요소였기에,{' '}
              <b>
                CSS와 애니메이션 라이브러리인 Framer Motion을 활용해 단기간 내에 다양한 애니메이션을
                구현
              </b>
              했습니다. 스케줄러 데이터 조회 시 도미노처럼 펼쳐지는 애니메이션과 버튼 클릭을
              유도하는 ping 애니메이션 등, duration과 delay를 세심하게 조정해 화려하면서도 매끄러운
              UI를 완성했습니다. 이를 통해 요구사항을 충족하며{' '}
              <b>모두가 만족하는 결과물을 도출한 경험</b>이 있습니다.
            </li>
            <Annotation>
              *있어빌리티: ‘있어 보인다’와 유틸리티&#40;utility&#41;를 결합한 단어로, 실용성과 기능
              이상의 가치를 전달하기 위해 화면에 시각적 매력과 사용자 경험을 향상시키는 것을
              의미합니다.
            </Annotation>
          </UL>
        </Content>
        <Content $delay={0.2}>
          <SubTitle>
            <Icon>🪄</Icon>
            <p>CSS를 능숙하게 다루며, 꼬인 화면을 풀어내는 게 가장 재밌습니다</p>
          </SubTitle>
          <UL>
            <li>CSS를 다루는 작업을 통해 UI를 완성해가는 과정에서 큰 성취감을 느낍니다.</li>
            <li>
              대시보드와 스케줄러에서 전체 화면에 스크롤이 아닌, 콘텐츠 안에서만 스크롤이 생겨야
              한다는 요구사항이 있었습니다. 기존에는 중첩된 레이아웃이 많아 수정이 어려운 상태였고,
              대부분의 팀원들이 개선하기 어려워했던 부분이었습니다. 이를 해결하기 위해 레이아웃을
              직접 손으로 그리면서 분석하였고, flex와 height 등 CSS 속성을 활용하여 쉽게 문제를
              해결한 경험이 있습니다.
            </li>
            <li>
              카드 목록 UI에 반응형 디자인이 없었기에, Grid 기반 반응형 디자인을 역제안하고 해당
              UI에 대한 기준과 케이스를 정의하였습니다. 디자이너 및 프론트엔드 개발자와 활발히
              소통하며 UI를 개선하였고, 기존에 화면을 벗어났을 레이아웃을 효과적으로 최적화한 경험이
              있습니다.
            </li>
          </UL>
        </Content>
      </Contents>
      {/* {isSeeMore ? (
        <Button onClick={() => setIsSeeMore(false)}>
          간략히 보기 <AiFillCaretUp fill={COLOR.black} />
        </Button>
      ) : (
        <Button onClick={() => setIsSeeMore(true)}>
          더보기 <AiFillCaretDown fill={COLOR.black} />
        </Button>
      )} */}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: white;
  grid-area: introduction;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 40px 56px;
  border-left: 1px solid ${COLOR.gray200};
  line-height: 40px;
  height: 100%;
  box-sizing: border-box;
  opacity: 0;
  animation: fade-in 0.6s 0.4s ease forwards;
  font-size: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 5%;
    line-height: 28px;
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
  }

  @media (max-width: ${breakpoints.xwide}) {
    border-left: none;
    border-top: 1px solid ${COLOR.gray200};
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;
`;
const Title = styled.h2`
  font-size: 1em;
  font-weight: 500;
  word-break: keep-all;
`;
const Description = styled.p`
  font-size: 0.6em;
  line-height: 1.4em;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 8px;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 4px;
  }
`;
const Content = styled.div<{ $delay?: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  opacity: 0;
  animation: ${({ $delay }) => `fade-in 0.6s ${$delay}s ease forwards`};
  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const Icon = styled.p`
  font-size: 1.4em;
  font-family: Tossface;
`;
const UL = styled.ul`
  font-size: 0.6em;
  line-height: 1.6em;
  margin: 0px 24px;
`;
// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   align-self: flex-end;
//   gap: 4px;
//   padding: 4px 8px;
//   border-radius: 16px;
//   border: 1px solid ${COLOR.gray800};
//   cursor: pointer;
//   transition: box-shadow 0.2s ease;
//   &:hover {
//     box-shadow: 0px 5px 18px -2px rgba(0, 0, 0, 0.1);
//   }
// `;
const Annotation = styled.small`
  font-size: 0.8em;
  color: ${COLOR.gray800};
`;

export default Career;
