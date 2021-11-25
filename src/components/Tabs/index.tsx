import { createElement, FC, Fragment, ReactElement } from "react";
import { Container, Input, Label, Panel } from "./styled";
import { IProps } from "./types";

const Tabs: FC<IProps> = ({ name, data }): ReactElement => (
  <Container>
    {data?.map((item) => {
      return (
        <Fragment key={item.id}>
          <Input
            name={name}
            type="radio"
            id={item.id}
            defaultChecked={item.selected}
          />
          <Label htmlFor={item.id}>{item.name}</Label>
          <Panel height="230px">{createElement(item.content)}</Panel>
        </Fragment>
      );
    })}
  </Container>
);

export default Tabs;
