import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TextShadow = {
  offsetX: number;
  offsetY: number;
  blurRadius: number;
};

export const ShadowText = styled.div<TextShadow>`
  padding: 5px 10px;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: ${(props) => props.offsetX}px ${(props) => props.offsetY}px
    ${(props) => props.blurRadius}px black;
  color: lightgray;
`;
