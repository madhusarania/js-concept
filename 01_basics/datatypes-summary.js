// it has two types of datatypes .
// how it's categorise between two of them => it categorise between them is that it basis on
// how it store the data in the memory or how its access in  the memory which is
// Primitive (it is a call by function)
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 12334567890123n

// Reference(Non-Primitive): it is a type of datatype where the data in the memory of references allocate the value

// Array, Objects, Functions

const heros = ["ironmen", "blackpanther", "captainamerica"]

let myObj = {
    name: "madhu",
    age: 25,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof bigNumber);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) & Heap (Non-Primitive)

let myYoutubeName = "hiteshChoudharydotcom"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(anotherName);
console.log(myYoutubeName);

// Non-primitive

let userOne = {
    email: "user@goggle.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "madhu@goggle.com"

console.log(userTwo.email);
console.log(userOne);