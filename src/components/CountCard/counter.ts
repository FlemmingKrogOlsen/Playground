import { useEffect, useRef, useState } from "react";
import { ICounter } from "./types";

const Counter = ({ start = 0, end, duration = 10 }: ICounter): number => {
  const [state, setState] = useState<number>(start);
  const ref = useRef<number>(start);
  const accumulator = (end - start) / 200;

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

export default Counter;