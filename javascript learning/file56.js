// sets(it is iterable)
// store dta
// set aslo have itsown methods
// no index-based acces
// order is not granted
// unique items only ( no duplicated allowed)

// const numbers = new Set([1,2,3]);
// console.log(numbers);

const numbers = new Set();
numbers.add(1);
numbers.add(2);
if(numbers.has(1)){   // .has use for check th number inside or not
    console.log("present")

}
else {
    console.log("absent")
}
console.log(numbers);


// use set when you hav unique values and you know that you have to use value once

const myarray = [1,2,4,4,5,6,5,6];
const unique = new Set(myarray);
console.log(unique);
console.log(myarray);

let length = 0;
for(let element of unique){
    length++;
}
console.log(length);

// EASY TO UNDERSTAND

