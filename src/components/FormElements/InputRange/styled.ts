import styled, { css } from "styled-components";

const trackCSS = css`
  background-color: transparent;
  border-radius: 0.5rem;
  height: 1rem;
`;

const thumbCSS = css`
  background-color: transparent;
  border-radius: 11px;
  height: 22px;
  width: 22px;
  outline: 2px solid #123456;
  outline-offset: -0.125rem;
`;

const thumbFocus = css`
  outline: 2px solid steelblue;
  outline-offset: -0.125rem;
`;

const offsetSlider = "-3px";

export const Input = styled.input`
  /*********** Baseline, reset styles ***********/
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
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
`;

export const Container = styled.div`
  display: flex;
`;

export const InputBorder = styled.div`
  border: 2px solid #123456;
  border-radius: 0.5rem;
  padding: 4.5px 2px 0px 2px;
  width: 100%;
`;

export const Value = styled.div`
  border: 2px solid #123456;
  align-self: center;
  border-radius: 0.5rem;
  padding: 5.5px 0;
  width: 40px;
  text-align: center;
  font-size: 0.75rem;
  margin-left: 0.5rem;
`;
