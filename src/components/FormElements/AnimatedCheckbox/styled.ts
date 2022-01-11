import styled, { css, keyframes } from "styled-components";

const path = 20;

const textSize = "2rem";
const textPaddingLeft = "2.5rem";

const checkSize = "2rem";
const checkBorderWidth=  "2px";

const svgSize = "3rem";
const svgPosLeft = "-0.25rem";
const svgPosTop = "-0.25rem";

const commonCSS = css`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const tick = keyframes`
  0% {
    stroke-dashoffset: ${path};
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

export const Label = styled.label`
  position: relative;
  padding-left: ${textPaddingLeft};
  font-size: ${textSize};
  color: #123456;
  cursor: pointer;
`;

export const Span = styled.span`
  ${commonCSS};
  border: ${checkBorderWidth} solid #123456;
  background: white;
  border-radius: 50%;
  width: ${checkSize};
  height: ${checkSize};
`;

export const SVG = styled.svg`
  ${commonCSS};
  stroke: green;
  width: ${svgSize};
  height: ${svgSize};
  margin-left: ${svgPosLeft};
  margin-top: ${svgPosTop};
  stroke-dasharray: ${path};
  stroke-dashoffset: ${path};
  fill: none;
  path {
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const Input = styled.input`
  ${commonCSS};
  opacity: 0;
  &:checked + ${Span} ${SVG} {
    animation-name: ${tick};
    animation-duration: 0.5s;
    stroke-dashoffset: 0;
  }
`;