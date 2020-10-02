// Takes the text in the quotes and sends it to the Javascript Console
console.log("Hello World!");
console.log("How are you doing?");
console.log("Hi");

// This is a single line comment

/* This starts and ends comments, multi-line comments */

// DATATYPES
// String, spaces and special characters are part of a string. You can't do math on strings.
"This is a really long sentence. @#$%^&*";
"To use single quotes ' and ' in the string, use double quotes on the outside.";
'To use double quotes " and " in the string, use single quotes on the outside.';

// 'There's a nice day!' INCORRECT
// "There's a nice day!" CORRECT

// The computer will break on the second string.
// " Hello this is a double quote " "its used for text";

"''''''''''''''''''''";

'""""""""""""""""""""';


"100";

console.log(1000);

console.log(true);

console.log("Hey there");

// Number  - numbers not wrapped in double quotes
100;
10.9;
.70009;

// Boolean
true;
false;


/* for (var i = 0; i <100000; i++) {
    console.log("hello");
 }  */



//     VARIABLE
var myBox;

// Naming Schemes
// Camel Case: capitalize every word AFTER the first word.
// Example: originalLocation
// Snake Case: every space is replaced by an underscore and there are no capital letters.
// Example: original_location

myBox = "books";

var secondVariable = "bathroom supplies";


console.log(myBox);

// Mathematical Operators
// +, -, /, *, % 

var sum = 2 + 4;
var difference = 2 - 4;
var quotient = 2 / 4;
var product = 2 * 4;
var remainder = 2 % 4;

console.log("The Quotient of 2 and 4 is", quotient);
console.log(remainder);

// Logical Operator
// ==. >, <, !=, <=, >=

var isItRaining = true;

isItRaining == true;  // true

var someNumber = 100;

someNumber == 50; // false

someNumber >= 50; //true

someNumber < 50; //false

"hello"  == "hello"; //true
"goodbye" == "hello"; //false
"Hello" == "hello"; //false
"hello " == "hello"; //false

true == true; //true
true == false; //false
false == false; //true

sum > product; //false

var personAge = 21;


// If Statement, is to run code based on existing data
//IF    this is true      then run this
//If        ()                  {}




if (false) {
    console.log("Nice Day");
    console.log("Hello there!");   
}
if (personAge >= 21) {
    console.log("Congratz you can drink");
    } else {
    console.log("Sorry, you are too young to drink");
}

console.log("We march on");

// Function
//  keyword     name of function     code block
// function       myFunction()            {}

function myFirstFunction()  {
   
    console.log("Have a nice day!");
    console.log("Today will be sunny");
    console.log("Today will be dry");
}

    if (raining) {
        console.log("Bring and umbrella");
    }
        
    var raining = true;


myFirstFunction();
myFirstFunction();
myFirstFunction();
