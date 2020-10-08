var string = "This is a sentence.";

var stringArray = string.split("");

console.log(stringArray);

stringArray.pop();

console.log(stringArray);

var updatedString = stringArray.join("");

console.log(updatedString);

var firstMatch = -1;


for (var i = 0; i < stringArray.length; i = i + 1) {

    var currentLetter = stringArray[i];

    if (currentLetter === "e") {
        console.log("We found an e!");
        
        firstMatch = i; // This will save the index number of the match, so it can be used later, after the loop is done.

        stringArray[i] = "E";

        // break; This will stop the loop once we find the first match.

        continue; // This will ignore the following code and move on with the rest of the loop.
    }
    console.log("No e here!");
}

if (firstMatch === -1) {
    console.log("We did not find any Es!");
} else {
}

console.log(stringArray.join(""));