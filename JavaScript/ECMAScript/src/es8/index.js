/* ==================== Object entries ==================== */

const data = {
    frontend: 'Luigi',
    backend: 'Daniel',
    design: 'Simhon'
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);




/* ==================== Object values ==================== */

const data = {
    frontend: 'Luigi',
    backend: 'Daniel',
    design: 'Simhon'
}

const values = Object.values(data);

console.log(values);
console.log(values.length);




/* ==================== Object values ==================== */

const string = 'Hello';

console.log(string.padStart(8, 'hi '))      // Num of Characters, Characters
console.log(string.padEnd(12, ' -----'))    // Num of Characters, Characters




/* ==================== Async - await ==================== */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 4000)
            : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();