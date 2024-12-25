import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';

const Timeline = () => (
  <Flex>
    <Contents>
      <Row>
        <div>현재</div>
        <ul>
          <li>
            베트남 봉제 공장 방문 설치에 참여하며, 현장에서 발생하는 프론트엔드 이슈를 실시간으로
            대응
          </li>
          <li>현장 피드백 및 시행착오 등 몸소 경험한 것을 정리하여 실시간으로 개발팀에 전달</li>
          <li>봉제 공장 현장에서 받은 피드백을 수렵하여 Version 2 개발</li>
          <li>
            티비 웹뷰에서 화면이 깨졌던 시행착오를 경험 삼아, 웹뷰 환경에서도 안정적인 표시를 위해
            반응형 디자인을 적용하여 개발
          </li>
          <li>반응형 디자인과 애니메이션 구현에 중점을 둔 랜딩페이지 개발</li>
        </ul>
      </Row>
      <Row>
        <div>2024.01</div>
        <ul>
          <li>봉제 공장 생산성 실시간 모니터링 시스템 개발</li>
          <li>
            한국무역회사의 베트남 공장 PoC 프로그램을 짧은 기간 내에 개발하며, 팀워크와 합의의
            가치를 경험
          </li>
        </ul>
      </Row>
      <Row>
        <div>2023.10</div>
        <ul>
          <li>봉제업 ERP 시스템 개발</li>
          <ul>
            <li>기존 외주로 진행되었던 프로젝트 추가 개발 및 유지 보수</li>
            <li>디자이너/기획자와 실시간으로 소통하며 업데이트되는 UI/UX 및 기능 개선</li>
          </ul>
          <li>2023년 우수사원상 수상</li>
        </ul>
      </Row>
      <Row>
        <div>2023.08</div>
        <ul>
          <li>중국 봉제업 박람회&#40;CISMA&#41;에서 시연할 프로그램 개발</li>
          <ul>
            <li>
              기존 서비스에서 빠르게 애니메이션을 적용할 수 있도록 러닝 커브가 낮고, 다양한 모션을
              처리할 수 있는 framer-motion 라이브러리를 사용하여 참관객의 시선을 끌 만한
              박람회용데모 버전 프로그램 개발
            </li>
            <li>다국어 라이브러리 i18n을 활용하여 다국어 적용 및 언어팩 관리</li>
          </ul>
          <li>중국 봉제업 박람회&#40;CISMA&#41; 참여</li>
          <ul>
            <li>인터넷 환경이 열악한 곳에서 박람회 용 데모 프로그램 세팅 및 실시간 에러 대응</li>
            <li>
              나흘간 박람회 현장에서 100여 명의 참관객에게 프로그램 시연 및 설명하여 48명의 고객
              유치
            </li>
          </ul>
        </ul>
      </Row>
    </Contents>
    <Images>
      <Thumbnail>
        <Img
          src='/image/main/vietnam-thumbnail.png'
          // width={280}
          // height={210}
          alt='베트남에서 실무진 교육 이미지'
        />
        <Caption>봉제공장에서 실무진에게 교육 진행</Caption>
      </Thumbnail>
      <Thumbnail>
        <Img
          src='/image/main/mvp-thumbnail.png'
          //  width={280} height={210}
          alt='우수사원상 이미지'
        />
        <Caption>우수사원상 수상</Caption>
      </Thumbnail>
      <Thumbnail>
        <Img
          src='/image/main/china-thumbnail.png'
          // width={280}
          // height={210}
          alt='중국 박람회 참여 이미지'
        />
        <Caption>박람회에서 참관객에게 프로그램 시연</Caption>
      </Thumbnail>
    </Images>
  </Flex>
);

const Flex = styled.div`
  display: flex;
  gap: 24px;
  line-height: 40px;
  @media (max-width: ${breakpoints.wide}) {
    flex-direction: column-reverse;
  }
  @media (max-width: ${breakpoints.tablet}) {
    line-height: 20px;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 0.5em;
  line-height: 1.6em;
  font-weight: 500;
  div {
    display: flex;
    min-width: 18%;
    color: ${COLOR.gray800};
  }
  ul {
    margin: 0;
    color: ${COLOR.gray950};
  }
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(auto-fill, 200px));
  column-gap: 0.2em;

  @media (max-width: ${breakpoints.wide}) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
`;
const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100px;
  gap: 8px;
`;
const Img = styled.img`
  object-fit: cover;
`;
const Caption = styled.p`
  font-size: 0.4em;
  color: ${COLOR.gray800};
  line-height: 1.2em;
`;

export default Timeline;
