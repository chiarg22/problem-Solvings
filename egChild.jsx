// import React from "react";

export const EgChild = ({ updateProps }) => {
  const updateName = (e) => {
    updateProps({ ...updateProps, uName: e.target.value });
  };
  const updateEmail = (e) => {
    updateProps({ ...updateProps, uEmail: e.target.value });
  };
  const updateNumber = (e) => {
    updateProps({ ...updateProps, uNumber: e.target.value });
  };
  const displayBlock = () => {
    let para = document.getElementById("para");
    para.style.display = "block";
  };
  return (
    <div>
      <div id="para" style={{ display: "none" }}>
        <input type="text" placeholder="name" onChange={updateName} />
        <input type="email" placeholder="email" onChange={updateEmail} />
        <input type="number" placeholder="number" onChange={updateNumber} />
      </div>
      <button onClick={displayBlock}>Display Block</button>
    </div>
  );
};