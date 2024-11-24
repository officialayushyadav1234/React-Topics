// ------------------  Function Based Component -----------------
/*
   1. there is no built in property called as state 
      So, function based component called as stateless Component.
   2. Hooks are supported.
   3. Life Cycle methods are not present.
   4. No render method.
   5. No this keyword. 
*/

import { useState } from "react";

const StatesInFBC = () => {
  let [state, setState] = useState("hello");
  function change() {
    setState("Byee");
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={change}>change</button>
    </div>
  );
};

export default StatesInFBC;
