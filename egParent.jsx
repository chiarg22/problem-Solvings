import { useState } from "react";
import { EgChild } from "./egChild.jsx";

export const EgParent = () => {
  const [details, setDetails] = useState({
    uName: "121",
    uEmail: "",
    uNumber: 0,
  });

  const updateProps = (updatedDetails) => {
    console.log(updatedDetails);
    setDetails((xyz) => ({
      ...xyz,
      ...updatedDetails,
    }));
  };

  

  return (
    <div>
      <EgChild updateProps={updateProps} />

      <p>
        My name is {details.uName}, this is my {details.uEmail}, this is my
        {details.uNumber}
      </p>

    </div>
  );
};

//Btn pe click kro.. 1 form popup show hona chaiye.. Usme kuch inputs lene hai like name, email, number with some validations... In chizo ko parent container me display krna hai
//Btn and popup child component me dalna
//Task given by sir 
//Using props from child to parent
//i.e. from B to A -> using call back function...