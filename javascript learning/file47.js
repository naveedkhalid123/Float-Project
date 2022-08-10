// filter function(method)

const numbers = [1,3,2,6,4,8];

const iseven = function(number){
    return number%2===0;
}


 const evennum = numbers.filter(iseven);
 console.log(evennum);

