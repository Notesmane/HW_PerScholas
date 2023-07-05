// console.log(`running`);

// console.log(`Hello` + ` World!`); // outputs: Hello World
// console.log(`This is` + ` a String`); // outputs: This is a String
// console.log(`The number is ` + 5); // outputs: The number is 5
// console.log(`Hello` - ` World`); // Invalid, cannot use -
// console.log("3" - 2);

// const userName = "Indigo Montoya";
// // console.log(userName[0]);
// userName[6] = "X"; // can not redefine a string so this will show
// console.log(userName[2]);

// const frost2 =
// 	"Nature’s first green is gold, " +
// 	"Her hardest hue to hold. " +
// 	"Her early leaf's a flower; " +
// 	"But only so an hour. " +
// 	"Then leaf subsides to leaf. " +
// 	"So Eden sank to grief, " +
// 	"So dawn goes down to day. " +
// 	"Nothing gold can stay. ";

// console.log(frost2);
// console.log(userName[0]);
// console.log(frost2);

// const frost =
// 	"Nature’s first green is gold, \n\
// Her hardest hue to hold. \n\
// Her early leaf’s a flower; \n\
// But only so an hour. \n\
// Then leaf subsides to leaf. \n\
// So Eden sank to grief, \n\
// So dawn goes down to day. \n\
// Nothing gold can stay.";

// console.log(frost);

const a = 5;
const b = 10;

console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
Therefore, 'a' plus 'b' is equal to ${a + b}.`);


// ======= Template Literals
const city = `NYC`; // using backticks on a small string is bad practice
const population = 5000;
const relocated = 500;
console.log(`In ${city} we have a popluation of "${population}", new population is ${population - relocated}.`)