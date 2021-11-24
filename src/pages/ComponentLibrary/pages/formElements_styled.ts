import styled, { css } from "styled-components";

const commonInputCss = css`
  width: 25px;
  height: 25px;
  background: #123456;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 25%;
`;

export const ProcentageRange = styled.input.attrs({
  type: "range",
  min: 0,
  max: 100,
  step: 1,
})`
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: white;
  outline: none;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  position: relative;

  &::-webkit-slider-thumb {
    appearance: none;
    ${commonInputCss};
  }

  &::-moz-range-thumb {
    ${commonInputCss};
  }

  &::after {
    content: "${(props) => props.value}%";
    color: black;
    position: absolute;
    top: 5px;
    color: gray;
    width: 100%;
    text-align: center;
  }
`;