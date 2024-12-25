import styled from 'styled-components';
import Profile from './Profile';
import Greeting from './Greeting';
import { AiOutlineDown as _AiOutlineDown } from 'react-icons/ai';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';

const Main = ({ onScrollNextView }: { onScrollNextView: () => void }) => (
  <Container>
    <Wrapper>
      <Profile />
      <Greeting />
    </Wrapper>
    <AiOutlineDown onClick={onScrollNextView} />
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
  box-shadow: 0 5px 18px -2px rgba(0, 0, 0, 0.1);
  margin-top: 95px;
  padding-block: 40px;
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  height: 100%;
  margin: auto 0;

  @media (max-width: ${breakpoints.wide}) {
    flex-direction: column;
  }
`;
const AiOutlineDown = styled(_AiOutlineDown)`
  width: 40px;
  height: 40px;
  color: ${COLOR.gray800};
  cursor: pointer;
  opacity: 0;
  animation-name: updown;
  animation-duration: 1.4s;
  animation-delay: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

  @keyframes updown {
    0% {
      opacity: 1;
      transform: translateY(10px);
    }
    50% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(10px);
    }
  }
`;
export default Main;
