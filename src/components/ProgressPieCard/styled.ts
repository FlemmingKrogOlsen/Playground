import styled from "styled-components";

const pathLength: number = 471.24; /* don't change this */

type ColorProps = {
  color: string;
};

interface ICardProps extends ColorProps {
  hover: string;
}

const Number = styled.p<ColorProps>`
  position: absolute;
  font-size: 4rem;
  font-weight: bold;
  transition: color 1s ease;
  cursor: default;
  color: ${(props) => props.color};
  span {
    font-size: 1.5rem;
  }
`;

const Card = styled.div<ICardProps>`
  display: inline-block;
  position: relative;
  width: 250px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 30px 0px,
    rgba(0, 0, 0, 0.3) 0px 5px 10px 0px;
  margin: 0 10px 10px 10px;
  background: ${(props) => props.color};
  &:hover {
    ${Number} {
      color: ${({ hover }) => hover};
    }
  }
`;

const Text = styled.p<ColorProps>`
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 30px;
  cursor: default;
  color: ${(props) => props.color};
`;

const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
`;

const SVG = styled.svg<{ value: number }>`
  fill: none;
  stroke-linecap: butt;
  stroke-dasharray: ${pathLength};
  stroke-dashoffset: ${({ value }) => (pathLength / 100) * value - pathLength};
  transform: rotate(-90deg) scale(1, -1); // start @ 12 o'clock and goes clockwise
  transform-origin: center;
  stroke-width: 10;
`;

const CircleBackGround = styled.circle<ColorProps>`
  stroke-dashoffset: 0;
  fill: ${(props) => props.color};
  stroke: ${(props) => props.color};
`;

export { Number, Card, Text, SvgContainer, SVG, CircleBackGround };
