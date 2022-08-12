import { render } from "solid-js/web";
import {
  useContext,
  createSignal,
  createContext,
} from "solid-js";
import { Child, context } from "./Child";

function Counter(props) {
  const [yes, setYes] = createSignal("yes");

  return (
    <context.Provider value={{ a: props.a, b: 20 }}>
      {/* <button onClick={() => setYes((x) => x + 1)}>{yes}</button> */}
      {props.children}
    </context.Provider>
  );
}
function App() {
  return (
    <Counter a={123}>
      <Child />
    </Counter>
  );
}

export default App;
