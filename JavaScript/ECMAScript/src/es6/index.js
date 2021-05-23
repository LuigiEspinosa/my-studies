/* ==================== Parámetros ==================== */

function newFunction(name, age, country) {
	var name = name || "Luigi";
	var age = age || 21;
	var country = country || "CO";

	console.log(name, age, country);
}

newFunction();

// ES6
function newFunction2(name = "Luigi", age = 21, country = "CO") {
	console.log(name, age, country);
}

newFunction2();
newFunction2("Yess", 23, "CO");




/* ==================== Concatenación ==================== */

let hello = "Hello";
let world = "World";

let phrase = hello + " " + world;
console.log(phrase);

// ES6
let phrase2 = `${hello} ${world}`;
console.log(phrase2);




/* ==================== Multilinea ==================== */

let lorem =
	"\tQui consegautur. Commodi. Ipsum vel duis yet minima \n" +
	"\tMore Lorem ipsum";

console.log(lorem);

// ES6
let ipsum = `
    Qui consegautur. Commodi. Ipsum vel duis yet minima
    More lorem ipsum
`;
console.log(ipsum);




/* ==================== Desestructuración ==================== */

let person = {
	firstname: "Luigi",
	age: 21,
	country: "CO",
};

console.log(person.firstname, person.age, person.country);

// ES6
let { firstname, age, country } = person;
console.log(firstname, age, country);




/* ==================== Spread Operator ==================== */

let team1 = ["Luigi", "Yess", "Oscar"];
let team2 = ["Juan", "Alex", "Diego"];

let education = ["Andres", ...team1, ...team2];

console.log(education);




/* ==================== Variables ==================== */

{
	var globalVar = "Global var";
}

{
	let globalLet = "Global let";
	console.log(globalLet);
}

console.log(globalVar);
// console.log(globalLet); ReferenceError: globalLet is not defined

const a = "b";

// a = 'c'; TypeError: Assignment to constant variable.
console.log(a);




/* ==================== Objetos ==================== */

let firstname = "Luigi";
let age = 21;

obj = { firstname: firstname, age: age };

// ES6
obj2 = { firstname, age };

console.log(obj);
console.log(obj2);




/* ==================== Arrow function ==================== */

const names = [
	{ firstname: "Luigi", age: 21 },
	{ firstname: "Oscar", age: 32 },
];

let listOfNames = names.map(function (item) {
	console.log(item.firstname);
});

// ES6
let listNames = names.map((item) => console.log(item.firstname));

const listNames2 = (firstname, age, country) => {
	// your code
};

const listNames3 = (firstname) => {
	// your code
};

const square = (num) => num * num;




/* ==================== Promesas ==================== */

const helloPromise = () => {
	return new Promise((resolve, reject) => {
		if (true) resolve("Hey!");
		else reject("Ups!");
	});
};

helloPromise()
	.then((response) => console.log(response))
	.then(() => console.log("Hola"))
	.catch((error) => console.log(error));




/* ==================== Clases ==================== */

class calculator {
	constructor() {
		this.valueA = 0;
		this.valueB = 0;
	}

	sum(valueA, valueB) {
		this.valueA = valueA;
		this.valueB = valueB;

		return this.valueA + this.valueB;
	}
}

const calc = new calculator();
console.log(calc.sum(2, 2));




/* ==================== Módulos ==================== */

import hello from "./module";

hello();




/* ==================== Generadores ==================== */

function* fibonacci() {
	var fn1 = 1;
	var fn2 = 1;
	while (true) {
		var actual = fn2;
		fn2 = fn1;
		fn1 = fn1 + actual;
		var reset = yield actual;
		if (reset) {
			fn1 = 1;
			fn2 = 1;
		}
	}
}

var secuencia = fibonacci();
console.log(secuencia.next().value);        // 1
console.log(secuencia.next().value);        // 1
console.log(secuencia.next().value);        // 2
console.log(secuencia.next().value);        // 3
console.log(secuencia.next().value);        // 5
console.log(secuencia.next().value);        // 8
console.log(secuencia.next().value);        // 13
console.log(secuencia.next(true).value);    // 1
console.log(secuencia.next().value);        // 1
console.log(secuencia.next().value);        // 2
console.log(secuencia.next().value);        // 3