import { forwardRef } from "react";
import { Input, Container, InputBorder, Value } from "./styled";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  rangeValue: number;
};

const InputRange = forwardRef<HTMLInputElement, InputProps>(
  ({ name, rangeValue, ...rest }, ref) => {
    return (
      <Container>
        <InputBorder>
          <Input type="range" defaultValue={0} id={name} name={name} {...rest} ref={ref} />
        </InputBorder>
        <Value>{rangeValue === undefined ? 0 : rangeValue}</Value>
      </Container>
    );
  }
);

export default InputRange;
