// while loop


if (true) {

}

var counter = 0;

while (counter < 10) {
    // Run code WHILE the conditiop is true.
    console.log("Running");

    counter = counter + 1;

}

// do while loop

while (false) {

}


do {
    // This line will ALWAYS run at least one time, because we execute the code once AND THEN we check the condition.   
} while (false);


// for loop

i++;

for (var i = 0; i < 10; i = i + 1) {
    console.log("Running");
    console.log(i);

}

// shorthands
var someNumber = 10;

someNumber++; // someNumber = someNumber + 1;
someNumber--; // someNumber = someNumber - 1;
someNumber += 2; // someNumber = someNumber + 2;
someNumber -= 2; // someNumber = someNumber - 2;
someNumber /= 3;
someNumber *= 3;

//        /*           *=

// function sayRunning() {
//    console.log("Running");
//}

//sayRunning();

// BREAK and CONTINUE;

for (var i = 0; i < 10; i = i + 1) {
    console.log("running with break keyword.");
    
    if (i == 6) {
        break;
    }
}


// Continue, once the continue keyword is executed, the rest of the code in the CURRENT loop will not run and will move on to the next iteration of the loop.
for (var i = 0; i < 10; i = i + 1) {
    
    if (true) {
        continue;
    }

    console.log("running with continue keyword.");
}

