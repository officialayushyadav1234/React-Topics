/*
export function useData () {

  return ["Hello", "World"];
}
*/


//--------------  1.  Named Export ------------------
// It is multiple times export

/*
export function library (){
  return ["Hello","Developers"];
}

export function place () {
  return[
    "Noida","Delhi","Varanasi"
  ];
}
*/

//---------------  2. default export  ---------------------- 
// it is only one times export

// ------------------ Example -----------------
function getProducts() {
  return [
   { id : 1, title: "Laptop" },
   { id : 2, title: "Iphone" },
   { id : 3, title: "Desktop" },
  ];
}
export default getProducts;
