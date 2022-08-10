// rest parameters

function myfun (a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
  // use ...c for storing rest values on c
}

myfun(3,4,5,6,7);

