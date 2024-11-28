import React, { useCallback, useMemo, useState } from "react";
import Callback from "./Callback";

const Memo = () => {
  let [add, setAdd] = useState(0);
  let [minus, setMinus] = useState(100);

  // function multiply() {
  //   console.log("multiply");
  //   return add * 10;
  // }

  let mul = useMemo(() => {
    console.log("multiply");
    return add * 10;
  }, [add]);

  // function display() {
  //   console.log("I am Display func");
  // }

  let display = useCallback(() => {
    console.log("I am Display func");
  }, []);

  return (
    <div>
      <h1>Memo Example</h1>
      <h2>Multiply {mul}</h2>
      <h2>
        Add {add} <button onClick={() => setAdd(add + 1)}>add</button>
      </h2>
      <h2>
        Minus {minus} <button onClick={() => setMinus(minus - 1)}>minus</button>
      </h2>
      <Callback display={display} />
    </div>
  );
};

export default Memo;
