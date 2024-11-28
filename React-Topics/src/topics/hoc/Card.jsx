import React from "react";
import Hoc from "./Hoc";
const Card = (x) => {
  console.log(x.users[0].ename);

  return (
    <div>
      <h1>I am Card Component {x.users[0].ename}</h1>
    </div>
  );
};

export default Hoc(Card);
