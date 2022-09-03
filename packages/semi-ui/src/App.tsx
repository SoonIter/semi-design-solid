import Comp from './absolute_stroked.svg';

const Child: Component<{ a: number }> = (props) => {
  console.log(Comp);
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
