
// -------------  1.  useState()  ----------
/*
useState( ) : 
     This hook allows you to add state to FBC. 
     It return an array 
     It accepts 2 values 
       a. current state 
          [undefined,f] 
       b. Updator function 
     Initialization of useState( )
*/

// Note : While using useState( ) first we need to import that from "React" library.

import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
export default Counter;
