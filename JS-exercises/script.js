// let num = -25;

//     if (num > 0){
//         console.log('positive');
//     } else {
//         console.log('negative');
//     }

// let age = 35;

// if (age >= 18) {
//     console.log('Access Granted!');

//         if (age >= 30) {
//             console.log('You get admin access!');
//         } else {
//             console.log('Normal user');
//         }
// } else {
//     console.log('Access Denied!');
// }


// let num2 = 35;

//     if (num2 > 100) {
//         console.log("Number is greater than 100");
//     } else {
//         console.log("Number is less than or equal to 100");
//     }

// if (num2 < 0) {
//     console.log("and is also a negative number");
// } else {
//     console.log("but number is not a negative number.");
// }

// let age = 60
// let userName = 'john';

// if (age >= 18 && age <= 29) {
//     console.log('Access denied!');
// } else if (age >= 30 && age < 60) {
//     console.log('You get admin access');
// } else if (age >= 60 && userName === 'alex') {
//     console.log('You get special access!');
// } else {
//     console.log('Access Denied!');
// }

let num = -34

    if (num > 100) {
        console.log('Number is greater than 100 and is positive');
    } else if (num > 0 && num <100) {
        console.log('Number is positive but not greater than 100');
    } else if (num < 0) {
            console.log('Number is a negative number');
    }

let grade = 54

    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80 && grade < 90) {
        console.log("B");
    } else if (grade >= 70 && grade < 80) {
        console.log("C");
    } else if (grade >= 55 && grade < 70) {
        console.log("D");
    } else {
        console.log("F");
    }


let z = 5;
let y = 4;
let operand = "*";
    switch (operand) {
       case "+":
           console.log(z + y);
           break;
       case "-":
           console.log(z - y);
           break;
       case "*":
           console.log(z * y);
           break
       case "/":
           console.log(z / y);
           break;
       default:
           console.log("Invalid Operand")
           break;
    }