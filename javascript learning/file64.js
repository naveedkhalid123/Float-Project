// arrow functions

const user1 = {
    firstname: "naveed",
    age : 6,
    about :()=>{
        console.log(this.firstname,this.age);
    }
}
user1.about(user1);

// there is no (this) in arrow function....
// arrrow function takes this from surrounding