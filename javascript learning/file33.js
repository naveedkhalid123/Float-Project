//  nested destructuring

    const users = [
        {userId : 1,firstName : "Naveed" , gender : "male"},
        {userId : 2,firstName : "waleed" , gender : "male"},
        {userId : 3,firstName : "been" , gender : "male"},
    ]
    
 const[{firstName} , , {gender}]=users;
 console.log(firstName);
 console.log(gender);
 // output will be naveed and male