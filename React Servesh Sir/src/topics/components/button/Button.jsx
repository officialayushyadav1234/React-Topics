import React from "react";
import style from "./button.module.css"
const Button = () => {
    console.log(style);
    
  return <button id={style.btn}>Click</button>;
};

export default Button;
