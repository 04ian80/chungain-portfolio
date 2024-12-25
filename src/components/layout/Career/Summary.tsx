import styled from 'styled-components';

const Summary = () => (
  <div>
    <UL>
      <li>
        사내 초기 프론트엔드 개발자로 입사하여 기존 외주로 진행되었던 프로젝트{' '}
        <Highlight>추가 개발 및 유지보수</Highlight>
      </li>

      <li>
        빠르게 배포되어야 하는 환경에서 QA 단계에서 발생하는 버그를 줄이고자{' '}
        <Highlight>테스트 코드 도입 주도</Highlight>
      </li>
      <li>기존 테스트 코드 환경에서 실제 API를 사용하지 않도록 MSW를 활용하여 mock 서버 구축</li>

      <li>UI 테스팅 툴 Storybook 도입을 주도하여 공통 컴포넌트 설계 및 개발</li>
      <ul>
        <li>
          디자인과 구현 간의 불일치로 평균 3회 진행되던 QA를 스토리북 도입을 통해{' '}
          <Highlight>67% 감소시켜</Highlight>, 1회로 줄이며 <Highlight>개발 생산성 향상</Highlight>
        </li>
      </ul>

      <li>이후에 합류할 팀원의 신속한 적응을 돕기 위해 온보딩 설계 및 문서 작성 주도</li>

      <li>기존 구두로 진행되었던 QA 방식을 일관성 있게 개선하고자, Release Note 작성</li>
      <ul>
        <li>평균 3번의 QA와 불필요한 커뮤니케이션이 반복되는 문제 발생</li>
        <li>
          이를 해결하기 위해 Release Note를 도입하여 업데이트 내역과 수정 사유를 기록하고, 이를 통해
          QA 횟수를 줄였으며, 기획팀과의 커뮤니케이션에서 명확한 근거를 제시하며 업무의 일관성과
          효율성을 확보
        </li>
      </ul>

      <li>해외에서 열리는 박람회에 참가하여 프로그램 설명 및 시연. 사용자 피드백 수립 및 전달</li>
      <li>
        스프린트 도입, 개발 명세서 작성, 노션 활용 등 여러 시도할 방안을 제시. 협업의 효율성을
        높이기 위한 팀 활동 모두 적극 참여
      </li>
      <li>
        데이터베이스 등 노션의 여러 가지 기능으로 API 문서 작성/기획팀과의 협업 툴로써 적극적으로 팀
        내에 전도 및 활용
      </li>
    </UL>
  </div>
);

const UL = styled.ul`
  margin: 0;
  font-size: 0.6em;
  li {
    line-height: 1.6em;
  }
`;
const Highlight = styled.span`
  background-color: #fffccd70;
  font-weight: 500;
`;

export default Summary;
