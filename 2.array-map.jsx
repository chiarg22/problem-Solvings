import { useState } from "react";

const ArrayMap = () => {
  const [names, setNames] = useState([
    "Rahul",
    "Mahesh",
    "Mukesh",
    "Pankaj",
    "Roopesh",
    "Vansh",
  ]);

  return (
    <div>
      <ol>
        {names.map((currentName, index) => {
          return <li key={index}>{currentName}</li>;
          //key is a unique so that the React does not get confused and will point to each and every element individually.
        })}
      </ol>
    </div>
  );
};

export default ArrayMap;
