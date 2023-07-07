//! A. Q=A
/*
1. How do we assign a value to a variable? //& we have to declare it with let or const, then give it a name snailcase, an equal sign, then the variable
2. How do we change the value of a variable? //& the same process but it has to be a let, make sure it isnt nested, and that its under the first declaration of the variable within the code
3. How do we assign an existing variable to a new variable? //& the existing has to be a let, declare the new variable with let, then give it a name, then equal it to the existing variable name
4. Remind me, what are declare, assign, and define? //&
5. What is pseudocoding and why should you do it? //& its when you write out the logic of the code in plain english. it helps keep your thoughts/steps organized as you write out the code
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? //& 10% at most thinking
*/


//! B. Strings

let firstVariable = "Hello World";
firstVariable = 456;
let secondVariable = firstVariable;
secondVariable = "Hello USA";

//& 6. the vaule of firstVariable is 456

let yourName = "Ronnie";

console.log(`Hello, my name is ${yourName}`);


//! C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');