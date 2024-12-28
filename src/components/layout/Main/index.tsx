import styled from 'styled-components';
import { breakpoints } from '../../../lib/media';
import Skills from '../Skills';
import Profile from './Profile';
import Introduction from '../Introduction';

const Main = () => (
  <Container>
    <Wrapper>
      <Profile />
      <Skills />
      <Introduction />
    </Wrapper>
  </Container>
);

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 130px);
  height: 100%;
  border-radius: 16px;
  margin-top: 50px;
  padding-block: 40px;
  box-sizing: c-box;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'profile introduction'
    'skills  introduction';
  gap: 16px;
  height: 100%;
  margin: auto 0;

  @media (max-width: ${breakpoints.xwide}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'profile skills'
      'introduction introduction';
  }
  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'profile'
      'skills'
      'introduction';
  }
`;
export default Main;
