// Datatypes
"strings";
1000;
false;

// Variables
var someVariable = -100;
var isItRaining = false;

// If Statements
if (someVariable > 10) {
    console.log("This number is higher than 10.");

    if (someVariable < 1000) {
        console.log("This number is lower than 1000.");
    }

} else {
    console.log("This number is lower than 10.");
}


if (isItRaining == true) {
    console.log("Bring an umbrella");
}

// Functions
function coolFunction() {
    console.log(100);
    console.log(10);
    console.log(1);
}

coolFunction();
coolFunction();
coolFunction();


// Arguements and Parameters
// Arguements get stored inside of Parameters
// Arguements are the values given to the function, and parameters are the function variables that will hold those values.

//Parameters are written inside the parameters of the function DEFINITION
function addExclamation(message, num,) {
    console.log(message, "!!!", 100);
    
    var results = num * 2
    console.log(results);
}


// Arguments are written insde the parenthesis of the function CALL.
addExclamation("Hello how are you");
addExclamation("It is raining", 7);
addExclamation("Goodbye", 14);


// console.log(100, 1000, "hello there");


// Returning values from functions.

// The soneText variable was created when you call the function, but it also gets destroyed when the function call ends.
function getText() {
    var someText = "Nice weather.";
    return someText; 
}

console.log( getText() );

// someText does not exist as it was destroyed when the function call ended.
//console.log(someText);










var userName = "Kristap"

//Concatenation - uses a plus
var completeSentence = "My name is " + userName;
console.log(completeSentence);


//Type Coercion
console.log("Hello" + 100);
console.log("100" + 100);
console.log(100 + "100");
console.log("This is false " + true);

// Trying to myltiply a string, we end up with a special number called NaN.
var longString = "Hello there!" * 10;
console.log(longString);