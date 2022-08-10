// optioanl chaining

const user = {
    firstName:"naveed",
    // address : {housenum: "123"}
}
console.log(user?.firstName);
console.log(user?.address?.housenum);

//optional chanin use in  react speacialy when a code is not working but after sometime its working and and then in this wat its givr errror , so we dont need error  thats why we put ? which gives us undefinened
