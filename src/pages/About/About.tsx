import React from "react";
import { useStore } from "store";

const Child = () => {
  const counter = useStore((state) => state.counter);

  React.useEffect(() => {
    console.log("Child component is mounted or updated");
    return () => {
      console.log("Child component is unmounted");
    };
  }, [counter]);

  return <div>Counter: {counter}</div>;
};

const Parent = () => {
  const incrementCounter = useStore((state) => state.incrementCounter);
  const [showChild, setShowChild] = React.useState(true);

  const update = () => {
    setShowChild((prev) => !prev)
    incrementCounter()
  };

  return (
    <div>
      <button onClick={() => update()}>Toggle Child Component</button>
      {showChild && <Child />}
    </div>
  );
};
export default Parent;
