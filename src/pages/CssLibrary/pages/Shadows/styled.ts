import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type TextShadow = {
  offsetX: string;
  offsetY: string;
  blurRadius: string;
};

export const ShadowText = styled.div<TextShadow>`
  padding: 5px 10px;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: ${(props) => props.offsetX} ${(props) => props.offsetY}
    ${(props) => props.blurRadius} black;
  color: lightgray;
`;
