import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Increment = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return <button onClick={() => setCounter(counter + 1)}>+</button>;
};

export default Increment;
