// // sort
//  const numbers = [5,9,1200,400,3000]; 
//  numbers.sort();
//  console.log(numbers);

 // sort chnage the origninal array
 // ["5" ,"9", "1200", "400" ,"3000"]
 // [53 , 57 ,49 ,52 ,51]
 // ascii code 

//  const string = ["naveed ", "abc" ,"bean"];
//  string.sort();
//  console.log(string);

 const numbers = [5,9,1200,400,3000]; 
 numbers.sort((a,b)=>{
    return a-b;
 })

 console.log(numbers);
