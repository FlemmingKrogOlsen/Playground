import { Gauge, Container, Label, Value } from "./styled";

interface IProps {
  id: string;
  title: string;
  value: number;
  min?: number;
  max?: number;
  low?: number;
  high?: number;
  optimum?: number;
}

const GaugeMeter = ({
  id,
  title,
  value,
  min = 0,
  max = 100,
  low = 33,
  high,
  optimum = 80,
}: IProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{title}</Label>
      <Gauge
        id={id}
        min={min}
        max={max}
        low={low}
        high={(high && high - 0.00000001) || 65.999999999} // hack to fix firefox
        optimum={optimum}
        value={value}
      />
      <Value>{value}</Value>
    </Container>
  );
};

export default GaugeMeter;
