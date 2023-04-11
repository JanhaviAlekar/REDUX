import pipe from 'lodash/fp/pipe.js'
let input= "    javascript   ";
// // // let output= "<div>" +input.trim() +" </div>";

// // //using functional programming 
// // // trim 
// // // wrapInDiv
// // // const trim= str => str.trim();
// // // const wrapInDiv = str => `<div> ${str} </div>`;
// // // const toLowerCase= str => str.toLowerCase();
// // // const result= wrapInDiv(toLowerCase(trim(input))  );



// // // composing 
const trim= str => str.trim();
const wrapInDiv = str => `<div> ${str} </div>`;
const toLowerCase= str => str.toLowerCase();

// // compose is higher order function

// const transform= compose(wrapInDiv ,toLowerCase, trim);
const transform2=pipe(trim, toLowerCase ,wrapInDiv);
// from right to left functionality
console.log(transform2(input));

