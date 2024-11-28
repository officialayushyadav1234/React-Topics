import React from "react";

const Hoc = (WrappedComp) => {
return ()=>{
  return <WrappedComp data= {[{id:1,ename:"ABC"}]}/>
}
};
export default Hoc;
