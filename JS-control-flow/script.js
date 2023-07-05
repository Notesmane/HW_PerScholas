// // global or outer scope
// let x = 10;
// let y = 5;

// {
//     // inner scope
// 	let z = x + y;
// 	console.log(z);
// }

// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }

//   {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

//   let x = 5;

// if (x > 0) {
// 	console.log('Positive!');
// }

// x++;

// else {
// 	console.log('Negative.');
// }

// x--;


// let price = 0;

// if (price) {
//     console.log('TRUE');
// } else {
//     console.log("FALSE");
// }


// Try and Catch

// let try1 = 10;

// try {
// 	if (try1 < 0) {
// 		console.log("Negative!");
// 	} else {
// 		throw "Error - I don't know what I'm doing.";
// 	}
// } catch (error) {
// 	console.log(error);
// }

// console.log("Does this log?");



let val3 = 10;

try {
	if (val3 > 0) {
		let isEven = (val3 % 2 == 0) ? true : false;
	} else if (val3 <= 0) {
		throw "Error - Value of 0 or below.";
	}

	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(val3);
}