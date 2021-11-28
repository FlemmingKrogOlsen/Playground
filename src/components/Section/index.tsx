import { FC, ReactElement } from 'react';
import { Container, Content, Title, Header } from './styled';
import { IProps } from './types';

const Section: FC<IProps> = ({
  title,
  children,
  component,
  color,
  shadow,
  border,
}): ReactElement => (
  <Container color={color ? color : ''} shadow={shadow} border={border}>
    <Header color={color ? color : ''}>
      <Title>{title}</Title>
      {component && <div>{component}</div>}
    </Header>
    <Content>{children}</Content>
  </Container>
);

export default Section;
