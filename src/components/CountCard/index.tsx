import { useEffect, useRef, useState, ReactElement } from "react";
import { Container, Count, Text } from "./styled";

export const Counter = ({
  start = 0,
  end,
  duration = 10,
}: Playground_CounterProps): number => {
  const [state, setState] = useState<number>(start);
  const ref = useRef<number>(start);
  const accumulator: number = (end - start) / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, duration * 5);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) updateCounterState();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, start, duration]);

  return state;
};

const CountCard = ({
  start = 0,
  end,
  duration = 10,
}: Playground_CounterProps): ReactElement => {
  return (
    <Container>
      <Count>
        {Counter({
          start,
          end,
          duration,
        })}
      </Count>
      <Text>I count stuff</Text>
    </Container>
  );
};

export default CountCard;
