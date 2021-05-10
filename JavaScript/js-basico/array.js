var fruits = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(fruits);                // Lista de fruits
console.log(fruits.length);         // 4 (Número de elementos)

console.log(fruits[0]);             // Manzana
console.log(fruits[1]);             // Plátano
console.log(fruits[2]);             // Cereza
console.log(fruits[3]);             // Fresa
console.log(fruits[4]);             // Undefined
                                    // ...

var moreFruits = fruits.push("Uvas");
console.log(fruits[4]);             // Uvas

var lastFruit = fruits.pop("Uvas");
console.log(fruits[4]);             // Undefined

var newFruit = fruits.unshift("Uvas");
console.log(fruits[0]);             // Uvas
console.log(fruits[1]);             // Manzana
                                    // ...

var firstFruit = fruits.shift("Uvas");
console.log(fruits[0]);             // Manzana
console.log(fruits[1]);             // Plátano
                                    // ...

var valueFruit = fruits.indexOf("Manzana");
console.log(frvalueFruituits);      // 0 (Posición del elemento)