const usermathods ={
    about: function(){
        return`${this.firstname} is ${this.age} years old`
    },
    
     is18:function(){
        return this.age >= 18;
    },
    sing:function(){
        return'toon na na la '
    }
    // this is method called by a ( object.create)
}





function  createuser (firstname,lastname,email,age,address){
    const user = Object.create(usermathods); // this line 
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = usermathods.about;
    // user.is18 = usermathods.is18;
    // user.sing = usermathods.sing;
  // we can skip these code by adding a protoelement in a empty set
    return user;
    }
    const user1 = createuser("naveed","khalid","naveedkhaliddd",12,"kskskssk")
    const user2 = createuser("naveed","khalid","naveedkhaliddd",12,"kskskssk")
   
    const user3 = createuser("naveed","khalid","naveedkhaliddd",12,"kskskssk")
    console.log(user1);
   console.log(user1.about());

//    console.log(user3.about());
//    console.log(user3.sing());

// so , we can make thousands of methods , but we can call them once only and no neend of calling them agina n agin
   