import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';

const Career = () => (
  <Wrapper>
    <Header>
      <Title>React와 TypeScript를 주 언어로 사용하고 있는 프론트엔드 개발자입니다.</Title>
      <Description>
        현재 봉제업 솔루션 스타트업에서 초기 개발팀에 속하여, 개발 → PoC 및 검증 → 피드백 수집
        과정을 거쳐 현재 버전업 개발 중입니다.
      </Description>
    </Header>
    <Contents>
      <Content>
        <SubTitle>
          <Icon>🔄</Icon>
          <p>확장성과 재사용성을 중요시합니다</p>
        </SubTitle>
        <UL>
          <li>
            코드 한 줄이 모두의 개발 생산성을 좌우하기 때문에 기획의 의도를 정확하고 깊게 파악하는
            것은 중요한 요소입니다. 이를 고려하여 Custom Hook과 Component를 만들어 사용한 경험이
            있습니다.
          </li>
          <li>
            개발은 협업이 절반입니다. 다른 사람의 코드를 이해하고 사용하는 것, 내가 아닌 남의
            관점에서 가독성이 좋은 코드를 구성하는 것이 제일 중요한 요소 중 하나입니다.
          </li>
        </UL>
      </Content>
      <Content>
        <SubTitle>
          <Icon>🤼</Icon>
          <p>커뮤니케이션을 즐깁니다</p>
        </SubTitle>
        <UL>
          <li>
            팀 내에서 원활한 커뮤니케이션을 위해 팀원에게 Git 사용법을 정리 및 설명하여 일관성 있는
            컨벤션을 유지하고 협업을 할 수 있도록 공유한 경험이 있습니다.
          </li>
          <li>
            Notion, Slack, Jira 및 Confluence를 통하여 협업할 수 있으며, 팀원들과 함께 여러 협업
            방안을 제시하고 "어떻게 하면 더 효율적으로 소통할 수 있을까"를 수시로 고민합니다.
          </li>
          <li>
            팀 간의 소통, 기능/개발의 명세에 대해 문서화 하여 상호 간의 소통을 더 원활하게 만드는
            방법에 집중합니다.
          </li>
        </UL>
      </Content>
      <Content>
        <SubTitle>
          <Icon>🔎</Icon>
          <p>파고드는 습관이 있습니다</p>
        </SubTitle>
        <UL>
          <li>
            해결되지 않은 문제가 있다면 풀릴 때까지 파고듭니다. Next.js로 만든 사이드 프로젝트에서
            발생한 next/font 관련 이슈를 해결하고자 font를 넣는 위치를 바꾸는 등, 다양한 시도를
            해보았지만 해결되지 않아, Next.js 오픈 디스코드 help-forum에 문의하여 버그를 찾아낸
            경험이 있습니다.
          </li>
          <li>
            내가 남에게 특정 기술을 정확히 알려주지 못한다면 그 기술은 배우지 않은 것과
            마찬가지입니다. 처음 기술을 접한다면 그 기술에 대해 완전히 이해하고 사용해야 한다는
            마음가짐으로 제가 습득한 지식을 블로그, 또는 팀 내 노션에 정리합니다.
          </li>
        </UL>
      </Content>
    </Contents>
  </Wrapper>
);

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 40px 56px;
  box-shadow: 0 5px 18px -2px rgba(0, 0, 0, 0.1);
  font-size: 28px;
  line-height: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 5%;
    line-height: 28px;
    font-size: 20px;
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
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;
const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 0.8em;
  font-weight: 500;
  color: ${COLOR.gray900};
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

export default Career;
