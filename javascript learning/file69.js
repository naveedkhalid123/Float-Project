// javascript function ==> function + object
// we can add own properties
// function provides more useful properties
// only functions provide prototype property

function hello(){
    console.log(hello);
}
// console.log(hello.prototype);
if(hello.prototype){
    console.log("prototype is present");
} else{
    console.log("prototype is absnet");
}
