//  array destructing
const myArray = ["value1", "value2" ,"value3"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1" ,myvar1);
// console.log("value of myvar2" , myvar2);



//alternative way instead of writing line 3 aand 4
// let[myvar1, myvar2]=myArray;


let [myvar1, , myvar2] = myArray;
console.log("value of myvar1" , myvar1);
console.log("value of myvar2" , myvar2);
