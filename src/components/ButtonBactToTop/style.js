import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
    from { box-shadow: var(--brand-color_6) 0 0 0; }
    to { box-shadow: #0000 0 0 0 10px; }
`;

export const Link = styled.a`
  position: sticky;
  right: 20px;
  bottom: 20px;

  display: grid;
  place-items: center;
  margin-left: auto;

  width: 5.5vh;
  aspect-ratio: 1;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: var(--brand-color_6);
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  animation: ${pulse} 0.5s;
  
  &:active {
    animation: none;
  }

  &:hover {
    background-color: var(--brand-color_3);
  }

  & svg {
    width: 80%;
    pointer-events: none;
  }
`;
