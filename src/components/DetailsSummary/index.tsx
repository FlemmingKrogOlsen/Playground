import { FC, ReactElement } from "react";
import { Title, Container, Content } from "./styled";

const DetailsSummary: FC<Palyground_DetailsSummaryProps> = ({
  open,
  title,
  children,
}): ReactElement => {
  return (
    <Container open={open}>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default DetailsSummary;
