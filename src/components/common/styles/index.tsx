import styled from 'styled-components';
import { COLOR } from '../../../lib/color';
import { breakpoints } from '../../../lib/media';

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 8px;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 4px;
  }
`;
export const Content = styled.div<{ $delay?: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  opacity: 0;
  animation: ${({ $delay }) => `fade-in 0.6s ${$delay ?? '0'}s ease forwards`};
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
export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  font-size: 0.8em;
  font-weight: 500;
  color: ${COLOR.gray900};
`;
export const Icon = styled.p`
  font-size: 1.4em;
  font-family: Tossface;
`;
export const UL = styled.ul`
  font-size: 0.6em;
  line-height: 1.6em;
`;
