/* ==================== Spread Operator ==================== */

const obj = {
    name: 'Luigi',
    age: 32,
    country: 'CO'
};

let { name, ...all } = obj;
let { country, ...all2 } = obj;

console.log(name, all);
console.log(country, all2);




/* ==================== Propagation properties ==================== */

const obj = {
    name: 'Luigi',
    age: 32,
    country: 'CO'
};

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1);




/* ==================== Promise.finally ==================== */

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 4000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Final'));




/* ==================== Regex ==================== */

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);