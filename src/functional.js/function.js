// calling function using variable
function sayHello(){
    return("hello world")
}

// const fn=sayHello;
// console.log(fn());

function greet(fnMessage){  // function will take fun as parameter
    console.log(fnMessage());
}

console.log(greet(sayHello));
// Method 2
function sayHello(){
    return function(){
        return "hello world";
    }
}

let fn=sayHello();
let message= fn();