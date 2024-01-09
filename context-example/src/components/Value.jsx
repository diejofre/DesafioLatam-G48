import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Value = () => {
  const { counter } = useContext(CounterContext);
  return <div>Value: {counter}</div>;
};

export default Value;
