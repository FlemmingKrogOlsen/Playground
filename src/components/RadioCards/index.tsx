import { Input, Label, Container } from "./styled";
import { IProps } from "./types";

const RadioCards = ({ data, value, setValue }: IProps) => {
  return (
    <Container>
      {data.options.map((item) => {
        return (
          <div key={item.id}>
            <Input
              type="radio"
              id={item.value}
              name={data.id}
              value={item.value}
              checked={value === item.value}
              onChange={(e) => setValue(e.target.value)}
              icon={item.icon}
              disabled={item.disabled}
            />
            <Label htmlFor={item.value}>
              <h2>{item.title}</h2>
              <p>{item.paragraph}</p>
            </Label>
          </div>
        );
      })}
    </Container>
  );
};

export default RadioCards;
