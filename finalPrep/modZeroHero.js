// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Wonder Woman";
var specialAbility = "Super Strong";

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility

var greeting = "Hello" + heroName;
var catchphrase = `Now I know, I have ${specialAbility}. So I stay, I fight, and I give, for the world I know can be. BTW I\'m ${specialAbility}!`;


// Declare two variables - power AND energy - set to integers
var power = 1000;
var energy = 5000;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = false;
var identityConcealed = true;


// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings

var archEnemies = ["Angle Man","Ares","Blue Snowman"];
var sidekicks = ["Donna troy", "Steve Trevor", "Hippolyta"];

// Print the first sidekick to your console
console.log(sidekicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Cheetah");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sidekicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick----??????? you mean removed right?
console.log(sidekicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel

function assessSituation (dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50) {
    console.log(badExcuse);
  } else if (dangerLevel <=50 && dangerLevel >=10) {
    console.log(saveTheDay);
  } else {
    console.log("Meh. Hard pass.");
  }
}

var saveTheDay = "If you need me, I'm just a call away";
var badExcuse = "Sometimes you have to go to the bathroom";
assessSituation(100, saveTheDay, badExcuse);

// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.


//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
assessSituation(99, announcement, excuse);
assessSituation(21, announcement, excuse);
assessSituation(3, announcement, excuse);


// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Bicho papao",
  smell: "trash",
  weight: 10,
  citiesDestroyed: ["New york", "Dalas", "San Fransisco"],
  luckyNumbers: [5, 6, 13],
  adress: adress = {
    number: 1950,
    street: "N Hollywood blvd",
    state: " California",
    zip: 90094,
  }
}


console.log(scaryMonster);

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

class SuperHero {
  constructor(name, superpower, age) {
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = "The Syntax Error";
    this.powerLevel = 100;
    this.energyLevel = 50;
  }
  sayName() {
    console.log(this.name);
  }
  maximizeEnergy(energyLevel) {
    this.energyLevel = energyLevel;
  }
  gainPower(gainPower){
    this.powerLevel = this.powerLevel + gainPower
    console.log(this.powerLevel);
  }
}



// - Create 2 instances of your SuperHero class

var hero = new SuperHero("Skywalker", "Jedi", "35");
console.log(hero);


hero.sayName();
hero.maximizeEnergy(2000);
hero.gainPower(80);
console.log(hero);



var antiHero = new SuperHero("Venon", "Super strength, shape-shifter", "39");
console.log(antiHero);


antiHero.sayName();
antiHero.maximizeEnergy(100);
antiHero.gainPower(20);
console.log(antiHero);


// Reflection
// What parts were most difficult about this exerise?

//The methods, in class // I don't understand the module %
//update: module is the division of 2 values and returns the remainder .

// What parts felt most comfortable to you?
// everything else , variables, function, even creating the class and object, but methods.

// What skills do you need to continue to practice before starting Mod 1?
// methods.
