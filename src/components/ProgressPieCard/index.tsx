import { FC } from "react";
import {
  Number,
  Card,
  Text,
  SvgContainer,
  SVG,
  CircleBackGround,
} from "./styled";

import { IProps } from "./types";

export const defaultColors = {
  cardBackground: "#ffffff",
  cardTextColor: "#123456",
  barBackground: "#dedede",
  barTextColor: "#123456",
  barColor: "#123456",
};

const ProgressPieCard: FC<IProps> = ({ children, value, colors }) => {
  return (
    <Card
      color={colors?.cardBackground || defaultColors.cardBackground}
    >
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

export default ProgressPieCard;
