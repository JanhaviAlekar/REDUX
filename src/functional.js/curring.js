import pipe from 'lodash/fp/pipe.js'
let input= "    javascript   ";

const trim= str => str.trim();
// const wrapInDiv = str => `<div> ${str} </div>`;
// const wrapInSpan= str => `<span> ${str} </span>`
// wrap is repeating
const wrap = (type, str)=> `<${type}> ${str} </${type}> `
const toLowerCase= str => str.toLowerCase();

const transform2=pipe(trim, toLowerCase ,wrap); // cant pass arug with wrap use curring

console.log(transform2(input));

//              curring
// takes n arguments we can pass single argument st atime
function add(a){
    return function (b){
        return a+b;
    }
}
const add2 = a => b=>  a+b;
add2(1)(5) //add(1,5)

//using curring
// const wrap = type => str => `<${type}> ${str} </${type}> `
// const toLowerCase= str => str.toLowerCase();

// const transform2=pipe(trim, toLowerCase ,wrap("div"));