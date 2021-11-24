import React, { FC } from "react";
import { Card, Front, Back, Content } from "./styled";

interface IProps {
  title: string;
  children: React.ReactNode;
}

const FlipCard: FC<IProps> = ({ title, children }) => {
  return (
    <Card>
      <Content>
        <Front>{title}</Front>
        <Back>{children}</Back>
      </Content>
    </Card>
  );
};

export default FlipCard;
