import { render } from 'solid-js/web';
import { useContext, createSignal, createContext, Component, JSX } from 'solid-js';
import Comp from './absolute_stroked.svg';

const Child: Component<{ a: number }> = (props) => {
  return (
    <>
      <Comp />
    </>
  );
};
function App() {
  return <Child a={1} />;
}

export default App;
