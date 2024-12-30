import React from 'react';
import { Content, Contents, Icon, SubTitle, UL } from '../../common/styles';
import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';

const Education = () => {
  return (
    <Wrapper>
      <Contents>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <Text>
              <p>원티드 프리온보딩 프론트엔드 인턴십 10차</p>
              <Time>&#40;2023.04 ~ 2023.05&#41;</Time>
            </Text>
          </SubTitle>
          <Caption>
            동료들과 함께 다양한 기술 과제를 4주 동안 수행하며, 협업 역량과 기술 과제 해결 역량을
            키우는 교육형 인턴십 프로젝트
          </Caption>
          <UL>
            <li>4주 동안 총 24시간의 강의 세션 수강 및 3개의 기업과제 수행하였습니다.</li>
            <li>300명의 지원자 중 우수 교육생 최종 10인으로 선정되었습니다.</li>
            <li>
              프론트엔드 팀원 9명과 기술 과제를 수행하며 PR 및 코드 리뷰, Merge 등 Git 관리를 통한
              동료 학습을 경험하였습니다.
            </li>

            <li>
              ESLint 와 Prettier를 Git Hooks인 husky로 자동화 구축에 대한 학습 및 실습하였습니다.
            </li>

            <li>
              AWS S3와 GitHub Action을 사용한 정적 사이트 배포 및 CI/CD 구축에 대한 학습을
              경험하였습니다.
            </li>
            <li>
              TypeScript, React Custom Hook 등 JavaScript와 React에 대한 심층 학습을 진행하였습니다.
            </li>
          </UL>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <Text>
              <p>북경어언대학교 &#40;北京语言大学, Beijing Language and Culture Univ.&#41;</p>
              <Time>&#40;2018.09 ~ 2021.01&#41;</Time>
            </Text>
          </SubTitle>
          <Caption>중국어통번역학과 &#40;조기졸업&#41;</Caption>
        </Content>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 24px;
`;
const Caption = styled.p`
  font-size: 0.6em;
  color: ${COLOR.gray800};
  padding-left: 40px;
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Time = styled.time`
  font-size: 0.6em;
  color: ${COLOR.gray800};
`;

export default Education;
