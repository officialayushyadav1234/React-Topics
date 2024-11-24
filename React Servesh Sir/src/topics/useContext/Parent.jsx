import React from "react";
import ChildA from "./ChildA";
import { createContext } from "react";

// 1. creating a context
export let Global = createContext();

const Parent = () => {
  let data = "Hello world";
  return (
    <div>
      <h1>I am Parent Componenet</h1>

      {/* 2. Provide a Context */}
      <Global.Provider value= {data}>

      </Global.Provider>
      
      <ChildA/>
      
    </div>
  )
}

export default Parent;