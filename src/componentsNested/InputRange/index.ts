import styled, { css } from "styled-components";

const trackCSS = css`
  background-color: #123456;
  border-radius: 0.5rem;
  height: 1rem;
`;

const thumbCSS = css`
  background-color: white;
  border-radius: 0.4rem;
  height: 0.8rem;
  width: 0.8rem;
`;

const thumbFocus = css`
  outline: 2px solid steelblue;
  outline-offset: 0.125rem;
`;

const offsetSlider = "0.125rem";

export const InputRange = styled.input.attrs({
  type: "range",
})`
  /*********** Baseline, reset styles ***********/
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  /******** Chrome, Safari, Opera and Edge Chromium styles ********/
  /* slider track */
  &::-webkit-slider-runnable-track {
    ${trackCSS};
  }

  /* slider thumb */
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: ${offsetSlider}; /* Centers thumb on the track */
    ${thumbCSS};
  }

  &:focus::-webkit-slider-thumb {
    ${thumbFocus};
  }

  /*********** Firefox styles ***********/
  /* slider track */
  &::-moz-range-track {
    ${trackCSS};
  }

  /* slider thumb */
  &::-moz-range-thumb {
    ${thumbCSS};
    border: none; /*Removes extra border that FF applies*/
  }

  &:focus::-moz-range-thumb {
    ${thumbFocus};
  }

  &::after {
    content: "${(props) => props.value}";
    display: block;
    align-self: center;
    min-width: 30px;
    height: 1rem;
    background: #123456;
    text-align: center;
    color: white;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 1rem;
    margin-left: 3px;
  }
`;
