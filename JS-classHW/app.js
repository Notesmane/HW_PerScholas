
// from: https://perscholas.instructure.com/courses/1513/pages/week-3-day-3-lecture-classes-and-oop-in-action?module_item_id=965148


// class declaration
class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.eyes = eyes;
        this.hair = hair;
        this.name = name;
        this.age = age;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false; // the default value is set to false if it is not defined 
    }
        greet(otherCharacter) {
            console.log('Hi ' + otherCharacter + '!');
        }
        smite () {
            console.log('I smite thee you vile person');
        }
        // setter function (this is needed if a property is private)
        setHair(hairColor) {
            this.hair = hairColor;
        }
        classyGreeting (otherClassyCharacter) {
            console.log('Greetings ' + otherClassyCharacter.name + '!');
          }
          setHair (hairColor) {
            this.hair = hairColor;
          }
}

// instances
const me = new Character('Ronnie the Great', 33, 'brown', 'bald as a babe', true, false);
const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', false, true);

console.log(me);
console.log(you);

console.log(typeof me);
console.log(typeof you);

me.greet('Ronnie');
you.greet('Cathy');

