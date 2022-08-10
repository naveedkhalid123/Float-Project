// how to iterate objects

const person ={
    name :"naveed",
    age : 20 ,
    "person hobbies": ["guitar" , "sleeping" ,"listening"]
}

// // for in loop 
// for(let key in person){
//     console.log( `${key} : ${person[key]}`);
// }

//objects .keys
console.log( Object.keys(person));
