import React from "react";
import { useContext } from "react";
import { Global } from "./Parent";

const ChildB = () => {

  // 3. consuming a Context
  let val = useContext(Global);
  console.log(val);

  return (
    <div>
      <h1>I am Child B</h1>
    </div>
  );
};

export default ChildB;