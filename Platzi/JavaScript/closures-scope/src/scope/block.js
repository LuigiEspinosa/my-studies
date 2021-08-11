const fruits = () => {
    if (true) {
        var fruits1 = 'apple';

        // let fruits2 = 'banana';  // It's not defined
        // const fruits3 = 'kiwi';  // It's not defined
    }

    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
}

fruits();

/* ==================== */

let x = 1;

{
    let x = 2;
    console.log(x);
}

console.log(x);

/* ==================== */

const anotherFucntion = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }

    for (let j = 0; j < 10; j++) {
        setTimeout(() => {
            console.log(j);
        }, 1000)
    }
}

anotherFucntion();