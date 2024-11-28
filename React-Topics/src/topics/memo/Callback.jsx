import React from "react";

const Callback = (props) => {
  console.log("I am callback component");

  return (
    <div>
      <h1>Callback Component</h1>
    </div>
  );
};

export default React.memo(Callback);
