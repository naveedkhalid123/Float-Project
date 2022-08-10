// dont do this mistakes
const user1 = {
    firstname: "naveed",
    age : 6,
    about :function(){
        console.log(this.firstname,this.age);
    }
}
const myfun =user1.about.bind(user1);
myfun();




// use .bin(user1 to avoid undefined)