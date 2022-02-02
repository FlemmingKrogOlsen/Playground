import { FC, ReactElement } from "react";
import { Title, Container, Content } from "./styled";
import type Props from "./types";

const DetailsSummary: FC<Props> = ({ open, title, children }): ReactElement => {
  return (
    <Container open={open}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default DetailsSummary;
