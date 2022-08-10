//  functions

function singhappybirthday(){
    // console.log("happy birthday to you ......");
}

singhappybirthday();

function twoplusfour(){
    // console.log(2+4);
}
twoplusfour();

function sumtwonumber(num1,num2){          //function parametres and arguments
    return num1 + num2 ;
}
const returnvalue = sumtwonumber(9,5);
console.log(returnvalue);


//odd or even
function iseven(number){
if(number % 2 === 0){
    return true;
}
else {
    return false;

}

}
console.log(iseven(6));

//function
//input : string
// output : firstcharacater

function firstchar(anystring){
    return anystring[0];

}

console.log(firstchar("abcd"));      

//function ,
//input array , target (number)
// output : index of target if target present in array


function findtarget(array,target){
    for(let i=0;i<array.length;i++){
       if(array[i]===target){
        return i ;
       }
    }
    return -i;

}
const myarray = [1,2,3,4]
const ans = findtarget(myarray, 3);
console.log(ans);


// function expression 

// function singhappybirthday(){
//     // console.log("happy birthday to you ......");
// }

// singhappybirthday();


// function expression

const singhappybirthday = function(){
    console.log("happy birthday to tou ...");
}
// this is function expression
