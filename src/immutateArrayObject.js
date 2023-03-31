//pure functions no random value
// no current date no global state 
// return number *2 pure 
// return number*random not pure

// immutability
// once created cannot be changed
// to change create a copy then change
// javascript object and string are mutable
// using const keywrod we cannot assign new object but can change properties and method
// predictability concurrency fasterchangedetection
//cons= perfromance copying==memoryloss(structuralsharing overcome) 
//redux dont mutate

const person ={name:"john",
address:{
    country:"USA",
    city:"san f"
}

};
// const updated= Object.assign({},person, {age:43});
//spread op
const updated= {...person ,
    address:{
        ...person.address,
        city:"new york"
    },
    name:"bob"};

//updating arrays
const num=[1,2,3];
//adding
const index=num.indexOf(2);
const added=[
    ...num.slice(0,index),
    4,
    ...num.slice(index)
]    

//removing
const removed= num.filter( x => x!==2);

//const updaring

const updated2= num.map( n => n===2 ? 20: n);
//enforcing immutabilty
//immutable immer mori