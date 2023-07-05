
// // (initialization; condition; incrementor) DONE
// use FOR LOOPS when you know exactly how long you want the loop to run

// for (let counter = 1; counter <=5; counter++) {
//     // code goes here
//     console.log(counter);
// }

// ============================================= DONE
// Exercise #1 countdown from 10 to 1

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// ============================================= DONE
// Exercise #2 Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10

// for (let i = 1; i <= 9; i += 2) {
//     console.log(i);

//     if (i === 9) {
//         for (let j = 2; j <= 10; j += 2) {
//             console.log(j);
//         }
//     }
// }

// ============================================= DONE
// Exercise #3 output multiples of 3 from 6 to 60

// for (let i = 6; i <= 60; i += 3) {
//     console.log(i);
// }

// ============================================= DONE
// Exercise #4 write a loop to build hash pyramid

// let hash = "#";
// for (let i = 0; i <= 6; i++) {
//     // console.log(i);
//     console.log(hash);
//     hash += "#";
// }

// ============================================= DONE
// Exercise 5 print even numbers

// for (let i = 0; i <= 10; i += 1) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even!`);
//     } else {
//         console.log(`${i} is not even!`);
//     }
// }

// =============================================
// Exercise #6 from 1-20 print; "prime" if prime, "even" if even or "odd" if odd

// for (let i = 1; i <= 20; i++); {
//     if (i % 2 = 1); {
//         console.log("even")
//     } else {
//         (i % 2 = 0); {
//             console.log("is odd"); {
//         }
//     }
// }
// }


// =============================================
// WHILE LOOPS
// (in all while loops you have to make sure the condition will eventually equal false)
// in the below example, at some point the a will eqaul 10 since we gave it the a++ incremental counter

// let a = 1;

// while(a <= 10) {
//     console.log(a);
//     a++;
// }


// ============================================= DONE
// Exercise #1 Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop

// let a = 3

// while (a < 35) {
//     console.log(a);
//     a += 3;
// }

// ============================================= DONE
// Exercise #2 Keep printing integers in multiples of 5 as long as integers are less than 100

// let eleven = 1

// while (eleven < 100) {
//     if (eleven % 5 === 0) {
//         console.log(eleven);
//         eleven++;
//     }
//     eleven++;
// }


// ============================================= DONE
// Exercise #3 Using a while loop print integers between 0 and 20. All numbers divisible by 2
// should be multiplied by 3 before they are output. All other integers should not be output.

// let num = 0

// while (num <= 20) {
//     if (num === 0) {
//         console.log(num);
//     }
//     num++;
//     if (num % 2 === 0) {
//         console.log(num * 3);
//     }
// }


// ============================================= DONE
// Exercise #4 Using a while loop, print out all prime numbers between 0 - 20

// let prime1 = 0

// while (prime1 <= 19) {
//     if (prime1 === 0) {
//         console.log(prime1)
//     } prime1++;
//     if (prime1 % prime1 === 0) {
//         console.log(prime1);
//     }
//     prime1++;
// }


// ============================================= DONE
// Learn how to debug this code in class

// let addThis = 0;
// let sum = 0;

// while (addThis < 10) {
//   sum += addThis;
//   addThis++;
// }
// console.log(sum);


// ================================================
// Use a loop to iterate through the numbers 1 through 16. Push each number into fb,
// but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of
// numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.
// Log fb to the console to see the output.

// let fb = [];
// // ADD CODE HERE

// for (let i = 1; i <= 16; i++) {
//   if (i % 3 === 0 && 1 % 5 === 0) {
//     fb.push("fizzbuzz");
//   } else if (i % 3 === 0) {
//     fb.push("fizz");
//   } else if (i % 5 === 0) {
//     fb.push("buzz");
//   } else {
//     fb.push(i);
//   }
// }

// console.log(fb);

// keep getting fb should equal [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11,
// 'fizz', 13, 14, 'fizzbuzz', 16]


// ===================================================
// Iterate through the array and multiply a number by 10 if it is greater than or equal to 5.

// const timesTenIfOverFive = [23, 9, 11, 2, 10, 6];
// // ADD CODE HERE
// for (let i = 0; i < timesTenIfOverFive.length; i++) {
//   if (timesTenIfOverFive[i] >= 5); {
//     (timesTenIfOverFive[i] *= 10);
//   } else {
//     console.log(timesTenIfOverFive[i])
//   }
// 	console.log(timesTenIfOverFive[i]);
// }

// Uncomment the line below to check your work!
// console.log(timesTenIfOverFive); // -> should print [230, 90, 110, 2, 100, 60]