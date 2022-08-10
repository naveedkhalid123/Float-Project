// reduce method
const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in arrays
 const sum = numbers.reduce((accumulator, currentvalue)=>{
    return accumulator+ currentvalue;
});
console.log(sum);

// output will be 15 !!!!!

const usercart = [
    {prodid: 1, prodname:"mobile", price: 1200},
    {prodid: 2, prodname:"laptop", price: 1500},
    {prodid: 3, prodname:"tv", price: 1600},
    
]
 const total =usercart.reduce((totalprice, currentproduct)=>{
    return  totalprice + currentproduct.price;
},0);

console.log(total);

// ans: 43000