import styled, { css } from "styled-components";

const commonInputCss = css`
  width: 25px;
  height: 25px;
  background: ${({ theme }) => theme.COLOR.PRIMARY};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.COLOR.BACKGROUND};
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
  background: ${({ theme }) => theme.COLOR.BACKGROUND};
  outline: none;
  border-radius: 0.25rem;
  position: relative;
  margin-top: 3px;

  &::-webkit-slider-thumb {
    appearance: none;
    ${commonInputCss};
  }

  &::-moz-range-thumb {
    ${commonInputCss};
  }

  &::after {
    content: "${(props) => props.value}%";
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
    position: absolute;
    top: 2px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.25rem;
  }
`;
