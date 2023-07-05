// we can print stuff on the console //
console.log('script is running!!!');

/**
 * this
 * is
 * a
 * multi
 * line
 * comment
 */

// ========= Variables ========= //

// string
var myVariables = "some value";

// number (integer)
let num1 = 11;

// decimal number (float)
const PI = 3.14;

// bolean
let isAdult = true;

// string
let roomNumber = "205";

// string
let someVar = 'hello world!';

// number (integer)
let carMileage = 35657;

// string
let _favFood = `pizza`;

console.log(num1);
console.log(myVariables);
console.log(isAdult);

// Global variable
var gloablVariable = "you can access from anywhere";
let message = "hello";

if (true) {
        // block scope
    var globalVariable = "new scope";
    let message = "hello again!";
    console.log(message);
}

console.log(globalVariable);
console.log(message);

// global scope
let x = 10;

{
    // block scope
    let x = 100;
    let y = 200;
    console.log(x);
    // let total = 10
    console.log(total +100);
}

console.log(x);

const result = 90;
result = 80;

// ======================================
var counter = 1;
// Do something with this counter.

// Then, some many lines later...
function processData() {
   var counter = 1;
   // Do something with this other counter.
}

// Which counter are we referencing here?
counter++;

console.log(counter);

// Literals

let age = 42
console.log(age);

// ====== type of keyword

let msg = "hello JS!";
let grade = 85;
let ip = 192.168;
let someVar1; // <== undefined
someVar1 = "BYE"

let otherVar = null;  // typeof will equal "object"

console.log(typeof msg);
console.log(typeof grade);
console.log(typeof ip);
console.log(typeof true);
console.log(typeof flase);

