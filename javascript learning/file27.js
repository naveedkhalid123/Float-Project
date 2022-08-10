// difference between dot and bracket notataion
const key = "email";
const person ={
    name:"naveed",
    age :20 ,
    "person hobbies" : ["guitar" ,"sleeping", "listening music"]
}
// we can use bracket instead of . because there are speces between person hobbies and it is nt allowed in java script

// console.log(person["person hobbies"]);

person[key]="naveedkhalid2030@gmail.com";
console.log(person);