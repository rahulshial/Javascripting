console.log('Hello World!');
console.log('Math.floor() function returns the largest integer less than or equal to a given number between 0 & 50 - Answer:  ' + Math.floor(Math.random() * 50));
console.log('Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) between 0 & 100 - Answer: ' + Math.random() * 100);
console.log('Largest INT bet 0 - 100 - Answer: ' + Math.floor(Math.random() * 100));
console.log('Math.ceil() function always rounds a number up to the next largest integer - 43.8 = ' + Math.ceil(43.8));
console.log('Number.isInteger() method determines whether a value (2017) an integer - ' + Number.isInteger(2017));
var favoriteFood = 'pizza';
var numOfSlices = 8;
favoriteFood = 'rice';
console.log('My favorite food is - ', favoriteFood);
console.log('Pizza has ' + numOfSlices + ' slices');
let changeMe = true;
changeMe = false;
console.log('use of let keyword to allow value of changeMe from true to false - ', changeMe);
console.log('variables declared with const should be initialized with a value which cannot be changed later in the program');

var myName = 'Rahul';
var myCity = 'Calgary';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

var a = 5;
var b = "5";
var theNumbersMatch
console.log("a = " + a);
console.log("b = " + b);

if ( a == b ) {
    theNumbersMatch = true;
    console.log("a == b: " + theNumbersMatch);
} 

if (a !== b) {
    theNumbersMatch = false;
    console.log("a === b: " + theNumbersMatch);
}

// document.body.innerHTML = "value of a: " + a + "</h1>"
// document.body.innerHTML = "theNumbersMatch: " + theNumbersMatch + "</h1>"

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

isLocked? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

isCorrect? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

function greetWorld() {
  console.log('Hello, World!');
}

greetWorld(); // Output: Hello, World!

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');

  // default values in functions

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  makeShoppingList('','laadi pav','');

  // return values
  function monitorCount(rows, columns){
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5,4);
  console.log('num of monitors: ' + numOfMonitors);

  //Helper Functions
  function multiplyByNineFifths(number) {
    return number * (9/5);
  };
  
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
  
  console.log('get farenheit of 0: ' + getFahrenheit(0));

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 100;
}

const totalCost = costOfMonitors(5,4);
console.log(totalCost);

// function expressions - used and forgotten, does not pollute global space

const plantNeedsWater = function(day) { 
    if(day === 'Wednesday') {
      return true;
    }
    else {
      return false;
    }
  }
  
  console.log(plantNeedsWater('Tuesday'));

  // => arrow functions replaces the keyword function eg const plantNeedsWater = (day) => {...}. 
  // Single args do not have to be enclosed in (). eg  const plantNeedsWater = day => expression.
  // const plantNeedsWater = day => day === 'Wednesday' ? true : false;

  // Local & Global Variables
  const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves); // local variable
    }
    // Add if statement here:
    
    console.log(lightWaves); // global variable
  };
  
  logVisibleLightWaves();
  
  //Nested Loops
let bobsFollowers = ['Rahul', 'sachin', 'anuj', 'sandeep'];
let tinasFollowers = ['varsha','Rahul','sachin'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for(let j = 0; j < tinasFollowers.length; j++) {
     if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
      console.log('Tina & Bob have the same follower: ' + tinasFollowers[j]);
  }
}
}

const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7;
}