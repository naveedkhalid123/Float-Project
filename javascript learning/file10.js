// nested if else

// winning number 19

 // 19your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess n number");



if(userGuess === winningNumber){
    console.log("your guess is right!!!");
}
else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }
    else{
        userGuess > winningNumber
        console.log("too high !!!");
    }
}