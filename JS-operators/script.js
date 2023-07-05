console.log('running...');

let num1 = 4;
let num2 = 7;

console.log(num1 + num2);

let num3 = 4;
let num4 = 2;

console.log(num3 - num4);

let num5 = 6;
let num7 = 4;

console.log(num5 * num7);

let num8 = 4;
let num9 = 2;

console.log(num8 / num9);

let num10 = 3;
let num11 = 2;

console.log(num10 % num11);

// long way to do math operation plus assignment

let newNumber = 9;
newNumber += 1;
newNumber -= 1;
newNumber *= 2;
newNumber /= 3;
newNumber %= 2;
console.log(newNumber);

// ===
let total = 19;
total++
total--
console.log(total);

// ==
let result = 99
let currentNumber = result++;
console.log(currentNumber);
let recentNumber = ++result;
console.log(recentNumber);


// ========= Comparison Operators

console.log(3 < 4); // true
console.log(5 > 10); // false
console.log(78 >= 78); // true
console.log(56 <= 44); // false
console.log(100 == 100); // true
console.log(30 != 35); // true

let n1 = 3;
let n2 = 4;
console.log(n1 < n2);

console.log("=====================");
console.log('3' == 3); // convert, equals true since JS will interpet the string
console.log('3' === 3); // compare, equals false since they are different types and different value

console.log('5' != 5);
console.log('5' !== 5);
console.log(3 + '3');

console.log('Hello' + 'world'); // plus sign will do addition but will also concantonate strings, producing Helloworld in console


// =============== Logical Operators


// AND Operators (both have to be true in order for it to be true, as soon as one is flase, it is false)
console.log(3 > 2 && 6 == 6); // this Logic is true
console.log(3 > 2 && 6 == 7); // this Logic is false

// OR Operator (either can be true for it to be true)
console.log(3 > 2 || 6 == 6); // thisLogic is true
console.log(3 > 2 || 6 == 7); // thisLogic is true

// NOT Operator
console.log( !(3 > 2 && 6 == 6)); // this Logic is false
console.log( !(3 > 2 || 6 == 7)); // this Logic is false