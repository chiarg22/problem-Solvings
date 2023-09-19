const ChildCounter = (myProps) => {
    console.log("myProps: ", myProps);
    return (
      <div>
        <p style={{ border: "1px solid silver", padding: 12 }}>
          Counter: {myProps.counter}
          <br />
          Name: {myProps.uName}
          <br />
          City: {myProps.uCity}
        </p>
      </div>
    );
  };
  
  export default ChildCounter;