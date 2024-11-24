
/*
import {useData} from "./utilities.js";

let [data1,data2]= useData();
console.log(data1,data2);
*/




// ------------------- Named export ---------------------

// Named export is use multiple times and mendatory all functions import in curly braces {}

/*
import {library,place} from "./utilities.js"
let libraryCall = library();
console.log(libraryCall);
let placeCall = place();
console.log(placeCall);
*/



// ------------------ default export ------------------

// default is use only one times and not use curly braces {}


import getProducts from "./utilities.js";
let user = getProducts();
console.log(user);

let product = getProducts();

let val1 = product.forEach((ele,i,arr) => {

  console.log(ele,ele.title,i,arr);
  return "hello";
});

let val2 = product.map((ele,i,arr) => {

  console.log(ele.title,i,arr);
  return "byee !!";
});

console.log(val1);
console.log(val2);
