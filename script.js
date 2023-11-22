// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

/* 


ASSIGNMENT



*/



//Math Problems
let isDivisBy5 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);

let isFirstBigLast = n1 > n4;

let arithChain = ((n1 - n2) * n3) % n4;

//log answers to assignment section 1 questions
console.log(isDivisBy5);
console.log(isFirstBigLast);
console.log(arithChain);

//Practical Math

const totalDistance = 1500; //distance from current location to destination

let speed = 55; // chosen MPH

let mpg = 30;   // miles per gallon used at 55MPH

const budget = 175; //total amount available to spend over trip

const avgGas = 3; // the average cost per gallon of gas

let hoursOfTrip = totalDistance / speed; // a variable to calculate how long trip will take

let gallonsNeeded = totalDistance / mpg; // a variable to calculate how many gallons of gas will be needed

let fullFuelCost = avgGas * gallonsNeeded // a variable to calculate how much you'll pay for fuel throughout trip

//log answers to assignment section 2 questions
console.log(`The trip will require ${Math.floor(gallonsNeeded)} gallons of gas`);
console.log(`It will cost ${Math.floor(fullFuelCost)} dollars to cover the gas needed for this trip`);
console.log(`The trip will take about ${Math.floor(hoursOfTrip)} hours, give or take`);

