import CounterProvider from "./context/CounterContext";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Value from "./components/Value";

const App = () => {
  return (
    <div>
      <CounterProvider>
        <Decrement />
        <Value />
        <Increment />
      </CounterProvider>
    </div>
  );
};

export default App;
