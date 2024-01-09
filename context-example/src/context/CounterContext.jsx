/* src\context\CounterContext.jsx */
import { createContext, useState } from "react";
export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const PI = 3.14;
  const handle = () => {};

  return (
    <CounterContext.Provider value={{ counter, setCounter, handle, PI }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
