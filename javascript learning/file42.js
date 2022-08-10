// parameters destructing

// object 
// react

const person = {
    name : "Naveed",
    gender : "Male",
    age : 20
}

function printdetails({name, gender, age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}

printdetails(person);