// maps

//map is an iterable
// ordered



// // key value pair
// const person = new Map();
// person.set("firstname","ebaan");
// person.set("age",7)
// // console.log(person);
// // console.log(person.get("firstname"));

// for (let key of person){
//     console.log( typeof key);
// }

const person1 = {
    id : 1,
    firstName : " naveed"
}

const person2 = {
    id : 2,
    firstName : "ban"
}

const info = new Map();
info.set(person1,{age:9,gender:"male"});
info.set(person2,{age:10,gender:"female"});
console.log(person2.id);
console.log(info.get(person1).gender);
console.log(info.get(person2).gender);
