import { forwardRef } from "react";
import { Label, Input, Span, SVG } from "./styled";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
};

const AnimatedCheckbox = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, ...rest }, ref) => {
    return (
      <Label htmlFor={name}>
        {label}
        <Input type="checkbox" id={name} name={name} {...rest} ref={ref} />
        <Span>
          <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </SVG>
        </Span>
      </Label>
    );
  }
);

export default AnimatedCheckbox;
