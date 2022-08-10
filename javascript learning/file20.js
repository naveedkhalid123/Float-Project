// how to clone array 

let array1 =["item1", "item2", "item3"];
let array2 = array1.slice(0);
array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);


// new way 
// by slice  =array1.slice(0);
//by concat   =[].concat(array1);
// spread operator  =[... array1];



//how to concatenate

// let array1 =["item1", "item2", "item3"];
// let array2 = array1.slice(0).concat(["item4","itemm4"]);
// array1.push("item3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);
