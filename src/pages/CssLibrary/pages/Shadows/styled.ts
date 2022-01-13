import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

type TextShadow = {
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius?: number;
};

export const ShadowText = styled.div<TextShadow>`
  font-size: 3rem;
  font-weight: bold;
  text-shadow: ${(props) => props.offsetX}px ${(props) => props.offsetY}px
    ${(props) => props.blurRadius}px rgba(0, 0, 0, 0.75);
  color: #123456;
`;

export const ShadowBox = styled.div<TextShadow>`
  width: 400px;
  height: 200px;
  background: white;
  box-shadow: ${(props) => props.offsetX}px ${(props) => props.offsetY}px
    ${(props) => props.blurRadius}px ${(props) => props.spreadRadius}px
    rgba(0, 0, 0, 0.2);
`;

export const ShadowImage = styled.div<TextShadow>`
  img {
    filter: drop-shadow(
      ${(props) => props.offsetX}px ${(props) => props.offsetY}px
        ${(props) => props.blurRadius}px rgba(0, 0, 0, 0.75)
    );
  }
`;
