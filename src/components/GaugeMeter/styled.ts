import styled, { css } from "styled-components";

const getBarColor = (value: string) => {
  return `repeating-linear-gradient(180deg, ${value} 0%, rgba(255,255,255,1) 100%)`;
};

const CommonBackgroundValues = css`
  background-size: 2.5rem 3rem, 2.5rem 4rem;
  background-position-y: center, center;
  background-repeat: repeat-x, repeat-x;
`;

export const Label = styled.label`
  width: 200px;
  padding-left: 10px;
`;

export const Value = styled.div`
  width: 50px;
  text-align: center;
`;

export const Container = styled.div`
  padding: 3px 5px;
  background: white;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #123456;
`;

export const Gauge = styled.meter`
  appearance: none;
  -moz-appearance: meter;
  -webkit-appearance: meter;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;

  &,
  &::-webkit-meter-bar,
  &::-webkit-meter-optimum-value,
  &::-webkit-meter-suboptimum-value,
  &::-webkit-meter-even-less-good-value,
  &::-webkit-meter-inner-element {
      background: lightgray;
      border: none;
      width: 100%;
      height: 20px;
  }

  &:-moz-meter-sub-sub-optimum::-moz-meter-bar,
  &:-moz-meter-sub-optimum::-moz-meter-bar,
  &::-moz-meter-bar {
    background: none;
  }

    /* Red */
  &::-webkit-meter-even-less-good-value {
      background-image: ${getBarColor("red")};
      ${CommonBackgroundValues};
  }

  &:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background-image: ${getBarColor("red")};
    ${CommonBackgroundValues};
  }

  /* Yellow */
  &::-webkit-meter-suboptimum-value {
    background-image: ${getBarColor("yellow")};
    ${CommonBackgroundValues};
  }

  &:-moz-meter-sub-optimum::-moz-meter-bar {
    background-image: ${getBarColor("yellow")};
    ${CommonBackgroundValues};
  }

  /* Green */
  &::-webkit-meter-optimum-value { 
      background-image: ${getBarColor("green")};
      ${CommonBackgroundValues};
  }

  &::-moz-meter-bar { 
      background-image: ${getBarColor("green")};
      ${CommonBackgroundValues};
  }

}
`;
