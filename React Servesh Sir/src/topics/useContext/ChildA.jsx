import ChildB from "./ChildB";

const ChildA = (x) => {
  console.log(x);//{prop1:[{},{}]}

  return (
    <div>
      <h1>I am Child A</h1>
      <ChildB />
    </div>
  );
};

export default ChildA;
