// new keyword
function createuser(firstname,age){
    this.firstname = firstname;
    this.age = age;

}
const user1 = new createuser("naveed",8);

console.log(user1);