let items = [
	{ name: "Bicicle",  price: 3000  },
	{ name: "TV",       price: 2500  },
	{ name: "Book",     price: 320   },
	{ name: "Phone",    price: 10000 },
	{ name: "Laptop",   price: 20000 },
	{ name: "Keyboard", price: 500   },
	{ name: "Headset",  price: 1700  },
];

let itemsFilter = items.filter(() => {
    return items.price <= 500;
});

let itemsMap = items.map((item) => {
    return item.name;
});

let itemFind = items.find((item) => {
    return item.name === "Laptop";
});

let itemForEach = items.forEach((item) => {
    console.log(item.name);
    // It'll print all the "name" value of the array
});

let itemSome = items.some((item) => {
    return item.price <= 700;
});

console.log(itemsFilter)
// Print Book and Keyboard object

console.log(itemsMap);
// Print a new array
// ["Bicicle", "TV", "Book", "Phone", "Laptop", "Keyboard", "Headset"]

console.log(itemFind);
// Print Laptop object

console.log(itemSome);
// Print true. It makes a Boolean validation.


let numbers = [1, 2, 3, 4];

function newNum() {
    numbers.push(5, 6); // Añade elementos
    console.log(numbers);
}

newNum(); // [1, 2, 3, 4, 5, 6];

let shiftArray = numbers.shift();
console.log(numbers); // [2, 3, 4, 5, 6]; Elimina el primer elemento

let popArray = numbers.pop();
console.log(numbers); // [2, 3, 4, 5]; Elimina el último elemento