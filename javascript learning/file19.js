// primitive vs refrence data types (importNt topic)

//primitive 
// let num1 = 6;
// let num2 = num1;
//  console.log(" value of num1 is ", num1);
//  console.log(" value of num2 is ", num2);
//  num1++;
//  console.log("after increamenting num1");
//  console.log(" value of num1 is ", num1);
//  console.log(" value of num2 is ", num2);     // result will be 7 , 6

 // refrence types
 // arrays
 let array1 = ["item1", "item2"];
 let array2 = array1;
 console.log("array1" , array1);
 console.log("array2" , array2);

 array1.push("item3");
 console.log("after pushing element to array1");
 console.log("array1" , array1);
 console.log("array2" , array2);      // result be will same 
                                      // item1, item2 , item3


