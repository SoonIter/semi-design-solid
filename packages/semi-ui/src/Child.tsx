export const context = createContext({ a: 1000, b: 200000 });

const Child = (props) => {
  const obj = useContext(context);
  return (
    <>
      {obj.a} {obj.b}
    </>
  );
};
export {Child}
