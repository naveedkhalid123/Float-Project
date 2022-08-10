// function returning function

function myfunc (){
    function hello (){
        return "hello word"
    }
    return hello;
}

const ans = myfunc();
console.log(ans());

// a function returns the value of a function..