import styled from 'styled-components';
import Profile from './Profile';
import Greeting from './Greeting';
import { AiOutlineDown as _AiOutlineDown } from 'react-icons/ai';
import { COLOR } from '../../../lib/color';

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
  height: calc(100% - 85px);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  height: 100%;
  padding-top: 85px;
`;
const AiOutlineDown = styled(_AiOutlineDown)`
  width: 40px;
  height: 40px;
  color: ${COLOR.gray800};
  cursor: pointer;
  animation-name: updown;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;

  @keyframes updown {
    0% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;
export default Main;
