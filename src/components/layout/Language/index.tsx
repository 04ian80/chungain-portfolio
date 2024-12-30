import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';
import { Content, Contents, Icon, SubTitle } from '../../common/styles';

const Language = () => {
  return (
    <Wrapper>
      <Contents>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <Text>
              <p>영어</p>
              <Time>&#40;2021.01.09&#41;</Time>
            </Text>
          </SubTitle>
          <Caption>890 / TOEIC / YBM 한국 TOEIC 위원회</Caption>
        </Content>
        <Content>
          <SubTitle>
            <Icon>▫️</Icon>
            <Text>
              <p>중국어</p>
              <Time>&#40;2017.08.12&#41;</Time>
            </Text>
          </SubTitle>
          <Caption>6급 / HSK / HSK한국사무국</Caption>
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

export default Language;
