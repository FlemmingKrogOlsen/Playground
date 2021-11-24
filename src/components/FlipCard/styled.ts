import styled, { css } from "styled-components";

const colors = {
  primary: "#123456",
  secondary: "#ffffff",
}

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  transition: transform 1s;
  transform-style: preserve-3d;
`;

const Card = styled.div`
  width: 300px;
  aspect-ratio: 1;
  perspective: 500px;
  &:hover {
    ${Content} {
      transform: rotateY(180deg);
      transition: transform 2s;
    }
  }
`;

const commonCSS = css`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${colors.secondary};
  /* line-height: 300px; */
  color: ${colors.primary};
  text-align: center;
  font-size: 40px;
  backface-visibility: hidden;
`;

const Front = styled.div`
displaY: flex;
align-items: center;
  ${commonCSS};
`;

const Back = styled.div`
  ${commonCSS};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.primary};
  color: ${colors.secondary};
  transform: rotateY(180deg);
  font-size: 20px;
  line-height: 24px;
`;

export { Card, Front, Back, Content };