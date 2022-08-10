// splice mthod
// start , delete and insert in array

const myarray =["item1","item2","item3"];
// delete
// myarray.splice(1,1);
// console.log(myarray);

// insert

// myarray.splice(1,0,"inserted item");
// console.log(myarray);

// insert and deletion at same time
myarray.splice(1,2,"inserted item 1","inserted item2");
console.log(myarray);
