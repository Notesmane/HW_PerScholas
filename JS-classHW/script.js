
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances


class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.running = false;
    }
    start() {
        this.running = true;
        console.log('Running...')
    }
    stop() {
        this.running - false;
        console.log('Stopped...');
    }
    toString() {
        console.log(`The cat ${this.name} is ${this.age} human years old.`);
    }
}

const paws = new Cat('Paws', 'orange', 4, true);
const mimo = new Cat('Mimo', 'black and white', 11, false);

paws.start();
paws.stop();
paws.toString();

mimo.start();
mimo.stop();
mimo.toString();

console.log(paws);
console.log(mimo)


// =======================================================================================


class Pirate {
    constructor(name, boatName, origin) {
        // these are propterties
        this.name = name;
        this.boatName = boatName;
        this.origin = origin;
        this.twisted = false;
    }
    // these are methods
    drinking() {
        this.twisted = true;
        console.log('Mr. Pirate is Drunk!');
    }
    sober() {
        this.twisted = false;
        console.log('Is focused and sober.');
    }
    toString() {
        console.log(`The Pirate\'s name is ${this.name}and his is from ${origin}.`)
    }

}

const redCrew = ['ahab', 'jack', 'bill']; // this array could also be filled with the names ie const. redCrew = [ahab, jack, bill]; then you dont have to create the following line
// redCrew.push(ahab, jack, bill); // this is the alternate way to do the above line
console.log(redCrew);

const blueCrew = [] //
blueCrew.push('john', 'buck', 'jamie');
console.log(blueCrew);

for (const pirate of blueCrew) {
    console.log(pirate.name);
    console.log(pirate.boatName);
    console.log(pirate.origin);
}

for (const pirate of redCrew) {
    console.log(pirate.name);
    console.log(pirate.boatName);
    console.log(pirate.origin);
}

const ahab = new Pirate('Capt. Ahab', 'The Moby', 'Athens');
const jack = new Pirate('Jack Sparrow', 'The Black Pearl', 'Grand Cayman');
const bill = new Pirate('Bill Sail', 'The Ugly Dutch', 'Nassau');

const john = new Pirate('Capt. John Wave', 'The Titan', 'mhgjhgkk');
const buck = new Pirate('Buck Nasty', 'hhjhbjh', 'hrttfh');
const jamie = new Pirate('James Dunn', 'hjkhkjh', 'jhkjh');
