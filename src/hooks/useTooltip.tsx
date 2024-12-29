import { useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { COLOR } from '../lib/color';

interface TooltipWrapperType extends PropsWithChildren {
  content: ReactNode;
}

const useTooltip = () => {
  const [show, setShow] = useState(false);

  const TooltipWrapper = ({ children, content }: TooltipWrapperType) => {
    return (
      <Wrapper onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
        {children}
        <Tooltip $show={show}>{content}</Tooltip>
      </Wrapper>
    );
  };

  return { TooltipWrapper };
};

const Wrapper = styled.div`
  position: relative;
  display: inline;
  cursor: default;
  transition: font-weight 0.2s ease-in-out;
  &:hover {
    font-weight: 600;
  }
`;
const Tooltip = styled.div<{ $show: boolean }>`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  width: max-content;
  padding: 4px 8px;
  border-radius: 8px;
  color: white;
  background-color: #2e2e2e;
  font-weight: 600;
  opacity: 0;
  animation: ${({ $show }) => $show && `pop .2s ease-in-out forwards`};
  &::before {
    position: absolute;
    top: 20px;
    left: 50%;
    content: '';
    width: 10px;
    height: 10px;
    background-color: #2e2e2e;
    transform: translateX(-50%) rotate(45deg);
  }

  @keyframes pop {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(2px);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;

export default useTooltip;
