import styled from 'styled-components';
import { Content, Contents, Icon, SubTitle, UL } from '../../common/styles';
import { COLOR } from '../../../lib/color';

const Summary = () => {
  return (
    <div>
      <Contents>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <p>프론트엔드 개발</p>
          </SubTitle>
          <UL>
            <li>반응형 디자인과 애니메이션 구현에 중점을 둔 랜딩페이지 개발 중</li>
            <li>
              사내 초기 프론트엔드 개발자로 입사하여 기존 외주로 진행되었던 프로젝트{' '}
              <Highlight>추가 개발 및 유지보수</Highlight>
            </li>

            <li>
              빠르게 배포되어야 하는 환경에서 QA 단계에서 발생하는 버그를 줄이고자{' '}
              <Highlight>테스트 코드 도입 주도</Highlight>
            </li>
            <li>
              기존 테스트 코드 환경에서 실제 API를 사용하지 않도록 MSW를 활용하여 mock 서버 구축
            </li>

            <li>UI 테스팅 툴 Storybook 도입을 주도하여 공통 컴포넌트 설계 및 개발</li>
            <ul>
              <li>
                디자인과 구현 간의 불일치로 평균 3회 진행되던 QA를 스토리북 도입을 통해{' '}
                <Highlight>67% 감소시켜</Highlight>, 1회로 줄이며{' '}
                <Highlight>개발 생산성 향상</Highlight>
              </li>
            </ul>
          </UL>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <p>
              <Anchor
                href='https://www.fashion-tokyo.jp/autumn/ko-kr.html'
                target='_blank'
                rel='noreferrer'
              >
                일본 패션 무역 박람회&#40;FaW&#41;
              </Anchor>{' '}
              참가
            </p>
          </SubTitle>
          <UL>
            <li>
              일본 도쿄에서 열린 패션 무역 박람회에 참가하여 솔루션 설명 및 시연. 사용자 피드백 수립
              및 전달
            </li>
          </UL>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <p>봉제 공장 생산성 실시간 모니터링 시스템 개발 및 현장 설치</p>
          </SubTitle>
          <UL>
            <li>
              베트남 봉제 공장 방문 설치에 프론트엔드 대표로 참여하며, 현장에서 발생하는{' '}
              <Highlight>프론트엔드 이슈를 실시간으로 대응</Highlight>
            </li>
            <li>봉제 공장 현장에서 받은 피드백을 수렵하여 Version 2 개발</li>
            <li>
              티비 웹뷰에서 화면이 깨졌던 시행착오를 경험 삼아, 웹뷰 환경에서도 안정적인 표시를 위해
              반응형 디자인을 적용하여 개발
            </li>

            <li>
              베트남 공장 PoC&#40;Proof of Concept&#41;를 위한 시스템을 짧은 기간 내에 개발하며,{' '}
              <Highlight>팀워크와 합의의 가치를 경험</Highlight>
            </li>
            <li>
              베트남 공장 실무진에게{' '}
              <Highlight>
                시스템 교육을 진행하여 현장 피드백을 수집하고 전파하는 역할을 수행
              </Highlight>
            </li>
          </UL>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <p>봉제업 ERP 시스템 개발</p>
          </SubTitle>
          <UL>
            <li>기존 외주로 진행되었던 프로젝트 추가 개발 및 유지 보수</li>
            <li>
              디자이너/기획자와 <Highlight>양방향으로 소통</Highlight>하며 업데이트되는 UI/UX 및
              기능 개선
            </li>
          </UL>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <p>
              <Anchor href='https://en.cisma.com.cn/' target='_blank' rel='noreferrer'>
                중국 봉제업 박람회(CISMA)
              </Anchor>{' '}
              데모 개발 및 참여
            </p>
          </SubTitle>
          <UL>
            <li>입사 두달만에 동시에 중국 상하이에서 열린 봉제업 스마트 팩토리 박람회에 참여</li>
            <li>
              기존 서비스에서 빠르게 애니메이션을 적용할 수 있도록 러닝 커브가 낮고, 다양한 모션을
              처리할 수 있는 framer-motion 라이브러리를 사용하여 참관객의 시선을 끌 만한 박람회용
              데모 버전 솔루션 개발
            </li>
            <li>
              다국어 라이브러리 i18n을 활용하여 <Highlight>다국어 적용 및 언어팩 관리</Highlight>
            </li>
            <li>
              나흘간 박람회 현장에서 100여 명의 참관객에게 솔루션 시연 및 설명하여{' '}
              <Highlight>48명의 고객 유치</Highlight>
              <ul>
                <li>
                  기존에 도입 사례가 없어 현실성을 확신할 수 없던 상황에서, 박람회에서 큰 관심을
                  얻으며 성공적으로 마무리
                </li>
              </ul>
            </li>
            <li>
              인터넷 환경이 열악한 박람회 현장에서{' '}
              <Highlight>솔루션 서버 세팅 보조 및 실시간 에러 대응</Highlight>
            </li>
          </UL>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <p>업무 프로세스 개선</p>
          </SubTitle>
          <UL>
            <li>
              데이터베이스 등 노션의 여러 가지 기능으로 API 문서 작성/기획팀과의 협업 툴로써
              적극적으로 팀 내에 전도 및 활용
            </li>
            <li>
              스프린트 도입 시도 및 개발 명세서 작성, 노션 활용 등 여러 시도할 방안을 제시. 협업의
              효율성을 높이기 위한 팀 활동 모두 적극 참여
            </li>
            <li>기존 구두로 진행되었던 QA 방식을 일관성 있게 개선하고자, Release Note 작성</li>
            <ul>
              <li>평균 3번의 QA와 불필요한 커뮤니케이션이 반복되는 문제 발생</li>
              <li>
                이를 해결하기 위해 Release Note를 도입하여 업데이트 내역과 수정 사유를 기록. 이를
                통해 <Highlight>평균 3번 반복되던 QA 횟수를 1번으로 감소</Highlight>하였으며,
                기획팀과의 커뮤니케이션에서 명확한 근거를 제시하며{' '}
                <Highlight>업무의 일관성과 효율성을 확보</Highlight>
              </li>
            </ul>
          </UL>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <p>그 외</p>
          </SubTitle>
          <UL>
            <li>
              이후에 합류할 팀원의 신속한 적응을 돕기 위해{' '}
              <Highlight>온보딩 설계 및 문서 작성 주도</Highlight>
            </li>
            <li>2023년 우수사원상 수상</li>
          </UL>
        </Content>
      </Contents>
    </div>
  );
};

// const UL = styled.ul`
//   margin: 0;
//   font-size: 1em;
//   li {
//     font-size: 0.6em;
//     line-height: 1.6em;
//   }
// `;
const Highlight = styled.span`
  background-color: #fffccd70;
  font-weight: 500;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: ${COLOR.primary900};
  transition: color 0.2s ease;
  &:hover {
    color: ${COLOR.gray800};
  }
`;
export default Summary;
