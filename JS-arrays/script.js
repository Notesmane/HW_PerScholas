
let student1 = "Kevin";
let student2 = "Cynthia";
let student3 = "Mahamadou";
let student4 = "Clement";
let student5 = "Benjamin";

console.log(`Welcome ${student1} to the class!`);

//* === Literal Array

const students = ["Kevin", "Cynthia", "Mahamadou", "Clement", "Benjamin"];

// gets the length of the array
console.log(students.length);

// print arrays in a table
console.table(students);

// access the last element in the array
console.log(students[students.length -1]);

// Class Constuctor function
const nums = Array(2, 4, 6);
console.log(nums);

// Array with different types
const arrOfStuff = ['Hello', 333, [], {}, true, function(){}];

const student11 = ["john", 22, true]

// array of objects
const data = [
    {
        name: 'john'
    },
    {
        name: 'john'
    }
];

const movies = ['Caddyshack', 'Interstellar', 'Scarface'];

// this accesses just a single element in the array
const firstMovie = movies[0];
console.log(firstMovie);

const lastMovie = movies[movies.length -1];
console.log(lastMovie);


// for this example you have to use < only, using <= will cause the loop to go passed the
// loop index by one, and will then cause an error since there will never be another element
// in the array passed its last element
for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i]);
}

// === for of
for (let i of movies) {
    console.log(` My favorite movie is ${i}`);
}

console.log('=========================================');


//* ========= Array Methods

const yourMovies = ['Caddyshack', 'Interstellar', 'Scarface'];
const myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

// concat()
// creates a new array combining the 2 arrays passed into the function
// const ourMovies = yourMovies.concat(myMovies);
// console.table(ourMovies);

// join()
// creates a new string combining the 2 arrays passed into the function
const ourMovies = yourMovies.join(myMovies)
console.table(ourMovies);

// making a copy of an array
const copyArr = yourMovies.concat();

console.log(yourMovies);
console.log(copyArr === yourMovies);

const otherCopyArr = yourMovies;
console.log(otherCopyArr);
console.log(otherCopyArr === yourMovies);

// push
// adds the element to the end of the array
yourMovies.push("Transformers");
console.log(yourMovies);

// unshift
// adds a new element to the beginning of the array
// the issue here to remember is that the new unshift element will now be index 0
// so if you have referenced any index numbers then this will change it
yourMovies.unshift('Toy Story');
console.log(yourMovies);

// ============= Pop
// removes the last element of the array
let item1 = yourMovies.pop()
console.log(item1);
yourMovies.pop()
console.table(yourMovies);

// ============= Shift
// will remove the first element from the start of the array
yourMovies.shift();

// ============= Splice
const favMovies = ['Caddyshack', 'Interstellar', 'Scarface'];

// the below removes index ZERO and only that one element
favMovies.splice(0, 1);

// the below removes the 2nd element of the index, only that one element, and then replaces it w/ "Toy Story"
// (index to start, number of elements to delete, then the element that you want to replace it at the same spot)
favMovies.splice(1,1, "Toy Story");

// ============= Slice
const topTwoMovies = favMovies

const oldMovies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
console.log(oldMovies);

// ForEach is a type of loop that grabs each item in the array and does the function to it. el stands for element
// oldMovies.ForEach(function(el) {
//     console.log( el.toUpperCase() );
// });

// a method is a function inside of an opject

// ===== Spread Operator
const juneMovies = ['Spaceballs', 'The Sting', 'Alien'];

// ============= this inputs the elements of an array into the current array, but as the elements on their own,
// not in their own array..
const juneCopy = ['Toy Story', ...juneMovies, 'Transformers'];

// join() returns a single string from the values inside of the array
console.log(juneCopy.join(" "));

console.log("==============================================");

// ============= Nested Arrays

const numArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// from numArray this will console.log the 2nd array, and then the 2nd element in that array
console.log( numArray[1][1] );

const numArray1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let u = 27;


