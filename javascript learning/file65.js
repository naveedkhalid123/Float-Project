//  const user1 = {
//     firstname :"naveed",
//     lastname : "khalid",
//     email:"naveedkhalid2030@gmail.com",
//     age : 5,
//     address : "house number",
//     about:function(){
//         return`${this.firstname} is ${this.age} years old`
//     },
//     is18:function(){
//         return this.age >= 18;
//     }
//  }
// function which take info as a input and return as a object.
// add key value pair
// object ko return kakre ga

function  createuser (firstname,lastname,email,age,address){
const user = {};
user.firstname = firstname;
user.lastname = lastname;
user.email = email;
user.age = age;
user.address = address;
user.about =  function(){
    return`${this.firstname} is ${this.age} years old`
};

 user.is18 = function(){
    return this.age >= 18;
}

return user;
}
const user1 = createuser("naveed","khalid","naveedkhaliddd",12,"kskskssk")
console.log(user1);
const is18 =user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
    



