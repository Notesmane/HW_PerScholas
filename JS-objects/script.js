
// const car = ['blue', 4000, 1989];
const arr = []
arr.push('honda');

const car = {
    color: 'blue',
    mileage: 4000,
    year: 1989, // for the last value you dont need to put a comma at the end
    isElectric: false
}

// const object = {
// property: value
// }

// console.log(arr[0]); // this references the index
console.log(car.color); // prints the property
console.log(car.mileage);
console.log(car.year);
console.log(car.isElectric);

const tesla = {};
tesla.colors = ['White', 'black'];
tesla.mileage = 1000;
tesla.year = 2023;
tesla.isElectric = true;


if (tesla.model === undefined) {
    tesla.model = 'Y';
}

delete tesla.isElectric; // this deletes the object and property

console.log(tesla);
console.log(tesla.model);


// For In Loop
for (let prop in tesla) {
    console.log(prop);
    console.log( tesla[prop] );

    if (prop === 'colors') {
        for (let color of tesla[prop]) {
            console.log(color);
        }
    }
}

tesla.colors.forEach(function(color) {
    console.log(color);
});

if (tesla.)

