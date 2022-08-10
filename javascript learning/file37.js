// function inside function

const app = ()=>{
    const myfunction = () =>{
        console.log("hello from myfunction");
    }

    const addtwo = (num1 , num2)=>{
        return num1 + num2;
    }

    const mul = (num1,num2)=>{
        return num1 * num2;
    }
    console.log("insdie app");
    myfunction();
    console.log(addtwo(2,3));
  console.log(  mul(3,4));
}

app();