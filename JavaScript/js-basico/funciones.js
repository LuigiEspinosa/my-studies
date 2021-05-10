
// DECLARATIVE

function declarativeFunction() {
    let number = 4;

    return number;
}


// EXPRESSION

let myFunction = function() {
    let a = 2;
    let b = 2;

    return a + b;
}


// Functions with parameters
// Arrow function
let parameters = (a, b) => {
    return a * b;
}

// User variables in declarations
function students(studentDB) {
    console.log(`Hi, ${studentDB}`);
}

// Operations
let subtraction = function(a,b) {
    let result = a - b;

    return result;
}

// Initialize a function
declarativeFunction();      // Print 4
myFunction();               // Print 4 
parameters(2, 2);           // Print 4
students(studentDB)         // Print de name of all the students in the DB
subtraction(8, 4)           // Print 4