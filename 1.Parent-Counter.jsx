import { useState } from "react";
import ChildCounter from "./2.child-counter";
const ParentCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <ChildCounter uName="Romesh" uCity="Gwalior" counter={counter} />
      <button onClick={() => setCounter((counter) => counter + 1)}>Increment</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>Decrement</button>
      {/* <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter((val) => val - 1)}>Decrement</button> */}
      {/* //This val is also possible as it is a variable */}
      
    </>
  );
};

export default ParentCounter;

//Passing the props from parent to child.
