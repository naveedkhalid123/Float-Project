// methods
// functions inside objects are called methods
function personinfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
const person1 = {
    firstName: " naveed",
    age : 8,
    about: personinfo

}
const person2 = {
    firstName: " jakakak",
    age : 8,
    about: personinfo

}
const person3 = {
    firstName: " beaann",
    age : 8,
    about: personinfo

}
person1.about();
person2.about();
person3.about();