// call , apply and bind
// imporatnt for interview

//call
const user1 = {
    firstname : " naveed",
    age : 8,
    about : function(hobby,favmusicsin){
console.log(this.age,this.firstname,hobby,favmusicsin)
    }
}

const user2 ={
    firstname: "bean",
    age : 9,
}
user1.about.call(user2,"hobby","favmusicsin");

// apply

user1.about.call(user2,["guitar","batds"]);

// bind
 user1.about.bind(user2,"guitar", "bach");
