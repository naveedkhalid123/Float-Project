// default parameters

  function addtwo (a,b=1){
    // if(typeof b === "undefined"){
    //     b = 1;
    // }
    // add if typeof b is = 1 and set default value of  = 1
    return a+b;

  }
  const ans = addtwo(4);
  console.log(ans);