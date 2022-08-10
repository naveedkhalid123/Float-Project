// block scope vs function sccope

// let and const are block scope

//  var is function scope

{
    let firstName = "naved";
    console.log(firstName);
}

{
    const firstName = "been";
    console.log(firstName);
}


{
    var firstName = "beann";
}

console.log(firstName);

// in let and constant we have to write entire code inside a block
// but for variable we may write code outside of block... 
