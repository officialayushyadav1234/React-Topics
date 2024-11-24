import { createContext } from "react";
export let GLOBAL = createContext();
const Context = ({ children }) => {
    console.log(children);
    
  let data = [
    { text: "Hello World" },
    { text: "Hello Universe" },
    { text: "Hello Galaxy" },
  ];
  return <GLOBAL.Provider value={data}>{children}</GLOBAL.Provider>;
};

export default Context;
