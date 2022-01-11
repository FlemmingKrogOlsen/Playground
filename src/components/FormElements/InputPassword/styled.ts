import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SVG = styled.div`
  border: 2px solid #123456;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  margin-left: 0.5rem;

  svg {
    width: 1.5rem;
    stroke: #123456;
    fill: none;
    path {
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 2;
    }
  }
`;
