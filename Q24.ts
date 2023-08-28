// Tests for equality and inequality with strings
const string1:string = "apple";
const string2:string = "banana";

console.log(string1 === string2);   
console.log(string1 !== string2);   

// Tests using the lower case function
const inputString = "Hello World";
const lowerCaseString = inputString.toLowerCase();

console.log(lowerCaseString === "hello world");  
console.log(lowerCaseString === "HELLO WORLD");  

// Numerical tests
const x : number = 10;
const y : number = 20;

console.log(x === y);   
console.log(x !== y);   
console.log(x > y);     
console.log(x < y);     
console.log(x >= y);     
console.log(x <= y);     

// Tests using "and" and "or" operators
const isSunny = true;
const isWarm = false;

console.log(isSunny && isWarm);  
console.log(isSunny || isWarm);  

// Test whether an item is in an array
const numbers = [1, 2, 3, 4, 5];
const targetNumber = 3;

console.log(numbers.includes(targetNumber));  
console.log(numbers.includes(6));            

// Test whether an item is not in an array
const fruits = ["apple", "banana", "orange"];
const targetFruit = "grape";

console.log(!fruits.includes(targetFruit));  
console.log(!fruits.includes("apple"));      
