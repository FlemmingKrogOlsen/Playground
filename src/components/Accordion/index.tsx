import { ReactElement, FC, Fragment, createElement } from 'react';
import { Container, Title, Content, RadioBtn, Text } from './styled';
import { IProps } from './types';

const Accordion: FC<IProps> = ({ id, data }): ReactElement => {
  return (
    <Container>
      {data?.map((item) => (
        <Fragment key={item.id}>
          <RadioBtn type='radio' name={id} defaultChecked={item.show} />
          <Title>
            <Text>{item.title}</Text>
          </Title>
          <Content>{createElement(item.content)}</Content>
        </Fragment>
      ))}
    </Container>
  );
};

export default Accordion;
