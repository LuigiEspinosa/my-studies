const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    // let y = 1;  // SyntaxError: Identifier has already been declared
    let y = 2;

    console.log(x);
    console.log(y);
}

anotherFunction();