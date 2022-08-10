//lexical scope

function myapp(){
    const myvar = "value1";
    function myfun (){
        const myvar = "value23";
        console.log("inside my function" ,myvar);
    }
    const myfun2 = function(){}
    const myfun3 =()=> {}

    console.log(myvar);
    myfun();
    
}

myapp();

//lexical environment ,,, java script print myvar 