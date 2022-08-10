// important array methods


 const numbers = [4,2,5,8]

 function myfun(number,index){
    console.log("index is" ,index);
    console.log(`${number}*2 = ${number*2}`);
 }

//  myfun(numbers[1], 1);    // for single input

// for multiple outputs we have to use for loop

// for(let i = 0 ; i<numbers.length; i++){
//     mulby2(numbers[i], i);
// }

// we can use for each function instead of entire loop

numbers.forEach(myfun);
 



