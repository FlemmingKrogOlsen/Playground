import { FC, ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
  value: number;
  colors?: {
    cardTextColor?: string;
    cardBackground?: string;
    barBackground?: string;
    barColor?: string;
    barTextColor?: string;
  };
}

const pathLength: number = 471.24; /* don't change this */

const Number = styled.div<{ color: string }>`
  position: absolute;
  font-size: 4rem;
  font-weight: bold;
  color: ${({ color }) => color};
  transition: all 0.3s ease;
  span {
    font-size: 1.5rem;
  }
`;

const Card = styled.div<{ background: string }>`
  display: inline-block;
  position: relative;
  background: ${({ background }) => background};
  width: 250px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 15px 30px 0px,
    rgba(0, 0, 0, 0.3) 0px 5px 10px 0px;
  margin: 0 10px 10px 10px;
  &:hover {
    ${Number} {
      transform: scale(1.2);
      color: #fafafa;
    }
  }
`;

const Text = styled.h2<{ color: string }>`
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ color }) => color};
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

const CircleBackGround = styled.circle<{ color: string }>`
  stroke-dashoffset: 0;
  fill: ${({ color }) => color};
  stroke: ${({ color }) => color};
`;

const defaultColors = {
  cardTextColor: "#123456",
  cardBackground: "white",
  barBackground: "#dedede",
  barColor: "#123456",
  barTextColor: "#123456",
};

const ProgressIndicatorCard: FC<IProps> = ({ children, value, colors }) => {
  return (
    <Card background={colors?.cardBackground || defaultColors.cardBackground}>
      <SvgContainer>
        <SVG
          viewBox="0 0 160 160"
          value={value}
          stroke={colors?.barColor || defaultColors.barColor}
        >
          <CircleBackGround
            color={colors?.barBackground || defaultColors.barBackground}
            cx="80"
            cy="80"
            r="75"
          />
          <circle cx="80" cy="80" r="75" />
        </SVG>
        <Number color={colors?.barTextColor || defaultColors.barTextColor}>
          {value}
          <span>%</span>
        </Number>
      </SvgContainer>
      <Text color={colors?.cardTextColor || defaultColors.cardTextColor}>
        {children}
      </Text>
    </Card>
  );
};

export default ProgressIndicatorCard;
