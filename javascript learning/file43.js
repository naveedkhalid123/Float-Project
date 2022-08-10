// callback functions

function myfun2(){
    console.log("inside my func 2");
}

function myfun(callback){
callback();

}

myfun(myfun2);


// taking a function as a input and call it is calleed callback