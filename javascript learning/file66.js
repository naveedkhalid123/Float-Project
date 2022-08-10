
const usermathods ={
    about: function(){
        return`${this.firstname} is ${this.age} years old`
    },
    
     is18:function(){
        return this.age >= 18;
    }
    
}





function  createuser (firstname,lastname,email,age,address){
    const user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = usermathods.about;
    user.is18 = usermathods.is18;
  
    return user;
    }
    const user1 = createuser("naveed","khalid","naveedkhaliddd",12,"kskskssk")
    const user2 = createuser("naveed","khalid","naveedkhaliddd",12,"kskskssk")
    const user3 = createuser("naveed","khalid","naveedkhaliddd",12,"kskskssk")
   console.log(user1.about());
   console.log(user3.about());

   