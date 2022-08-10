const obj1= {
    key1:"value1",
    key2 : "value2"
}

const obj2 = Object.create(obj1);
    // there is one more way to create empty object..
    obj2.key3 = "value3";

console.log(obj2.key2);

console.log(obj2.__proto__);

//  js print the value of key2 , which is not avtually a part pf obj 2 .
// but we created a empty object in object.create which store the value of obj1
