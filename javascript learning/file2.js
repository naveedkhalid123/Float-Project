// trim()
//to UpperCase()
//to LowerCase()
// slice()

let firstname= "   naveed      ";
console.log(firstname.length);

firstname = firstname.trim();
console.log(firstname);
console.log(firstname.length);
//uppercase
firstname = firstname.toUpperCase();
console.log(firstname);

//to lowercase
firstname = firstname.toLowerCase();
console.log(firstname);

//slice method , start index , end index
 let newstring = firstname. slice(0,3);
 console.log(newstring); 